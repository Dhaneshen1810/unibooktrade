import dbConnect from '../../../utils/dbConnect';
import Book from '../../../modals/book';

dbConnect();

console.log('inside the main book ')



export default async (req, res) => {

 
    const { method } = req; 

    console.log('method is '+ method)


    

    var myTitle = req.headers.title;
    var myAuthor = req.headers.author;

    if (req.body.id){
        console.log('id present.')
        const myID = req.body.id;
        myTitle = req.body.title;
        myAuthor = req.body.author;
        //const ownerID = req.body.ownerID;
        console.log(req.body);

    }
    

    console.log('title is '+myTitle);
    console.log('author is '+ myAuthor);
    //console.log(req.body.imageFront.data[0]);


   
    // In case we have only the author as input, we will looking
    // for all books with that author
    if (myTitle=='' && myAuthor!=''){
        console.log('No title')

        switch(method){
            case 'GET':
                try {
                    
                    const books = await Book.find({
                        //Sort here
                        //'author': myAuthor
                        'author': {'$regex': myAuthor}
                    });
                    
                    
    
                    res.status(200).json({ success: true, data: books })
                } catch (error) {
                    res.status(400).json({ success: false }); 

                    console.log('Author not found');
                }
                
                break;
            case 'POST':
                try {
                    const book = await Book.create(req.body);
                    console.log('post');
                    console.log(req.body);
    
                    res.status(201).json({ success: true, data: book })
                } catch (error) {
                    res.status(400).json({ success: false });
                    console.log("couldn't post 1");
                    
                }
                break;
            default:
                res.status(400).json({ success: false });
                break;
        }


    }

    //In case only the title is given as input,
    // Look for all books with that title
    else if (myAuthor=='' && myTitle!=''){
        console.log('No author');

        switch(method){
            case 'GET':
                try {
                    
                    const books = await Book.find({
                        //Sort here
                        //'title': myTitle
                        'title': {'$regex': myTitle}
                    });
                    
    
                    res.status(200).json({ success: true, data: books })
                } catch (error) {
                    res.status(400).json({ success: false });

                    console.log('Title not found');
                }
                
                break;
            case 'POST':
                try {
                    const book = await Book.create(req.body);
                    console.log('post');
                    console.log(req.body);
    
                    res.status(201).json({ success: true, data: book })
                } catch (error) {
                    res.status(400).json({ success: false });
                    console.log("couldn't post 2");
                    
                }
                break;
            default:
                res.status(400).json({ success: false });
                break;
        }
    }

    // User input both the title and the author
    // Return book matching both
    else if (myTitle!='' && myAuthor!=''){
        console.log('my title is: '+ myTitle);
        console.log('my author is: '+ myAuthor);
        switch(method){
            case 'GET':
                try {

                    const books = await Book.find({
                        //Sort here
                        'title': {'$regex': myTitle},
                        'author': {'$regex': myAuthor}
                    });
                    console.log('books are ready')
    
                    res.status(200).json({ success: true, data: books })
                } catch (error) {
                    res.status(400).json({ success: false });
                }
                
                break;
            case 'POST':
                try {
                    const book = await Book.create(req.body);
                    //var str = req.body.imageFront;
                    //var str = req.body.imageFront.data;
                    //console.log(str)
    
                    res.status(201).json({ success: true, data: book })
                } catch (error) {
                    res.status(400).json({ success: false });
                    console.log("couldn't post 3");
                    console.log('Failed: '+myTitle+' '+myAuthor);
                    
                }
                break;
            case 'PUT':
                try {
                    const book = await Book.findByIdAndUpdate(req.body.id, req.body, {
                        new: true,
                        runValidators: true
                      });
              
                      if (!book){
                        return res.status(400).json({ success: '!book' });
                      }

                      res.status(200).json({ success: true, data: book });
                } catch (error) {
                    res.status(400).json({ success: false });
                }
                break;
            default:
                res.status(400).json({ success: false });
                break;
        }
    }
    

    // There is no given title and author
    // We return all books available
    else if (myTitle=='' && myAuthor==''){
        console.log('in number 4')
        switch(method){
            
            case 'GET':
                console.log(req.headers.bookid)
                if (req.headers.id){
                    // bookID has been provided
                    // We will use bookID to find book
                    if(req.headers.bookid){
                        try {
                            console.log('Book id present')
        
                            const books = await Book.find({
                                _id: req.headers.bookid
                            });
        
                            console.log('Got books');
                            
            
                            res.status(200).json({ success: true, data: books })
                        } catch (error) {
                            res.status(400).json({ success: false });
                        }
                    }
                    // No book id is provided
                    // Get all books from the owner
                    else{
                        try {
                            console.log('Book id not present')
        
                            const books = await Book.find({
                                ownerID: req.headers.id
                            });
        
                            console.log('Got books');
                            
            
                            res.status(200).json({ success: true, data: books })
                        } catch (error) {
                            res.status(400).json({ success: false });
                        }

                    }

            }
            else{
                
                try {
                    
                    const books = await Book.find({
                    });
                    
    
                    res.status(200).json({ success: true, data: books })
                } catch (error) {
                    res.status(400).json({ success: false });
                }
            }
                
                break;
            case 'POST':
                try {
                    const book = await Book.create(req.body);
                    console.log('post');
                    console.log(req.body);
    
                    res.status(201).json({ success: true, data: book })
                } catch (error) {
                    res.status(400).json({ success: false });
                    console.log("couldn't post 4");
                    
                }
                break;

            //Deleting book post here instead of in [id].js
            case 'DELETE':
                console.log('Attempting to delete: '+ req.body.id);
                try {
                    const deletedBook = await Book.deleteOne({ _id: req.body.id });

                    if (!deletedBook){
                    return res.status(400).json({ success: false });

                    }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        return res.status(400).json({ success: 'some error happenn' });

      }

            default:
                res.status(400).json({ success: false });
                break;
        }
    }



}
