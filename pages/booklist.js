import { withRouter } from "next/router";
import Link from 'next/link';

//Getting book data from database
import fetch from 'isomorphic-unfetch';



const posts = withRouter(({ router:  { query:{mytitle, author}}, books} ) => {


    return(

    <div>


    
            
        
        <div className='book-greeting'>
            <div className='greeting-text'>
                <p>{mytitle}</p>
                <p>Find your book by entering 
                    the <b>Author</b> or <b>Book name
                        below.
                    </b>
                </p>
            </div>
            
        </div>
        
        <div className='book-list'>
              
        
        {books.map( book => {
            
           
            //if (mytitle=='' && author==''){
                return (
                    <div key={book._id} className='book-item'>
                        <p>Title: {book.title}</p>
                        <p>Author: {book.author}</p>
                        
                    </div>
                )
            
        })}
    
    
        </div>        
    </div>
)});



posts.getInitialProps = async (mytitle) =>{
    console.log('book is');
    console.log(mytitle.query.mytitle)
    const res = await fetch('http://localhost:3000/api/books', {
        headers: {
            title: mytitle.query.mytitle
        }
    });
    const { data } = await res.json();

    return{ books: data }
}

    
export default posts;