import { withRouter } from "next/router";
import Router from "next/router";
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from "react";
//import mainImage from '../public/static/aboutUs.png'


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
        },'/myprofile');
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
        },'/new');
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
        },'/aboutus');
    }


    return(
        <div className='about-page'>
            <Head>
            <title>About us</title>
        </Head>
            <div className='book-greeting' style={{ height:'auto', minHeight:'40px' }}>
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


                
                
            </div>
            
        </div>
            <div className='aboutus-header'>About us</div> 
            <div className='about-box1'>
                <div className='about-boxb'>
                    <img src='/static/aboutPic.png' className='about-pic'/>
                </div>
                <div className='about-boxa'>
                    <h2 className='about-title'>Our goal</h2>
                    <div className='about-text'>
                        <p>We want to make trading your university used books as quick, 
                            easy and effortless as possible. This app combines the focused search radius 
                            of university facebook groups and the search ability
                            of wider browsing systems to provide you with exactly what 
                            you need, finding your university books and selling your old ones. 
                        </p>
                    </div>
                </div>

            </div>
            <div className='about-box2'>
                <div className='about-boxa'>
                <h2 className='about-title'>Updates</h2>
                    <div className='about-text'>
                        <p>This app is constantly being monitored and improved 
                            to deliver the best experience. We encourage users to drop feedbacks 
                            at booksexchangemessenger.com
                            as we actively listen and build on those.
                        </p>
                    </div>                </div>
                <div className='about-boxa'>
                <h2 className='about-title'>How it works</h2>
                    <div className='about-text'>
                        <p>No registration is required. Log in using facebook and 
                            you are all set. There are 3 page options: Search for a book, 
                            create a new post or take a look at your personal post collection.
                        </p>
                    </div>                </div>

            </div>
            <div className='feedback-section'>
                <div  className='feedback-title'>
                    <h2>Drop us a feedback!</h2>
                    <p>Help us provide a better experience for you.</p>
                </div>
                <textarea className='about-textarea' placeholder='Type your feedback here'></textarea>
            </div>
        </div>
    )
})

export default about;