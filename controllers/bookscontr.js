import booksModel from "../models/books.js";

class booksController {
    // creation work
    static createBook = async (req, res) => {
        try {
            const { bookname, authore, type } = req.body;
            const newBook = new booksModel({
                bookname,
                authore,
                type
            })
            // saving BOOK 
            const result = await newBook.save();
            res.redirect("/");
            // console.log(result);
        } catch (error) {
            console.log(error);
        }

    };

    // get data all
    static getIndex = async (req, res) => {
        try {
            const result = await booksModel.find()
            res.render('index', { data: result });
        } catch (error) {
            console.log(error)
        }

    };

    static editBook = async (req, res) => {
        // console.log(req.params.id)
        try {
            const result = await booksModel.findById(req.params.id);
            // console.log(result);
            res.render("edit", { data: result });
        } catch (error) {
            console.log(error);
        }

    };

    static updateBookById = async (req, res) => {
        try {
            await booksModel.findByIdAndUpdate(req.params.id, req.body)
            res.redirect("/");
        } catch (error) {
            console.log(error);
        }
    };

    static deleteBookById = async (req, res) => {
        try {
            await booksModel.findByIdAndDelete(req.params.id)
            res.redirect("/");
        } catch (error) {
            console.log(error);
        }
    };

    static search = async (req, res) => {
        try {
            console.log(req.params.key)
          const result = await booksModel.find(
                {
                    "$or":[
                        {"type":{$regex: req.params.key}}
                    ]
                }
            )
            res.render("index", {data: result});
        } catch (error) {
            console.log(error);
        }
    };
};

export default booksController;