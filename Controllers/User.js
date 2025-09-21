

const User = require('../Modals/User');
const bcrypt = require('bcryptjs')

exports.signUp = async (req, res) => {
    try {
        const { channelName, userName, password, about, profilePic } = req.body;
        const isExist = await User.findOne({ userName });
        if (isExist) {
            res.status(400).json({ error: "Username already exists ! Kindly try with some other Username ..." });
        }
        else {
            let updatedPass = await bcrypt.hash(password, 10);
            console.log(updatedPass)
            const user = new User({ channelName, userName, password: updatedPass, about, profilePic });
            await user.save();
            res.status(201).json({ message: 'User Registered Sucessfully !', sucess: 'yes', data: user });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to save user", details: error.message });

    }
};

exports.signIn = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const isExist = await User.findOne({ userName });
        if (isExist) {
            let verify = await bcrypt.compare(password,isExist.password);
            if (verify) {
                res.status(201).json({ message: 'Logged In Sucessfully !', sucess: 'yes', data: isExist });
            }
            else {
                res.status(400).json({ error: "Password Incorrect !" });
            }
        }
        else {
            res.status(400).json({ error: "User doesn't exist !" });
        }

    } catch (error) {
        res.status(500).json({ error: "Failed to signIn", details: error.message });

    }
};