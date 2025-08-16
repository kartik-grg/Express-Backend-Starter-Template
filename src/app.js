import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Import routes
import userRouter from './routes/user.routes.js';

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json({ limit: '16mb' }));
app.use(express.urlencoded({ extended: true, limit: '16mb' }));
app.use(express.static('public'));

app.use(cookieParser());

// Routes
app.use('/api/v1/users', userRouter);

// Root route
app.get('/', (req, res) => {
    res.send('API is running...');
});

export { app };
