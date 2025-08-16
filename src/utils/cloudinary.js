import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async localFilePath => {
    try {
        if (!localFilePath) return null;

        if (!fs.existsSync(localFilePath)) {
            throw new Error(`File not found at path: ${localFilePath}`);
        }

        const uploadOptions = {
            resource_type: 'auto',
        };

        const response = await cloudinary.uploader.upload(localFilePath, uploadOptions);

        console.log('File uploaded successfully to Cloudinary:', response.url);

        fs.unlinkSync(localFilePath);

        return response;
    } catch (error) {
        if (localFilePath && fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }

        console.error('Error uploading file to Cloudinary:', error);
        throw error;
    }
};

const deleteFromCloudinary = async (publicId, resourceType = 'image') => {
    if (!publicId) return null;

    try {
        const response = await cloudinary.uploader.destroy(publicId, {
            resource_type: resourceType,
        });

        console.log('File deleted successfully from Cloudinary:', publicId);
        return response;
    } catch (error) {
        console.error('Error deleting file from Cloudinary:', error);
        throw error;
    }
};

export { uploadOnCloudinary, deleteFromCloudinary };
