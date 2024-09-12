const connectDB = require('../config/connect');
const { seedUsers, removeUsers } = require("./users/userSeeders");
const { seedPosts, removePosts } = require('./posts/postSeeders')
require("dotenv").config();

// Connect to DB
connectDB();

const run = async () => {
    try {
        const argv = process.argv[2];
        const shouldRemove = argv !== '-all';

        if (shouldRemove) {
            await Promise.all([removeUsers(), removePosts()]);
        }

        switch (argv) {
            case '+all':
                await Promise.all([seedUsers(), seedPosts()]);
                break;
            case '-all':
                await Promise.all([removeUsers(), removePosts()]);
                break;
            default:
                console.log('Command not found.+all, -all.');
                break;
        }

        // Exit the process successfully
        process.exit(0);
    } catch (error) {
        console.error('An error occurred:', error);
        // Exit the process with an error code
        process.exit(1);
    }
};

// Run the function
run();
