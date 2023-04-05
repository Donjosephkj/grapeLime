const express = require("express");

const cors = require("cors");

const jwt = require("jsonwebtoken");

const dataservice = require("./services/dataService");
const server = express();

server.listen(3000, () => {
  console.log("server started at port 3000");
});

server.use(express.urlencoded({extended:true}))
server.use(
  cors({
    origin: "http://localhost:4200",
  })
);

const jwtmiddleware = (req, res, next) => {
  const token = req.headers["access-token"];
  console.log(token);
  try {
    jwt.verify(token, "supersecretkeyabc");
    next();
  } catch {
    res.status(401).json({
      message: "please login",
    });
  }
};

server.post("/register", (req, res) => {
  console.log(req.body);
  dataservice
    .Register(req.body.name, req.body.uname, req.body.pswd)
    .then((result) => {
      res.status(result.statusCode).json(result);
    });
});

server.post("/login", (req, res) => {
  console.log(req.body);
  dataservice.Login(req.body.uname, req.body.pswd).then((result) => {
    res.status(result.statusCode).json(result);
  });
});


server.get('/',(req,res)=>{
  res.json({message:'hello from api'})
})