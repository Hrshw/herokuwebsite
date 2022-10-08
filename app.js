import express from 'express';
import connectDB from './database/connectdb.js';
import web from "./routes/web.js";
import * as dotenv from 'dotenv'
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const DATABASE_URL = process.env.PORT || "mongodb+srv://rahul:RSsmy11ssm@cluster0.kxxr0.mongodb.net/test";
const __filename = fileURLToPath(import.meta.url);

// get directory
const __dirname = path.dirname(__filename);


dotenv.config({path:'config.env'})
const port = process.env.PORT || '8080';

// log requests
app.use(morgan("tiny"))

//Database connection
connectDB(DATABASE_URL);

// Mddleware URLencoded
// app.use(express.urlencoded({ extended: false }));

//load assets
app.use('/css',express.static(path.resolve(__dirname + "/public/css")));
app.use('/js',express.static(path.resolve(__dirname + "/public/js")));


//STATIC files
// app.use('/books', express.static(join(process.cwd(), "public")));
// app.use('/books/edit', express.static(join(process.cwd(), "public")));

// set Template Engine
app.set("view engine", "ejs");
//app.set("view",path.resolve(__dirname,"views"))




//parse request to body-parser 
app.use(bodyParser.urlencoded({extended:true}))

// Lood Routes
app.use('/',web);



app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
});