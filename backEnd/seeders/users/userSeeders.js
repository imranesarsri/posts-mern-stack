const usersData = require("./usersData")
const { User } = require('../../models/User')

const seedUsers = async () => {
    try {
        await User.insertMany(usersData)
        console.log('Users Imported')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

const removeUsers = async () => {
    try {
        await User.deleteMany();
        console.log("Users Removed!");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


module.exports = {
    seedUsers,
    removeUsers
}
