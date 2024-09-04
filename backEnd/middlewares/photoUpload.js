const path = require('path');
const multer = require('multer');

// Photo Storage
const photoStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../upload/profileImages")); // Corrected the path for consistency
    },
    filename: function (req, file, cb) {
        if (file) {
            // Replaced colons in the date string to avoid issues in filenames
            cb(null, new Date().toISOString().replace(/:/g, "-") + '-' + file.originalname);
        } else {
            cb(null, false);
        }
    }
});

const photoUpload = multer({
    storage: photoStorage,
    fileFilter: function (req, file, cb) {
        // Corrected 'filw.minetype' to 'file.mimetype'
        if (file.mimetype.startsWith('image')) {
            cb(null, true);
        } else {
            cb(new Error('Unsupported file format'), false);
        }
    },
    limits: { fileSize: 1024 * 1024 }, // 1 megabytes
});

module.exports = photoUpload;
