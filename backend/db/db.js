const mongoose = require('mongoose')


const connect  = async () => { 
    
 try {
    const con = await mongoose.connect('mongodb://localhost:27017/test_db');
    console.log(`mongo : ${con.connection.host}`.cyan.underline);
    
 } catch (error) {
    console.error(error);
    process.exit(1)
 }   
}

module.exports = connect