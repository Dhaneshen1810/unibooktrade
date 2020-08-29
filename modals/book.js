const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true,
        maxlength: [3000, 'Title cannot be more than 40 characters']
    },
    author:{
        type: String,
        required: true,
        maxlength: [3000, 'author cannot be more than 40 characters']
    },

    ownerID:{
        type: Number,
    },
    ownerName:{
        type: String,
    },
    imageFront: 
    { 
        data: String, 
        contentType: String 
    },
    price:{
        type: Number
    },
    userEmail:{
        type: String
    },
    postedOn:{
        type:String
    }


})

module.exports = mongoose.models.Book || mongoose.model('Book',
BookSchema);