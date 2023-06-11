const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())
const port = 3001

const secretKey = 'secretkey'

const USERS = [

];

const QUESTIONS = [{
  title: "Two states",
  description: "Given an array , return the maximum of the array?",
  testCases: [{
    input: "[1,2,3,4,5]",
    output: "5"
  }]
}];


const SUBMISSION = [

]

app.post('/signup', function (req, res) {
  // Add logic to decode body
  // body should have email and password
  const { username, password } = req.body;
  if (USERS.find(user => username === user.username))
    return res.status(409).json({ mesage: `${username} username already exists. Try with new username` })

  //Store email and password (as is for now) in the USERS array above (only if the user with the given email doesnt exist)

  // create new user
  const newUser = {
    id: USERS.length + 1,
    username,
    password
  }

  USERS.push(newUser)

  const token = jwt.sign({ id: newUser.id, username: newUser.username }, secretKey)

  // return back 200 status code to the client
  res.status(200).json({ token, message: 'signup successfull. Please login', users: USERS })
})

app.post('/login', function (req, res) {
  // Add logic to decode body
  // body should have email and password

  // Check if the user with the given email exists in the USERS array
  // Also ensure that the password is the same


  // If the password is the same, return back 200 status code to the client
  // Also send back a token (any random string will do for now)
  // If the password is not the same, return back 401 status code to the client


  res.send('Hello World from route 2!')
})

app.get('/questions', function (req, res) {

  //return the user all the questions in the QUESTIONS array
  res.send("Hello World from route 3!")
})

app.get("/submissions", function (req, res) {
  // return the users submissions for this problem
  res.send("Hello World from route 4!")
});


app.post("/submissions", function (req, res) {
  // let the user submit a problem, randomly accept or reject the solution
  // Store the submission in the SUBMISSION array above
  res.send("Hello World from route 4!")
});

// leaving as hard todos
// Create a route that lets an admin add a new problem
// ensure that only admins can do that.

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})