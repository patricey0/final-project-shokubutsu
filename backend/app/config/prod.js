module.exports = {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 8080,
    pg_url: process.env.DATABASE_URL,
    redis_url: process.env.REDISCLOUD_URL,
    jwt_secret: process.env.JWT_SECRET,
    cloudinary_key: process.env.API_KEY,
    cloudinary_secret: process.env.API_SECRET,
    cloudinary_name: process.env.CLOUD_NAME
};