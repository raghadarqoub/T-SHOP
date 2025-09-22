import validator from "validator";
import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";


const createToken = (id) => {
    return jwt.sign({id} , process.env.JWT_SECRET);                                        
};

const loginUser = async (req, res) => {
    try{
        const {email , password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({  success : false ,message : "User does not exist"});
        }
        const isMatch = await bcrypt.compare(password , user.password);
        if(isMatch){
            const token = createToken(user._id);
            return res.json({  success : true ,message : "User logged in successfully",token});
        }else{
            return res.json({  success : false ,message : "Invalid credentials"});
        }
    }catch(error){
        res.status(500).json(error);
    }
};
const registerUser = async (req, res) => {
    try{
        const{name , email , password} = req.body;
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({  success : false ,message : "User already exists"});
        }
        if(!validator.isEmail(email)){
            return res.json({  success : false ,message : "Please enter a valid email"});
        }
        if(password.length < 8){
            return res.json({  success : false ,message : "Please enter a strong password"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password , salt);
        const newUser = new userModel({
            name , 
            email , 
            password : hashedPassword});
        const user = await newUser.save() ;
        const token = createToken(user._id);
        return res.json({  success : true ,message : "User created successfully",token});
    }catch(error){
        res.status(500).json(error);
    }
};
const adminLogin = async (req, res) => {
    try{
        const {email , password} = req.body;
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    return res.json({  
        success : true,
        message : "Admin logged in successfully",
        token
    });
            } else {
    res.json({  
        success : false,
        message : "Invalid credentials"
    });
    } 
    }catch(error){
        res.status(500).json(error);
        console.log(error);
    }
};


export { loginUser, registerUser, adminLogin };