const mysql = require('mysql2');


const app =mysql.createConnection({
    host: "localhost",
    password:"n@123",
    user:"root",
    database:'db'
})

app.connect(err=>{
    if(err)
     console.log("connected to error",err)
    else{
        console.log("connected to database");
    }

    const insertQuery = `insert into db.users (id, name, email) values (?, ?, ?)`
    const insertValues = [5, 'mohit', 'mohit@gmail2342'];

    app.query(insertQuery, insertValues, (insertErr, insertResult)=>{
    if(insertErr){
       return console.error("insert err:", insertErr);
    }
     console.log("insert ID:", insertResult.insertId);
    
})
     
})


