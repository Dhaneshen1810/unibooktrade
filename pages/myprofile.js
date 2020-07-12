import { withRouter, useRouter, Router } from "next/router";
import Link from 'next/link';

//Getting book data from database
import fetch from 'isomorphic-unfetch';
import { Confirm, Butto, Loader } from 'semantic-ui-react';
import { useState, useEffect } from "react";



const myprofile = withRouter(({ router:  { query:{name, id, firstname, mytitle, author}}, books} ) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isDeleting) {
            deleteBook();
        }
    }, [isDeleting])


    const deleteBook = async () =>{
        const bookID = router.query.id;
        try {
            const deleted = await fetch('http://localhost:3000/api/books/5f06384d0cada74f14bc4c79', {
                method:"DELETE"
               
            });
        } catch (error) {
            
        }

    }

    const handleDelete = async () => {
        setIsDeleting(true);
    }

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
                        <div className='book-item-section'>
                           
                        <div key={book._id} className='book-item-profile'>
                            <p>Title: {book.title}</p>
                            <p>Author: {book.author}</p>
                            <p>Owner: {book.ownerID}</p>
                            
                        </div>
                        <div className='book-delete-section'>
                            <img src='/icons/cross.png' className='delete-icon' onClick={handleDelete}/>
                        </div>

                        </div>
                    )
                
            })}
        
        
            </div>        
        </div>
    )


});


myprofile.getInitialProps = async (mytitle) =>{

    const res = await fetch('http://localhost:3000/api/books', {
        headers: {
            title: mytitle.query.mytitle,
            author: mytitle.query.author
        }
    });
    const { data } = await res.json();

    return{ books: data }
}


export default myprofile;