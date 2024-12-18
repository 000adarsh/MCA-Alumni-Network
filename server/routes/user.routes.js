const express = require('express');
const router = express.Router();

const userModel = require("../models/user.model");
// const bcrypt = require("bcryptjs");
const {
  handleUserSignUp,
  handleUserLogin,
  updateUserById,
  deleteUserById,
  logoutUser,
  getAlumniById,
  Sendcontactmail,
  getAllUsers
} = require("../controllers/user.controllers");
// const jwt = require("jsonwebtoken");

// const creatToken = async ()=>{
//   const token = await jwt.sign({ _id: '66e7477faca79561d3fc4e10'}, 'hello',{
//     expiresIn: '2 minute'
//   });
//   console.log(token);
//   const userVerify = await jwt.verify(token, "hello");
//   console.log(userVerify);
// }


// Get All Alumni Data
router.get("/api/alumni", getAllUsers);

// Creating User Account
router.post("/alumni/register", handleUserSignUp);

// Contact Us
router.post("/contactus", Sendcontactmail);

// Login User Account
router.post("/alumni/login", handleUserLogin);

// Update Alumni Data
router.patch("/alumni/:id", updateUserById);

// Delete Alumni Data
router.delete("/alumni/:id", deleteUserById);


// Get Alumni Data by ID
router.get("/alumni/:id", getAlumniById);

//Log Out
router.get("/alumni/logout", logoutUser);

module.exports = router;
