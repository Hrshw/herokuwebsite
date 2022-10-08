import express from "express";
import BooksController from "../controllers/bookscontr.js";
const router = express.Router();




router.get("/", BooksController.getIndex);
router.post("/", BooksController.createBook);
router.get("/edit/:id", BooksController.editBook);
router.post("/update/:id", BooksController.updateBookById);
router.post("/delete/:id", BooksController.deleteBookById);
router.get("/search/:key", BooksController.search);


export default router;