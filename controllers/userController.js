const User = require('../models/userModels.js')
exports.home = (req, res) => {
    res.send("hello world")    
}

exports.createUser = async (req, res) => {
    try {
        const {name, email} = req.body

        if(!name || !email){
            throw new Error("name or email are required")
        }

        const existUser =await User.findOne({email})

        if (existUser) {
            throw new Error("User already exist")
        }

        const user = await User.create({
            name,
            email
        })


        res.status(201).json({
            success: true,
            message: "user created successfully",
            user 
        })
    } catch (error) {
        console.log(error);   
        res.status(400).json({
            success: false,
            message: error.message
        })     
    }
}

exports.getUsers = async(req, res) => {
    try {
        const users = await User.find({})
        if(users.length < 1){
            res.status(200).json({
                success: true,
                message: "No user exists"
            })            
        }

        res.status(200).json({
            success: true,
            message: "All users fetehed successfully",
            users
        })
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,

        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const userid = req.params.id
        const user = await User.findByIdAndDelete(userid)
        res.status(200).json({
            success: true,
            message: "user deleted successfully",
            user
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "user delete failed "
        })
    }
}

exports.updateUser =async(req, res) => {
   try {
     const userid = req.params.id
     const { name, email} = req.body
     const updateUser = await User.findByIdAndUpdate(userid, {name, email})
     res.status(200).json({
        success: true,
        message: "user updated successfully",
        updateUser
     })
   } catch (error) {
    console.log(error);
    res.status(400).json({
        success: false,
        message: 'user updation failed '
    })
    
   }
}