import mongoose, { model } from "mongoose";

const booksSchema = new mongoose.Schema (
    {
       bookname:{type:String, required:true},
       authore:{type:String, required:true},
       type:{type:String, required:true}
    }    
)

//  Model
const booksModel = mongoose.model("books-name", booksSchema);

export default booksModel;