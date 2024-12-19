import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const createToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}


// route for user login
const loginUser  = async (req, res) => {
    try {
        const {email,password} =req.body;
        const user =await userModel.findOne({email});

        if(!user){
            return res.status(400).json({ success: false, message: "User doesn't exists" });
        }
        const isMatch =await bcrypt.compare(password,user.password);
        if(isMatch){
           const token =createToken(user._id)
           res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"Invalid credentials"})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error. Please try again later." });
    }
}

// route for user register
const registerUser  = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check for missing fields
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "Please provide all required fields: name, email, and password." });
        }

        // Checking if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(409).json({ success: false, message: "User  already exists" });
        }

        // Validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Please enter a strong password" });
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser  = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser .save();

        const token = createToken(user._id);
        res.status(201).json({ success: true, token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error. Please try again later." });
    }
}

// route for admin login
const adminLogin = async (req, res) => {
      try {
        const {email,password} =req.body;
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token =jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({success:true,token})
        }else{
            res.json({success:false,message:"Invalid credential"})
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error. Please try again later." });
      }
}

export { loginUser , registerUser , adminLogin };