const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const imageController = {
    
    deleteImage: async (req, res) => {
        const image_id = req.body.image_url.split('/')[req.body.image_url.split('/').length-1].split('.')[0];
        console.log(image_id);
        try {
            const result = await cloudinary.uploader.destroy(image_id, {
                invalidate: true,
                resource_type: "image"
            });
            console.log(result);
            res.json(result);
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message);
        }
    }
}

module.exports = imageController;