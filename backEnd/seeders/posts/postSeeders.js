const { Post } = require('../../models/Post')
const PostsData = require("./postsData")

const { User } = require('../../models/User')
const path = require('path');
const { cloudinaryUploadImage, cloudinaryRemoveImage } = require('../../utils/cloudinary')



const seedPosts = async () => {
    try {
        // Retrieve all users' IDs
        const users = await User.find({ isAdmin: false }).select('_id');

        // Use Promise.all to handle asynchronous operations
        const postsWithUsers = await Promise.all(PostsData.map(async (post) => {
            const randomUser = users[Math.floor(Math.random() * users.length)];
            post.user = randomUser._id;

            // Handle image upload
            
                const imagePath = path.join(__dirname, post.imageUrl);
                const result = await cloudinaryUploadImage(imagePath);

                post.image = {
                    url: result.secure_url,
                    publicID: result.public_id
                };
            

            return post;
        }));

        // Insert posts with assigned user IDs and image data
        await Post.insertMany(postsWithUsers);
        console.log('Posts seeded successfully:', postsWithUsers);
    } catch (error) {
        console.log('Error seeding posts:', error);
        process.exit(1);
    }
};


const removePosts = async () => {
    try {
        await Post.deleteMany();
        console.log("posts Removed!");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


module.exports = {
    seedPosts,
    removePosts
}
