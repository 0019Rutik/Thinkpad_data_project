const express = require('express');
const app = express();
const router = require('./router/auth_router'); // Use require() for importing modules
const bodyParser = require('body-parser')
const connectDB = require('./utils/db'); // Import connectDB function
app.use(bodyParser.urlencoded({extended:true , parameterLimit:100000, limit:"500mb"}));
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000' // Replace with your application's origin
}));
// Middleware to set Content Security Policy (CSP) header
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; font-src 'self' data:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
  );
  next();
});

app.use(express.json({ limit: '100mb' }));
const PORT = 3000;

app.use("/api/auth", router);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
  });
});


