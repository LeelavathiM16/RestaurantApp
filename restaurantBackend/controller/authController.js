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
    });

    await newUser.save();
    return res
      .status(201)
      .json({ success: true, message: "Signup successfully", data: newUser });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Registration failed" });
  }
};

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const checkLoginUser = await User.findOne({ email });

    if (!checkLoginUser) {
      return next(new ErrorHandle("Invalid credentials", 401));
    }

    let userPassword = await bcrypt.compare(password, checkLoginUser.password);
    if (!userPassword) {
      return next(new ErrorHandle("Invalid credentials", 401));
    }
    let token;
    if (checkLoginUser && userPassword) {
      token = jwt.sign(
        {
          id: checkLoginUser._id,
          email: checkLoginUser.email,
          role: checkLoginUser.role,
        },
        "SECRETKEY",
        { expiresIn: "60m" },
      );
    }
    return res
      .cookie("accessToken", token, {
        httpOnly: true,
        secure: false,
      })
      .status(200)
      .json({
        success: true,
        message: "logged in successfully",
        user: {
          id: checkLoginUser._id,
          email: checkLoginUser.email,
          role: checkLoginUser.role,
        },
      });
  } catch (err) {
    return res.status(500).json({ success: false, message: "Login failed" });
  }
};

const logoutController = async (req, res, next) => {
  return res
    .clearCookie("accessToken", { httpOnly: true, secure: false })
    .json({ success: false, message: "logged out successfully" });
};

module.exports = { registerController, loginController, logoutController };
