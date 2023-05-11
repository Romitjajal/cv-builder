const mongoose = require('mongoose')

module.exports = ()=>{
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log('data connected successfully');
    } catch (error) {
        console.log(error)
        console.log("data not connected successfully");
    }
}