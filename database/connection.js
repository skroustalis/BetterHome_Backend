const mongoose = require('mongoose')


const connectDB = async () => {
    try{
        const con = await mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        })
        console.log('MongoDB connected');
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}


    module.exports = connectDB