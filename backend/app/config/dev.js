module.exports = {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 5000,
    pg_url: process.env.PG_URL,
    redis_url: process.env.REDIS_URL,
    jwt_secret: process.env.JWT_SECRET,
    cloudinary_key: process.env.API_KEY,
    cloudinary_secret: process.env.API_SECRET,
    cloudinary_name: process.env.CLOUD_NAME
}