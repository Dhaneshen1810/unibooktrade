import mongoose from 'mongoose';

const connection = {};
//mongoose.set('useFindAndModify', false);


console.log('Trying to connect to db.');
async function dbConnect(){
    if (connection.isConnected) {
        console.log('db on from first call')
        return;
    }

    console.log('awaiting for db connection')
    
    
    
        /*
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    */
   const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
   

    console.log('db connected')
    console.log(db.connections)

  
    

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);
    console.log('db is on.')
}

export default dbConnect;