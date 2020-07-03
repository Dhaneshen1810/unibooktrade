import { withRouter } from "next/router";
import Link from 'next/link';

//Getting book data from database
import fetch from 'isomorphic-unfetch';


const posts = withRouter(({ router:  { query:{mytitle, author}}, books} ) => (
    <div>

        <div className='book-greeting'>
            <div className='greeting-text'>
                <p>the title is {mytitle}</p> 
                <p>Find your book by entering 
                    the <b>Author</b> or <b>Book name
                        below.
                    </b>
                </p>
            </div>
                
            

            
        </div>
        
        <div className='book-list'>
        {books.map(book => {
            var check=0;
            if (book.title == mytitle){

            
            return (
                <div key={book._id} className='book-item'>
                    {book.title}
                </div>
            )
            }
            else{
                
            }
        })}
        </div>
        


        
    </div>
));

posts.getInitialProps = async () =>{
    const res = await fetch('http://localhost:3000/api/books');
    const { data } = await res.json();

    return{ books: data }
}
  

    
export default posts;


