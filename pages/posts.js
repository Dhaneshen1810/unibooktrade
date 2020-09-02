import { withRouter } from "next/router";
import Link from 'next/link';
import Head from 'next/head'

import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

import Router from 'next/router';
import { useRouter } from 'next/router';

import Cors from 'cors';


import Check from '../pages/components/logincheck';

const check = Check();



const posts = withRouter(({ router:  { query:{name, id, firstname, userEmail}}, books} ) => {

        const [form, setForm] = useState({ title: '', author:'' });
        const [isSubmitting, setIsSubmitting] = useState(false);
        const [errors, setErrors] = useState();
        const router = useRouter;

        // Initializing the cors middleware
        const cors = Cors({
        methods: ['GET', 'HEAD'],
    })

        
    console.log('check is', check)



        useEffect(() => {

            // We are directed to the booklist page
            // Forwarding the following data to booklist
            // Fullname, firstname, id, book author and book title
            if (isSubmitting){

                if (Object.keys(errors).length ===0){

                    Router.push({
                        pathname: '/booklist',
                        query: { 
                                mytitle: form.title,
                                author: form.author,
                                name: name,
                                id: id,
                                firstname: firstname,
                                userEmail: userEmail
                                
                        }
                    });
                  
                }
                else{
                    setIsSubmitting(false);
                }
            }
        }, [errors])


        // When th user submits
        const handleSubmit = (e) => { 
            e.preventDefault();
            let errs = validate();
            setErrors(errs);
            setIsSubmitting(true);


        }

        // Handle changes made to the input box
        // That is, when the user types in the box
        const handleChange = (e) => { 
            setForm({
                ...form,
                    [e.target.name]: e.target.value
                
            })
        }

        const validate = () => {
            let err = {};

            
            return err;
        }


        // User chooses to view all available books
        const viewAll = () => {

            Router.push({
                pathname: '/booklist',
                query: { 
                    name: name,
                    id: id,
                    firstname: firstname,
                    mytitle: '',
                    author: '',
                    userEmail:userEmail
                        
                }
            }, '/booklist');
        }

        const myProfile = () => {
            Router.push({
                pathname: '/myprofile',
                query: { 
                        mytitle: '',
                        author: '',
                        name: name,
                        id: id,
                        firstname: firstname,
                        userEmail: userEmail
                        
                }
            }, '/profile');
        }

        const myBooks = () => {
            Router.push({
                pathname: '/new',
                query: { 
                        id: id,
                        name: name,
                        firstname: firstname,
                        userEmail:userEmail
                        
                }
            }, 'new');
        }

        const Search = () => {
            Router.push({
                pathname: '/posts',
                query: { 
                        id: id,
                        name: name,
                        firstname: firstname,
                        userEmail:userEmail
                        
                }
            }, '/search');
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
            }, '/aboutus');
        }


    return(
    <div className='option-page'>
        <Head>
            <title>Search, MacEwan Book Trade</title>
            <meta property="og:title" content="Search" key="Search"/>
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

                
                <h2 className='icon-box-text'>Hi, {firstname}!</h2>

                <p>Find your book by entering 
                    the <b>Author</b> or/and <b>book title</b> below.
                </p>
            </div>
                
            <form className='my-form' onSubmit={handleSubmit}>
                <div className="form-group my-group">
                <label>Title</label>
                <input 
                    type="text" 
                    className="form-control my-form-control" 
                    id="exampleInputEmail1" 
                    placeholder="Enter book title"
                    name="title"
                    onChange={handleChange}/>
                    
                </div>
                <br/>
                <div className="form-group my-group">
                <label>Author</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter Author"
                    name='author'
                    onChange={handleChange}
                    />
                
  
                <button type="submit" className="btn btn-primary my-btn">Search</button>
                </div>
                </form>

                <div className='view-all-box'>
                    <div className='btn btn-success my-btn-viewall' onClick={viewAll}>View all</div>
                </div>
            
        </div>


        
    </div>

    )
    
});
  



    
export default posts;


