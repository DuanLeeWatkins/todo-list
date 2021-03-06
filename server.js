const express = require("express");
const app = express();
const connectDB = require('./config/database')

//Making sure requests goes to right controller
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')
/* const MongoClient = require("mongodb").MongoClient;
const PORT = 2222; */

//enabling us to use our env file
require("dotenv").config({path: './config/.env'});

//Connects us to our DataBase
connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//handles request routes
app.use('/', homeRoutes)
app.use('/todos', todoRoutes)

//Server is Listening
app.listen(process.env.PORT, () => {
  console.log('Server is running, you better catch it!')
})
/* let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = "todo";

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
  .then((client) => {
    console.log(`Hey, connected to ${dbName} database`);
    db = client.db(dbName);
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  const todoItems = await db.collection("todos").find().toArray();
  const itemsLeft = await db
    .collection("todos")
    .countDocuments({ completed: false });
  res.render("index.ejs", { zebra: todoItems, left: itemsLeft });
});
app.post("/createTodo", (req, res) => {
  db.collection("todos")
    .insertOne({ todo: req.body.todoItem, completed: false })
    .then((result) => {
      console.log("Todo has been added!");
      res.redirect("/");
    });
});

app.put("/markComplete", (req, res) => {
  db.collection("todos")
    .updateOne(
      { todo: req.body.rainbowUnicorn },
      {
        $set: {
          completed: true,
        },
      }
    )
    .then((result) => {
      console.log("Marked Complete");
      res.json("Marked Complete");
    });
});
app.put("/undo", (req, res) => {
  db.collection("todos")
    .updateOne(
      { todo: req.body.rainbowUnicorn },
      {
        $set: {
          completed: false,
        },
      }
    )
    .then((result) => {
      console.log("Marked Complete");
      res.json("Marked Complete");
    });
});

app.delete("/deleteTodo", (req, res) => {
  console.log(req.body.rainbowUnicorn);
  db.collection("todos")
    .deleteOne({ todo: req.body.rainbowUnicorn })
    .then((result) => {
      console.log("Deleted Todo");
      res.json("Deleted It");
    });
});

app.listen(process.env.PORT || PORT, () => {
  console.log("Server is running, you better catch it!");
});
 */