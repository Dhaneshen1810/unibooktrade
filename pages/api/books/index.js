import dbConnect from '../../../utils/dbConnect';
import Book from '../../../modals/book';

dbConnect();
console.log('inside books')

export default async (req, res) => {

 
    const { method } = req; 

    const myTitle = req.headers.title;
    const myAuthor = req.headers.author;
    

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
                        //'title': myTitle
                        'author': myAuthor
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
                        'title': myTitle
                        //'author': 'Robert Kiyosaki'
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
                        'title': myTitle,
                        'author': myAuthor
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
            default:
                res.status(400).json({ success: false });
                break;
        }
    }
    

    // There is no given title and author
    // We return all books available
    else if (myTitle=='' && myAuthor==''){
        console.log('in number 4')
        console.log('User id: '+req.headers.id)
        switch(method){
            case 'GET':
                try {
                    
                    const books = await Book.find({
                        ownerID: req.headers.id
                    });
                    
    
                    res.status(200).json({ success: true, data: books })
                } catch (error) {
                    res.status(400).json({ success: false });
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
            default:
                res.status(400).json({ success: false });
                break;
        }
    }



}
