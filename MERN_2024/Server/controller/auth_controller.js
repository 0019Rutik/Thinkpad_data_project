const express = require("express");
const User = require("../model/user_model");
const bcrypt = require('bcryptjs');

const Home = async (req, res) => {

      try {
        console.log(res.body);
       res.status(200).send("welcome to home page");
       
      } catch (error) {
        res.status(500).send( "internal server error" );
    }
}





const register = async (req, res) => {

    try {
      
      const { user , email , phone , password  } = req.body;
      console.log(req.body);
      const userExist = await  User.findOne({email:email});       
      //console.log(userExist);                                                              
      if(userExist){
       return  res.status(400).json({msg : "User Already Exist" });
      }
      // hash the password 
      const saltRound = 10;
      const hash_password = await bcrypt.hash(password, 10);

       const userCreated = await User.create({
          user 
        , email 
        , phone
        , hash_password});                                                              
      res.status(201).
      json({msg : "registration succesfull!!" , token : await userCreated.generateToken() ,
         userId :userCreated._id.toString() });
        
    } catch (error) {
      res.status(500).send( "internal server error" );
  }
}




module.exports = {Home , register}