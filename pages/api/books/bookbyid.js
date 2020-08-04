import dbConnect from '../../../utils/dbConnect';
import Book from '../../../modals/book';

dbConnect();

export default async (req, res) => {

 
    const { method } = req; 

    //const myTitle = req.headers.title;
    //const myAuthor = req.headers.author;
    const myID = req.headers.id;


    // In case we have only the author as input, we will looking
    // for all books with that author
    
    if (myID!=''){

        switch(method){
            case 'GET':
                try {
                    
                    const books = await Book.find({
                        //Sort here
                        //'title': myTitle
                        'author': "Be"
                    });
                    
    
                    res.status(200).json({ success: true, data: books })
                } catch (error) {
                    res.status(400).json({ success: false }); 

                    console.log('book by id not found');
                }

                break;
            default:
                res.status(400).json({ success: false });
                break;
        }


    }

    //In case only the title is given as input,
    // Look for all books with that title
    else {

        switch(method){
            case 'GET':
                try {
                    
                    const books = await Book.find({
                        //Sort here
                        'id': myID
                    });
                    
    
                    res.status(200).json({ success: true, data: books })
                } catch (error) {
                    res.status(400).json({ success: false });

                    console.log('Book by ID not found');
                }
                
                break;
            default:
                res.status(400).json({ success: false });
                break;
        }
    }

    
    
}
