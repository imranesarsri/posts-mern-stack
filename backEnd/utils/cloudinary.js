const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})


// Cloudinary upload Image
const cloudinaryUploadImage = async (fileTOUpload) => {
    try {
        const data = await cloudinary.uploader.upload(fileTOUpload, {
            resource_typr: 'auth',
        })
        return data
    } catch (error) {
        return error
    }
}

// Cloudinary Remove Image
const cloudinaryRemoveImage = async (fileTOUpload) => {
    try {
        const result = await cloudinary.uploader.destroy(fileTOUpload)
        return result
    } catch (error) {
        return error
    }
}

// Cloudinary Remove Image
const cloudinaryRemoveMultipleImage = async (publicIds) => {
    try {
        const result = await cloudinary.v2.api.delete_resources(publicIds)
        return result
    } catch (error) {
        return error
    }
}


module.exports = {
    cloudinaryUploadImage,
    cloudinaryRemoveImage,
    cloudinaryRemoveMultipleImage
}