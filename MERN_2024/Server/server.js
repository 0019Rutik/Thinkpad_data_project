require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth_router"); // Use require() for importing modules

const connectDB = require("./utils/db"); // Import connectDB function
app.use(express.json());
const PORT = 5000;

app.use("/api/auth", router);


// app.get("/", (req, res) => {
//     res.status(200).send("welcome to the home page");
// });


// app.get("/About", (req, res) => {
//     res.status(2000).send("welcome to the About page");
// });

// app.get("/register", (req, res) => {
//     console.log(req.body);
//     res.status(200).json({message : req.body});
//     res.send("welcome to the register  page");
// });

// app.get('/test', (req, res) => {
//     const data = { message: req.body };
//     console.log(ereq.body);
//     res.status(200).json(data);
//   });
  


  connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port : ${PORT}`);
    });
});


