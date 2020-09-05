import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import Router from 'next/router';
import { useRouter } from 'next/router';
import Head from 'next/head'
import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import { Credentials } from 'aws-sdk';




const contact = withRouter(({ router:  { query:{name, id, firstname, bookID, bookOwnerName, ownerFirstName,bookOwnerID, bookTitle, userEmail, ownerEmail}}, books} ) => {
    const [booklist, setBooklist] = useState([]);
    const [sendTo, setSendTo] = useState('mailto:'+ownerEmail)


    /* Deal with AWS SES */
    // Load the AWS SDK for Node.js
    
    var AWS = require('aws-sdk');

    //AWS.config.loadFromPath('./config.json');

    // Set the region 
    /*
    AWS.config.update({
        region: 'ca-central-1'
        
    });
    */


   AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-east-2"    
});



    console.log('email is '+ownerEmail)
    console.log('Owner email:',userEmail)




    
  
  
    // Create the promise and SES service object
    //var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendBulkTemplatedEmail(params).promise();

    /* End of AWS SES */
  





    // Assign constant names to values obtained from 'booklist' via withRouter
    useEffect(() => {
        const userName = name;
        const userID = id;
        const userFirstname = firstname;

        setBooklist(books)
        console.log('booklist is')
        console.log(booklist)

    })

    // Redirect to myprofile
    const myProfile = () => {
        Router.push({
            pathname: '/myprofile',
            query: { 
                    mytitle: '',
                    author: '',
                    name: name,
                    id: id,
                    firstname: firstname,
                    userEmail:userEmail
                    
            }
        },'/profile');
    }

    // Redirect to new for creating new post
    const myBooks = () => {
        Router.push({
            pathname: '/new',
            query: { 
                    id: id,
                    name: name,
                    firstname: firstname,
                    userEmail:userEmail
                    
            }
        },'/New');
    }

    // Redirect posts
    const Search = () => {
        Router.push({
            pathname: '/posts',
            query: { 
                    id: id,
                    name: name,
                    firstname: firstname,
                    userEmail:userEmail
                    
            }
        },'/search');
    }

    const aboutUs = () => {
        Router.push({
            pathname: '/aboutus',
            query: { 
                    id: id,
                    name: name,
                    firstname: firstname,
                    userEmail:userEmail
                    
            }
        },'/aboutUs');
    }




    

    // Display on screen
    return(
        <div className='contact-page'>
        <Head>
            <title>Contact owner, MacEwan Book Trade</title>
        </Head>
            <div className='book-greeting'>
            <div className='greeting-text'>
            <div className='icon-box'>
                    <Link href='/'>
                        <img src="/icons/sign-out.png" alt="my image" className='my-icon'/>
                    </Link>
                    <img onClick={aboutUs} src="/icons/info.svg" alt="About us" className='my-icon btn-aboutUs'/>

                    
                    <div className='my-icon-end'>
                    <img src="/icons/four-square.png" alt="my books" className='my-icon' onClick={myProfile}/>
                    
                    <img src="/icons/plus.png" alt="Add book" className='my-icon' onClick={myBooks}/>
                    <img src="/icons/search.png" alt="Search" className='my-icon' onClick={Search}/>
                    
                    </div>
                    
                </div>


                <div style={{ marginTop:'3%', padding:'10px' }}>
                    
                <p style={{ fontSize:'18px' }}>Here is all the information we have.
                
                <br/><span style={{ fontSize: '16px' }}>Contact {bookOwnerName} for more.</span></p>
                
                
                </div>
                
            </div>
            
        </div>


<div className='contact-item'>
        {booklist.map( book => {

                
                //var imageBase64 = book.imageFront.contentType;
                var imageData;
    
                if (book.imageFront){
                    
                    imageData = book.imageFront.data;
    
                }
                else{
                    console.log('no image');
                    imageData='';
                }


                        return (
                            
                            <div key={book._id} className='bookInfo'>
                                <div className='contact-bookinfo-pic'>
                                    <img src={imageData}  className='contact-book-pic'/>

                                </div>
                                <div className='contact-bookinfo-text'>
                                    <p>Title: <b>{book.title}</b></p>
                                    <p>Author: <b>{book.author}</b></p>
                                    <p>Owned by <b>{bookOwnerName}</b></p>
                                    <p>Asking price: <b>${book.price}</b></p>
                                    <p>Posted on: <b>{book.postedOn}</b></p>

                                </div>
                                
                            </div>
    
                            
                        )
                        
                    
                }
                
                
                )}
                </div>

                <button className='btn btn-primary email-btn'>
                <a style={{ color:'white' }} href={sendTo}>Contact {bookOwnerName}</a>

                </button>
                <br/><br/>


        


        

        </div>
    )

});


// Get content from database 
contact.getInitialProps = async (ctx) =>{
    console.log('ctx is');
    console.log(ctx.query.bookOwnerID)
    console.log(ctx.query.bookID)

    try {

        const res = await fetch('https://usedbooksexchange.com/api/books', {
            //const res = await fetch('http://localhost:3000/api/books', {
                headers: {
                    title: '',
                    author: '',
                    id: ctx.query.bookOwnerID,
                    bookID: ctx.query.bookID
                }
            });
            const { data } = await res.json();
        
           
           return{ books:data }
           
       } catch (error) {
    
        return { books: [] }
           
       }
     
 }

export default contact;