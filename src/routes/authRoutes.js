// /src/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const { auth } = require('../config/firebaseConfig');
//const { analytics } = require("../config/firebaseConfig");

const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');

// Email and Password Sign Up

// router.post("/sign-up", (req, res) => {
//   console.log("Received POST request at /auth/sign-up");
//   res.send("Sign-up route is working!");
// });


router.post("/sign-up", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    res.status(201).json({ user: userCredential.user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Email and Password Sign In
router.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    res.status(200).json({ user: userCredential.user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
