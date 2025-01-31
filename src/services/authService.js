import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET = '678e382367c0Fd1336622011'

const register = (userData) => {
    return User.create(userData);
};

const login = async (email,password) => {
    const user = await User.findOne({email});

    if(!user){
        throw new Error('Invalid email or passwrod');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if(!isValidPassword){
        throw new Error('Invalid email or password');
    }

    const payload = {
        id: user.id,
        email: user.email
    };
    const token = jwt.sign(payload,SECRET,{expiresIn: '2h'});
    return token;
}

export default {
    register,
    login,
}