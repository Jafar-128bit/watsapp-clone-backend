const mongoose = require('mongoose');

// username - datacenterMDB_01
// password - Pk2H9g3x52pf62kl

const connection_url ="mongodb+srv://datacenterMDB_01:Pk2H9g3x52pf62kl@cluster0.yb201qq.mongodb.net/?retryWrites=true&w=majority"
const connectDatabase = (uri, callback) => {
    try {
        mongoose.connect(connection_url, (error) =>  {
           if (error) console.log("CallBack Error", error);
           else console.log("Connected to Database");
        });
    } catch (error) {
        console.error("Try-Catch Error ---> ", error.message);
        process.exit(1);
    }
}

module.exports = connectDatabase;
