const mongoose = require('mongoose');
const config=require('config');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to db before tests run
before(function(done){
    const db=config.get('mongoURI');
    //Connect to Mong
    mongoose
    .connect(db,{
        useNewUrlParser:true,
        useCreateIndex:true 
    })
    .then(()=>{
        console.log('MongoDB connected');
        done();
        })
    .catch(err=>console.log(err));
});

// Drop the characters collection before each test
beforeEach(function(done){
    // Drop the collection
    
    mongoose.connection.collections.mariochars.drop(function(){
        console.log('before each@connection')
        done();
    });
});
