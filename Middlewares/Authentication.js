

const jwt = require('jsonwebtoken');
const User = require('../Modals/User');


const auth = async (req, res, next) => {
    const token = request.cookies.token;
    if (!token) {
        return res.status(401).json({ error: "No token ! Authorization denied ..." });
    } else {
        try {
            const decode = jwt.verify(token, "Its_My_Secret_Key");
            req.user = await User.findById(decode.userId).select('-password');
            next();
        } catch (error) {
            return res.status(401).json({ error: "token is not valid !" });
        }
    }
};