const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// cloudinary configuration
cloudinary.config({
    cloud_name: "shokubutsu",
    api_key: "977658599574278",
    api_secret: "awi99aXkH6FTtOyP6RrXWeQaM6A",
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