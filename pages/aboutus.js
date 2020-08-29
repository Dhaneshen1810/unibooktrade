import { withRouter } from "next/router";
import Router from "next/router";
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from "react";


const about = withRouter(({ router:  { query:{name, id, firstname, userEmail}}} ) => {

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
        });
    }

    // Redirect to new
    const myBooks = () => {
        Router.push({
            pathname: '/new',
            query: { 
                    id: id,
                    name: name,
                    firstname: firstname,
                    userEmail:userEmail
                    
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
                    firstname: firstname,
                    userEmail:userEmail
                    
            }
        });
    }


    return(
        <div className='about-page'>
            <Head>
            <title>About us</title>
        </Head>
            <div className='book-greeting' style={{ height:'auto', minHeight:'0px' }}>
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


                
                
            </div>
            
        </div>
            <div className='aboutus-header'>About us</div> 
            <div className='feedback'>
                <textarea ></textarea>
            </div>
        </div>
    )
})

export default about;