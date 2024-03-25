const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../../models/User/User');

const userController = {
  register: asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    //*Check if username already exist
    const userFound = await User.findOne({ username, email });
    if (userFound) {
      throw new Error('User already exists');
    }

    //*hash the password

    const hashedPassword = await bcrypt.hash(password, 10); //* 10 is the algorythom
    //send the response
    const userRegistered = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      status: 'success',
      message: 'User registered succesfully',
      userRegistered,
    });
  }),
  //! Login
  login: asyncHandler(async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) return next(err);
      //*check if user not found
      if (!user) {
        return res.status(401).json({ message: info.message });
      }
      //*generate token
      const token = jwt.sign({ id: user?._id }, process.env.JWT_SECRET);
      //*set the token into cookie
      res.cookie('token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000, //* that math equates to 1 day
      });
      console.log(token);
      res.json({
        status: 'sucess',
        message: 'Login Success',
        username: user?.username,
        email: user?.email,
        _id: user?.id,
      });
    })(req, res, next);
  }),
};

module.exports = userController;
