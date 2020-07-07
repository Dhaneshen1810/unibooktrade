import dbConnect from '../../../utils/dbConnect';
import Book from '../../../modals/book';

dbConnect();

export default async (req, res) => {

 
    const { method } = req;

    const myTitle = req.headers.title;


    switch(method){
        case 'GET':
            try {
                
                const books = await Book.find({
                    //Sort here
                    'title': myTitle
                });
                

                res.status(200).json({ success: true, data: books })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            
            break;
        case 'POST':
            try {
                const book = await Book.create(req.body);

                res.status(201).json({ success: true, data: book })
            } catch (error) {
                res.status(400).json({ success: false });
                
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;


    }
}
