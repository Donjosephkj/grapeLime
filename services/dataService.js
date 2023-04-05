const db = require("./db");
const jwt = require("jsonwebtoken");


//register
const Register =async (uname,pswd)=>{
    const jane = await db.User.create({
        username: uname,
        password:pswd,
        name:'',
        email:'',
        phone:''

      });
      
      const users = await User.findAll();
}

module.exports = {
    Register    
  };
  