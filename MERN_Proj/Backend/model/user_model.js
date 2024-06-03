

const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
  
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  designation: { type: String, required: true },
  gender: { type: String, required: true },
  courses: { type: [String], required: true },
  image: { type: String },
  createdate: { type: Date, default: Date.now }
});



// employeeSchema.methods.generateToken = async function () {
//     try {
//         return jwt.sign({
//             id: this._id.toString(),
//             email: this.email,
            
//         },
//             process.env.JWT_TOKEN_KEY,
//             {
//                 expiresIn: "30d",
//             }
//         );
//     } catch (error) {
//         console.error(error)
//     }
// }


const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;

