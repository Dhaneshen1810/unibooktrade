import mongoose from 'mongoose';

const connection = {};
mongoose.set('useFindAndModify', false);

async function dbConnect(){
    if (connection.isConnected) {
        return;
    }

    
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    

    /*
   mongoose.connect(process.env.MONGODB_URI).catch(function (reason) {
    console.log('Unable to connect to the mongodb instance. Error: ', reason);
});
*/
    

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);
}

export default dbConnect;