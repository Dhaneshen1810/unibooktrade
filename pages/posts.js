import { withRouter } from "next/router";
import Link from 'next/link';

import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

import Router from 'next/router';
import { useRouter } from 'next/router';

const posts = withRouter(({ router:  { query:{name, id, firstName}}, books} ) => {

        const [form, setForm] = useState({ title: '' });
        const [isSubmitting, setIsSubmitting] = useState(false);
        const [errors, setErrors] = useState();
        const router = useRouter;
        useEffect(() => {
            if (isSubmitting){
                if (Object.keys(errors).length ===0){
                    //bookmatch();

                    //alert('Sucees, gotta match books')
                    Router.push({
                        pathname: '/booklist',
                        query: { 
                                mytitle: form.title,
                                author: form.author
                                
                        }
                    });
                  
                }
                else{
                    setIsSubmitting(false);
                }
            }
        }, [errors])

        const handleSubmit = (e) => { 
            e.preventDefault();
            let errs = validate();
            setErrors(errs);
            setIsSubmitting(true);


        }
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

    return(
    <div className='option-page'>

        <div className='book-greeting'>
            <div className='greeting-text'>
                <div className='icon-box'>
                    <Link href='/'>
                        <img src="/icons/sign-out.png" alt="my image" className='my-icon'/>
                    </Link>
                    <div className='my-icon-end'>
                    <img src="/icons/four-square.png" alt="my books" className='my-icon'/>
                    <img src="/icons/plus.png" alt="Add book" className='my-icon'/>
                    </div>
                    


                    
                </div>

                
                <h2>Hi, {firstName}!</h2>

                <p>Find your book by entering 
                    the <b>Author</b> or <b>Book name</b> below.
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
                <b>OR</b>
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

                <div className='my-divider'></div>
                <Link href='/booklist'>
                    <div className='btn btn-success my-btn-viewall'>View all</div>
                </Link>
            
        </div>


        
    </div>

    )
    
});
  



    
export default posts;


