import multer from 'multer';
import path from 'path';
import ApiError from '../utils/ApiError.js';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const extension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + extension);
    },
});

// File type filter
const fileFilter = (req, file, cb) => {
    // Define allowed mime types
    const allowedFileTypes = {
        images: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
        videos: ['video/mp4', 'video/mpeg', 'video/quicktime'],
        documents: [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
        ],
    };

    // Determine the type of file based on mimetype
    let fileTypeValid = false;
    const fileTypes = Object.values(allowedFileTypes).flat();

    if (fileTypes.includes(file.mimetype)) {
        fileTypeValid = true;
    }

    if (fileTypeValid) {
        cb(null, true);
    } else {
        cb(
            new ApiError(
                400,
                `Unsupported file type. Allowed types: ${Object.keys(allowedFileTypes).join(', ')}`
            ),
            false
        );
    }
};

// Configure multer upload
export const upload = multer({
    storage,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB file size limit
    },
    fileFilter,
});

// Middleware for handling different types of file uploads
export const uploadMiddleware = {
    // Upload a single image
    singleImage: upload.single('image'),

    // Upload a single file (any supported type)
    singleFile: upload.single('file'),

    // Upload multiple images (up to 5)
    multipleImages: upload.array('images', 5),

    // Upload multiple files (up to 5)
    multipleFiles: upload.array('files', 5),

    // Upload fields with different names
    fields: upload.fields([
        { name: 'avatar', maxCount: 1 },
        { name: 'documents', maxCount: 3 },
    ]),
};
