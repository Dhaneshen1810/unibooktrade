import dbConnect from '../../../utils/dbConnect';
import Book from '../../../modals/book';


dbConnect();


export default async (req, res) => {
  const {
    query: { id },
    method
  }= req;

  
console.log('method is '+method);

  switch(method){
    case 'GET':
      try {
        const book = await Book.findById(id);

        if (!book){
          return res.status(400).json({ success: false });
        }
      
        res.status(200).json({ success: true, data: book });

      } catch (error) {
        return res.status(400).json({ success: false });

      }
      break;

    case 'PUT':
      try {
        const book = await Book.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        });

        if (!book){
          return res.status(400).json({ success: '!book' });
        }

        res.status(200).json({ success: true, data: book });


      } catch (error) {
        return res.status(400).json({ success: id });
      }
      break;

    case 'DELETE':
      console.log('Set to delete: '+id);
      try {
        const deletedBook = await Book.deleteOne({ _id: id });

        if (!deletedBook){
          return res.status(400).json({ success: false });

        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        return res.status(400).json({ success: 'some error happenn' });

      }
      break;
    default:
      res.status(400).json({ success: false });

      break;

  }

  
  

}