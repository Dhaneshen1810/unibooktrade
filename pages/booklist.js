import { withRouter } from "next/router";
import Router from "next/router";
import Link from 'next/link';

//Getting book data from database
import fetch from 'isomorphic-unfetch';

import { useState, useEffect } from "react";




const posts = withRouter(({ router:  { query:{name, id, firstname, mytitle, author}}, books} ) => {
    

    // User chooses to view all available books
    const viewAll = () => {

        Router.push({
            pathname: '/booklist',
            query: { 
                    mytitle: '',
                    author: ''
                    
            }
        });
    }

    const myProfile = () => {
        Router.push({
            pathname: '/myprofile',
            query: { 
                    mytitle: '',
                    author: '',
                    name: name,
                    id: id,
                    firstname: firstName
                    
            }
        });
    }

    const myBooks = () => {
        Router.push({
            pathname: '/new',
            query: { 
                    id: id,
                    name: name,
                    firstname: firstName
                    
            }
        });
    }

    const Search = () => {
        Router.push({
            pathname: '/posts',
            query: { 
                    id: id,
                    name: name,
                    firstname: firstname
                    
            }
        });
    }


    return(

    <div className='booklist-page'>


        <div className='book-greeting'>
            <div className='greeting-text'>
            <div className='icon-box'>
                    <Link href='/'>
                        <img src="/icons/sign-out.png" alt="my image" className='my-icon'/>
                    </Link>
                    
                    <div className='my-icon-end'>
                    <img src="/icons/four-square.png" alt="my books" className='my-icon' onClick={myProfile}/>
                    
                    <img src="/icons/plus.png" alt="Add book" className='my-icon' onClick={myBooks}/>
                    <img src="/icons/search.png" alt="Search" className='my-icon' onClick={Search}/>
                    
                    </div>
                    
                </div>



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
)



});


posts.getInitialProps = async (ctx) =>{
    
        const res = await fetch('https://unibooktrade.vercel.app/api/books', {
        headers: {
            title: ctx.query.mytitle,
            author: ctx.query.author
        }
    });

    
  
        const { data } = await res.json();

        

        return{ books: data }
   
    
}

    
export default posts;