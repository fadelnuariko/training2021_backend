// Import express
const express = require("express");
// const { cors } 
const cors = require("cors");
// const connection 
const db = require("./config/database.js");
// const router 
const Router = require("./routes/routes.js");

// Init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());

// Testing database connection 
async function connectDB() {
    try {
        await db.authenticate();
        console.log('DB Berhasil terhubung');
    } catch (error) {
        console.error('TErdapat masalah pada koneksi:', error);
    }
}

connectDB();

// use router
app.use(Router);

// listen on port
app.listen(5000, () => console.log('Server running at http://localhost:5000'));