const bcrypt = require('bcryptjs');
const usersData = require("./usersData")
const { User } = require('../../models/User')

const seedUsers = async () => {
    try {
        // Hash passwords before inserting users
        const usersWithHashedPasswords = await Promise.all(
            usersData.map(async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10); // 10 is the salt rounds
                return { ...user, password: hashedPassword };
            })
        );

        await User.insertMany(usersWithHashedPasswords);
        console.log('Users Imported');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

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
