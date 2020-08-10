import mongoose from 'mongoose';

console.log('inside dbConnect');

const connection = {};
//mongoose.set('useFindAndModify', false);


console.log('Trying to connect to db.');
async function dbConnect(){
    
    console.log('Above if statement.')
    
    if (connection.isConnected) {
        console.log('db on from first call')
        return 1;
    }
    

    console.log('awaiting for db connection')
    
   const db = await mongoose.connect(process.env.MONGO_URI, {
    //useNewUrlParser: true
    //useUnifiedTopology: true
})
   

if (db.connections){
    console.log('\nConnection exist')
}
else{
    console.log('no connections found')
}

  
    

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);
    console.log('db is on.')
    if (connection.isConnected) {
        console.log('db on from second call')
        return 1;
    }
    

}

export default dbConnect;