const express = require("express");

const loginSch  = require("../model/login_model")
const bcrypt = require("bcryptjs");
const multer = require('multer'); // For handling multipart/form-data (file uploads)
const Employee = require('../model/user_model'); // Import the Employee model
const jwt = require('jsonwebtoken');

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads'); // Specify the directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
      // Generate a unique filename
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });

// Generate a version 4 UUID


// Truncate the UUID to a fixed length (e.g., 10 characters)



// Truncate the UUID to a fixed length (e.g., 10 characters)

  // Define the controller function for creating an employee
  const createEmployee = async (req, res) => {
    try {
      // Extract data from the request body
      const { name, email, mobileNumber, designation, gender, courses  } = req.body;
      const image = req.file ? req.file.filename : null; // Check if an image file was uploaded
  
      
      // Create a new Employee document
      const newEmployee = new Employee({
      
        
        name,
        email,
        mobileNumber,
        designation,
        gender,
        courses,
        image,
        createdate: Date.now() 
        
       
      });
  
      // Save the new Employee document to the MongoDB database
      await newEmployee.save();
    console.log("Employee Created Succesfully!!" , newEmployee)
      // Send a success response back to the client
      res.status(201).json({ message: 'Employee created successfully', employee: newEmployee });
    } catch (error) {
      // If an error occurs, send an error response back to the client
      console.error('Error creating employee:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  
  const getEmployee = async(req, res) => {

  
        try {
          const employees = await Employee.find();
          res.status(200).json({succes:true , employees});
          console.log(employees);// Sending the response once
        } catch (error) {
          console.error('Error fetching employee data:', error);
          res.status(500).json({ succes:false , message: 'Internal Server Error' });
        
      }
      

  }
  

  const updateEmployee = async (req, res) => {
    try {
      const id = req.params.id; // Extract mobile number from request parameters
      const updatedData = req.body; // Extract updated employee data from request body
  
      // Find the employee by mobile number
      const updatedemp = await Employee.findByIdAndUpdate(id ,updatedData , {new:true});
  
      if (!updatedemp) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      // Update employee data
     res.status(200).json({succes:true ,message:'user Updated succesfully ' , updatedemp});
      // Save the updated employee data
      
  
      // Respond with the updated employee data
      
    } catch (error) {
      console.error('Error updating employee data:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  

  const deleteEmployee = async (req, res) => {
    try {
      const  id  = req.params.id; // Extract employee ID from request parameters
  
      // Assuming you have an Employee model defined
      // Find the employee by ID and delete it
      const deletedEmployee = await Employee.findByIdAndDelete(id);
  
      if (!deletedEmployee) {
        return res.status(404).send("Employee not found");
      }
  
      res.status(200).send(`Employee with ID ${id} deleted successfully`);
    } catch (error) {
      console.error('Error deleting employee:', error);
      res.status(500).send("Internal server error");
    }
  }
  
  
  
  
  const Home = async (req, res) => {

    try {
      console.log(res.body);
      res.status(200).send("welcome to home page");
  
    } catch (error) {
      res.status(500).send("internal server error");
    }
  }

  


  
  const login = async (req, res) => {
    try {
  
  
      const { username, password } = req.body;
  
      console.log(username, password); //------------------------------------>
  
      const Valid_user = await loginSch.findOne({username});
      console.log(Valid_user); //------------------------------------->
  
      if (!Valid_user) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }
  
      // const user = await bcrypt.compare(password, Valid_user.password)
  
      if (Valid_user) {
        return res.status(200).json({
          message: "Login Successful"
        });
      } else {
         res.status(401).json({ message: "Invalid Username or Password" });
      }
    
  
    } catch (error) {
      // Log the error for debugging purposes
      console.log(error);
       res.status(500).json({ message: "Internal Server Error" });
    }
  };
  
  
  
  module.exports = { Home, createEmployee , getEmployee , updateEmployee , deleteEmployee , login}