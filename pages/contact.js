import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import Router from 'next/router';
import { useRouter } from 'next/router';
import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';




const contact = withRouter(({ router:  { query:{name, id, firstname, bookID, bookOwnerName, ownerFirstName,bookOwnerID, bookTitle}}, books} ) => {
    const [defaultText, setDefaultText] = useState('Hi there '+ownerFirstName+', I am interested in your book, "'+bookTitle+'"!');
    const [booklist, setBooklist] = useState([]);


    /* Deal with AWS SES */
    // Load the AWS SDK for Node.js
    var AWS = require('aws-sdk');
    // Set the region 
    AWS.config.update({region: 'ca-central-1'});

    // Create sendBulkTemplatedEmail params 
    var params = {
        Destinations: [ /* required */
        {
            Destination: { /* required */
            CcAddresses: [
                'booksexchangemessenger.com',
            /* more items */
            ],
            ToAddresses: [
                'booksexchangemessenger.com'
                //'EMAIL_ADDRESS'
                /* more items */
            ]
            },
            ReplacementTemplateData: '{ \"REPLACEMENT_TAG_NAME\":\"REPLACEMENT_VALUE\" }'
        },
        ],
        Source: 'booksexchangemessenger.com', /* required */
        Template: 'TEMPLATE_NAME', /* required */
        DefaultTemplateData: '{ \"REPLACEMENT_TAG_NAME\":\"REPLACEMENT_VALUE\" }',
        ReplyToAddresses: [
        'booksexchangemessenger.com'
        ]
    };
  
  
    // Create the promise and SES service object
    var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendBulkTemplatedEmail(params).promise();

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
                    firstname: firstname
                    
            }
        });
    }

    // Redirect to new for creating new post
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

    // Redirect posts
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

    // Handle text in textArea
    const handleChange = (e) => { 
        const value = e.target.value;

        setDefaultText(value);
    }

    //Send email 
    const handleSubmit = (e) => { 
        e.preventDefault();

        const From = 'booksexchnagemessenger@gmail.com';
        const To = 'dan.moonian@gmail.com';

        console.log('Text: '+ defaultText)
        
        console.log('sending mail');


        // Handle promise's fulfilled/rejected states
        sendPromise.then(
            function(data) {
            console.log(data);
            }).catch(
            function(err) {
            console.log(err, err.stack);
            });



    }

    // Display on screen
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
                               <div>
                            
                            
                            
                            <div key={book._id} className='bookInfo'>
                                <div className='contact-bookinfo-pic'>
                                    <img src={imageData}  style={{ width:'200px', height:'200px', borderRadius:'20px'}}/>

                                </div>
                                <div className='contact-bookinfo-text'>
                                    <p>Title: <b>{book.title}</b></p>
                                    <p>Author: <b>{book.author}</b></p>
                                    <p>Owned by <b>{bookOwnerName}</b></p>
                                </div>
                                
                            </div>
    
                            </div>
                            
                        )
                        
                    
                }
                
                
                )}
                </div>

        


        <form style={{ width:'90%', marginTop:'7%' }}  onSubmit={handleSubmit}>
            <textarea type="text" 
                id="lname" 
                name="lname" 
                value= {defaultText}
                onChange={handleChange}
                className='contact-textBox'
                />
            <button style={{ marginTop: '4%' }} className='btn btn-primary'>Send message</button>
        </form>

        </div>
    )

});


// Get content from database 
contact.getInitialProps = async (ctx) =>{
    console.log('ctx is');
    console.log(ctx.query.bookOwnerID)
    console.log(ctx.query.bookID)

    try {

        const res = await fetch('https://unibooktrade.vercel.app/api/books', {
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