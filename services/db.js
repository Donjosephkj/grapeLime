const dbConfig = require("../config/dgconfig");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize.authenticate()
.then(()=>{
  console.log('connected');
})
.catch(err=>{
  console.log('error'+err);
})

const db={}

const Register= (name,uname,pswd)=>{

}

const Login=(uname,pswd)=>{

}

module.exports={
  Register,
  Login
}