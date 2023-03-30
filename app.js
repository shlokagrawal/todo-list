const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();
app.set('view engine', 'ejs'); // using ejs first time.
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public")) // to tell express use resources from public folder, becuase it ignores other folders like css, images etc.

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.get("/", function (req,res) {
    // res.send("Hello!");

    // passing day & list item to lits.ejs page
    res.render("lists", { listTitle: date.dayToday, newListItems: items});
})

app.post("/", function (req,res) {
    // console.log(req.body.button);
    let item = req.body.newItem;
    if (req.body.button==="Work List"){
        workItems.push(item);
        res.redirect("/work")
    }else{
        items.push(item);
        res.redirect("/");
    }
})

app.get("/work", function (req,res) {
    res.render("lists", {listTitle: "Work List", newListItems: workItems});
})

app.post("/work", function (req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.get("/about", function (req,res) {
    res.render("about");
})

app.listen("3000", function () {
    console.log("Server is running at 3000");
})