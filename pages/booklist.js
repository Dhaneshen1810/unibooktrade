import { withRouter } from "next/router";
import Link from 'next/link';

//Getting book data from database
import fetch from 'isomorphic-unfetch';



const posts = withRouter(({ router:  { query:{name, id, firstname, mytitle, author}}, books} ) => {


    return(

    <div>


    
            
        
        <div className='book-greeting'>
            <div className='greeting-text'>
                <p>Name: {name}</p>
                <p>Id: {id}</p>
                <p>Firstname: {firstname}</p>
                <p>title: {mytitle}</p>
                <p>Author: {author}</p>
                <p>Find your book by entering 
                    the <b>Author</b> or <b>Book name
                        below.
                    </b>
                </p>
            </div>
            
        </div>
        
        <div className='book-list'>
              
        
        {books.map( book => {
            
           
                return (
                    <div key={book._id} className='book-item'>
                        <p>Title: {book.title}</p>
                        <p>Author: {book.author}</p>
                        <p>Owner: {book.ownerID}</p>
                        <p>Book id: {book._id}</p>
                        
                    </div>
                )
            
        })}
    
    
        </div>        
    </div>
)});



posts.getInitialProps = async (mytitle) =>{

    const res = await fetch('http://localhost:3000/api/books', {
        headers: {
            title: mytitle.query.mytitle,
            author: mytitle.query.author
        }
    });
    const { data } = await res.json();

    return{ books: data }
}

    
export default posts;