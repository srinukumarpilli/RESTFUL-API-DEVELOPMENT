const express = require("express");
const app = express();
app.use(express.json());
let books = [
    {
        id: 1,
        title: "JavaScript Basics",
        author: "John"
    }
];
app.get("/books", (req, res) => {
    res.json(books);
});
app.get("/books/:id", (req, res) => {
    const book = books.find(
        b => b.id == req.params.id
    );
    res.json(book);
});
app.post("/books", (req, res) => {
    books.push(req.body);
    res.json({
        message: "Book Added"
    });
});
app.put("/books/:id", (req, res) => {
    const book = books.find(
        b => b.id == req.params.id
    );
    if(book){
        book.title = req.body.title;
        book.author = req.body.author;
        res.json({
            message: "Book Updated"
        });
    }
});
app.delete("/books/:id", (req, res) => {
    books = books.filter(
        b => b.id != req.params.id
    );
    res.json({
        message: "Book Deleted"
    });
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});