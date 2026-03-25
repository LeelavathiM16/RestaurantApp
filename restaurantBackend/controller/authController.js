const User = require("../models/authModel");
const ErrorHandle = require("../error/error");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerController = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const checkRegisterEmail = await User.findOne({ email });

    if (checkRegisterEmail) {
      return next(new ErrorHandle("User exists, please try again", 422));
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      username,
      password: hashPassword,
      email,
      role,
    });

    try {
      await newUser.save();
    } catch (err) {
      return next(new ErrorHandle("signup failed", 500));
    }
    res.status(201).json({ success: true, message: "Signup successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Registration failed" });
  }
};

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const checkLoginUser = await User.findOne({ email });

    if (!checkLoginUser) {
      return next(new ErrorHandle("login failed", 422));
    }

    let userPassword = await bcrypt.compare(password, checkLoginUser.password);

    let token;
    if (checkLoginUser && userPassword) {
      token = jwt.sign(
        { userId: username, userEmail: email, userRole: role },
        "SECRETKEY",
        { expiresIn: "60m" },
      );
    }
    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: false,
    });

    res.status(200).json({
      success: true,
      message: "logged in successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Login failed" });
  }
};

const logoutController = async (req, res, next) => {
  return res
    .clearCookie("accessToken", { httpOnly: true, secure: false })
    .json({ success: false, message: "logged out successfully" });
};

module.exports = { registerController, loginController, logoutController };
