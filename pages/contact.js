import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import Router from 'next/router';
import { useRouter } from 'next/router';
import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';


const contact = withRouter(({ router:  { query:{name, id, firstname, bookID, bookOwnerName, ownerFirstName,bookOwnerID, bookTitle}}, books} ) => {
    const [defaultText, setDefaultText] = useState('');
    const [booklist, setBooklist] = useState([]);

    // Assign constant names to values obtained from 'booklist' via withRouter
    useEffect(() => {
        const userName = name;
        const userID = id;
        const userFirstname = firstname;

        setBooklist(books)
        console.log('booklist is')
        console.log(booklist)

    })


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
        <div className='contact-page'>
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


                <div style={{ marginTop:'4%', padding:'10px' }}>
                    
                <p style={{ fontSize:'18px' }}>This is a collection of all the books matching your search 
                
                <br/><span style={{ fontSize: '16px' }}>Once you find the one you want, get in contact with the owner.</span></p>
                
                </div>
            </div>
            
        </div>

<div className='book-list'>
        {booklist.map( book => {
                
                //var imageBase64 = book.imageFront.contentType;
                var imageData;
                var base64data;
    
                if (book.imageFront){
                    
                    imageData = book.imageFront.data;
    
                }
                else{
                    console.log('no image');
                    imageData='';
                }
                

                        return (
                               
                            <div key={bookID} className='book-item-profile'>
    
                                <div className='section1'>
                                    <div className='section1-image'>
                                        <img src={imageData}  style={{ width:'100px', height:'100px', borderRadius:'20px'}}/>
                                    </div>
                                    <div className='section1-info'>
                                        <p><b>{book.title}</b></p>
                                        <p>{book.author}</p>
                                        <p>{book._id}</p>
                                        <p>BookID: {bookID}</p>
                                        <p>$50</p>
                                    </div>
                                
                                </div>
    
                            
                                
                            </div>
    
                            
    
                            
                        )
                        
                    
                }
                
                
                )}
                </div>

        


        <div className='bookInfo'>
            <p>Name: {name}</p>
            <p>Book id: {bookID}</p>
            <p>Owner name: {bookOwnerName}</p>
            <p>Owner ID: {bookOwnerID}</p>
        </div>
        <form style={{ width:'90%', marginTop:'7%' }}>
            <textarea type="text" 
                id="lname" 
                name="lname" 
                value= {'Hi there '+ownerFirstName+', I am interested in your book, '+bookTitle+'!'}
                className='contact-textBox'
                />
            <button style={{ marginTop: '4%' }} className='btn btn-primary'>Send message</button>
        </form>

        </div>
    )

});


contact.getInitialProps = async (ctx) =>{
    console.log('ctx is');
    console.log(ctx.query.bookOwnerID)

    try {

        const res = await fetch('https://unibooktrade.vercel.app/api/books', {
            //const res = await fetch('http://localhost:3000/api/books', {
                headers: {
                    title: '',
                    author: '',
                    id: ctx.query.bookOwnerID
                }
            });
            const { data } = await res.json();
        
           
           return{ books:data }
           
       } catch (error) {
    
        return { books: [] }
           
       }
     
 }

export default contact;