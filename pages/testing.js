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
                name: name,
                id: id,
                firstname: firstname,
                mytitle: '',
                author: ''
                    
            }
        });
    }

    // Redirect to myprofile
    const myProfile = () => {
        Router.push({
            pathname: '/myprofile',
            query: { 
                    mytitle: '',
                    author: '',
                    name: name,
                    id: id,
                    firstname: firstname
                    
            }
        });
    }

    // Redirect to new
    const myBooks = () => {
        Router.push({
            pathname: '/new',
            query: { 
                    id: id,
                    name: name,
                    firstname: firstname
                    
            }
        });
    }

    // Redirect to posts
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

    // Redirect to contact page
    // Information transferred are user, book and bookowner information
    const Contact = (bookID, bookOwnerName, bookTitle, bookOwnerID) => {
        var splitFullName = bookOwnerName.split(" ");
        var ownerFirstName = splitFullName[0];

        Router.push({
            pathname: '/contact',
            query: { 
                    //User information
                    id: id,
                    name: name,
                    firstname: firstname,
                    //Book information
                    bookID: bookID,
                    bookTitle: bookTitle,
                    //book owner information
                    bookOwnerName: bookOwnerName,
                    ownerFirstName: ownerFirstName,
                    bookOwnerID: bookOwnerID
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


                    
                <p className='icon-box-text'>This is a collection of all the books matching your search 
                
                <br/>We currently have {books.length} available</p>
                
            </div>
            
        </div>
        
        <div className='book-list'>
              
      
        {books.map( book => {
            //processing image data
            var imageData;

            if (book.imageFront){
                console.log('image')
                console.log(book.imageFront.contentType)
                
                imageData = book.imageFront.data;
                console.log(imageData)
                console.log('length: '+ imageData.length);
            }
            else{
                console.log('no image');
                //using dummy data if image data is not present
                imageData='eweffwf';
            }
            
    
                return (

                    <div key={book._id} className='book-item'>
                        <div className='item-section1'>
                        <img src={imageData}  style={{ width:'110px', height:'110px', borderRadius:'10px', marginTop:'10px', marginLeft:'10px'}}/>
                        </div>
                        <div className='item-section2'>
                        <p>{book.title}</p>
                        <p>{book.author}</p>
                        <p>${book.price}</p>
                        <a style={{ cursor:'pointer' }} onClick={() => Contact(book._id, book.ownerName, book.title, book.ownerID)}><b>Contact {book.ownerName}</b></a>
                        </div>
                        
                    </div>
                )
        
            
        })}

    
    
        </div>        
    </div>
)



});

// Get content from database
posts.getInitialProps = async (ctx) =>{
    
        //const res = await fetch('https://unibooktrade.vercel.app/api/books', {
        const res = await fetch('http://localhost:3000/api/books', {
            
        headers: {
            title: ctx.query.mytitle,
            author: ctx.query.author
        }
    });

    
  
        const { data } = await res.json();

        

        return{ books: data }
   
    
}

    
export default posts;