import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { useRouter, withRouter } from 'next/router';
import Router from 'next/router';

import { Form } from 'react-bootstrap';
import { Label } from 'semantic-ui-react';

const fileUpload = require('fuctbase64');

const NewBook = withRouter(({ router:  { query:{name, id, firstname}}} ) => {
    const [form, setForm] = useState({ title:'', author:'', ownerID:'', ownerName:'', imageFront:''}
    );
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();


    useEffect(() => {
        if (isSubmitting){
            if (Object.keys(errors).length ===0){
                //bookmatch();

                //alert('New book created')


                createBook();
                /*
                Router.push({
                    pathname: '/booklist',
                    query: { 
                            mytitle: form.title,
                            author: form.author
                            
                    }
                });*/
              
            }
            else{
                setIsSubmitting(false);
            }
        }
    }, [errors])


    //Create new book post
    const createBook = async () => {
        try {
            
            
            //const res = await fetch('http://localhost:3000/api/books', {
            const res = await fetch('https://unibooktrade.vercel.app/api/books', {

                method: 'POST',
                
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
               
            })
            
            
            
            //Redirect to profile
            /*
            Router.push({
                pathname: '/myprofile',
                query: { 
                        id: id,
                        name: name,
                        firstname: firstname
                        
                }
            });
            */

        } catch (error) {
            console.log(error)

        }
    }

    const handleSubmit = (e) => { 
        e.preventDefault();

        console.log(form.imageFront)

        setForm({
            ...form,
                 ownerID: id,
                 ownerName: name,
                

        })


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

        //Handle page switch for header icons
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
    
        //Go to section to create new listing
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

        //Handle image upload
        const image1Upload = (e) => {
            console.log('changed');

            fileUpload(e)
            .then((data) => {
                var str = data.base64;
                console.log("base64 :", str);
                
                setForm({
                    ...form,
                 imageFront:{
                     data: str, 
                     contentType: 'image/png'
                 }

        })
 })

        
        
        }

        
           

    return (
        <div className='newBook-page'>
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
            <p>firstName: {firstname}</p>
            <p>Id: {id}</p>
                <p>Post a book.
                </p>


                
            </div>
                
        </div>
           
        <form className='create-book-form' onSubmit={handleSubmit}>
        <div className="form-group my-group" style={{marginTop:'5%'}}>
                <input 
                    type="text" 
                    className="form-control new-book-input" 
                    id="exampleInputEmail1" 
                    placeholder="Enter book title"
                    name="title"
                    required
                    onChange={handleChange}/>
                    
                </div>
                <div className="form-group my-group">
                <input 
                    type="text" 
                    className="form-control new-book-input" 
                    placeholder="Enter Author"
                    name='author'
                    onChange={handleChange}
                    required
                    />
                
                <label className='input-file-btn'>
                <input
                type="file"
                name="file"
                id="input-files"
                className='input-file-btn'
                onChange={image1Upload}
              />
              </label>

              <label htmlFor="file-upload" className="input-file-btn" >
                Custom Upload
            </label>
            
            <input id="file-upload" type="file" onChange={image1Upload}/>

            
  
                <button type="submit" className="btn btn-primary my-btn">POST</button>
                </div>
                </form>
            
        </div>
    )
});

export default NewBook;