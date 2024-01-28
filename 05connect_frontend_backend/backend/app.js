import express from "express";
import PORT from "dotenv"

const app = express()

const port = process.env.PORT || 3000

app.get("/",(req, res) => {
    res.send("<h2>This is home page</h2>")
})

app.get("/api/users",(req, res) => {

    const users = [
        { name: "Amarjit", email: "amarjit@gmail.com", age: 21, city: "Pandharpur" },
        { name: "Ram", email: "ram@gmail.com", age: 25, city: "Pune" },
        { name: "Sham", email: "sham@gmail.com", age: 22, city: "Delhi" },
        { name: "Sanket", email: "sanket@gmail.com", age: 23, city: "Mumbai" },
        { name: "Mahesh", email: "mahesh@gmail.com", age: 21, city: "Banglore" },
        { name: "Rahul", email: "rahul@gmail.com", age: 27, city: "Pune" }
    ]

    res.send(users)
})

app.get("/api/about",(req, res) => {
    res.send("<h2>This is about page</h2>")
})
app.listen(port , () => {
    console.log("server listening on port " + port);
})