import dotenv from 'dotenv';
import connectDB from './db';

dotenv.config({
    path: '../.env',
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${process.env.PORT || 3000}`);
        });
    })
    .catch(error => {
        console.error('Database connection failed:', error);
    });
