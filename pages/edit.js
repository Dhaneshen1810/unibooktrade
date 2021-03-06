import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { useRouter, withRouter } from 'next/router';
import Router from 'next/router';
import Head from 'next/head'

import { Form } from 'react-bootstrap';
import { Label } from 'semantic-ui-react';

//Toast
import { ToastContainer, toast } from 'react-toastify';


//Image resize
import Resizer from 'react-image-file-resizer';

const fileUpload = require('fuctbase64');

const EditBook = withRouter(({ router:  { query:{name, id, firstname, bookID, bookTitle, bookAuthor, price, userEmail}}} ) => {
    const [form, setForm] = useState({ title:bookTitle, author:bookAuthor, ownerID:id, ownerName:name, imageFront:{data:'/static/default-image.svg', contentType:'image/png'}, price:price, userEmail: userEmail}
    );
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    //state of the preview image
    const [prevImage, setPrevImage] = useState('/static/default-image.svg');

    const router = useRouter();


    console.log('Email is', form.userEmail)


    
    useEffect(() => {
        // Set form data to that from Router
        setForm({
            ...form,
                title: bookTitle,
                author: bookAuthor,
                ownerID: id,
                ownerName: name,
                userEmail: userEmail
        })

        console.log(form);
        console.log('name is '+ name)






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

        setForm({
            ...form,
                title: bookTitle,
                author: bookAuthor,
                 ownerID: id,
                 ownerName: name,
                 imageFront:'',
                 price: price,
                 userEmail: userEmail
        })

        
        try {

            notify();

            
            const res = await fetch('https://usedbooksexchange.com/api/books', {
             //const res = await fetch('http://localhost:3000/api/books', {


                method: 'PUT',
                
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": "application/json"
                },
                //body: JSON.stringify(form)
                body: JSON.stringify({
                    title: form.title,
                    author: form.author,
                    id: bookID,
                    ownerID: id,
                    ownerName: name,
                    imageFront: form.imageFront,
                    price: form.price,
                    userEmail: userEmail
                })
               
            })
            

            notifyDone()
            setTimeout(() => myProfile(), 1200)
                
            //setTimeout(myProfile(),3000)
           

            
            
            
            
            
            //Redirect to profile
            /*
            Router.push({
                pathname: '/myprofile',
                query: { 
                        id: id,
                        name: name,
                        firstname: firstname,
                        mytitle: '',
                        author: '',
                        userEmail: userEmail

                        
                }
            },'/myprofile')
            */
            
            
            

        } catch (error) {
            console.log(error)

        }
    }

    const handleSubmit = (e) => { 
        e.preventDefault();


        /*
        setForm({
            ...form,
                 ownerID: id,
                 ownerName: name,
                

        })
        */

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
                        firstname: firstname,
                        userEmail: userEmail

                        
                }
            },'/profile');
        }
    
        //Go to section to create new listing
        const myBooks = () => {
            Router.push({
                pathname: '/new',
                query: { 
                        id: id,
                        name: name,
                        firstname: firstname,
                        userEmail: userEmail

                        
                }
            },'/New');
        }

        const Search = () => {
            Router.push({
                pathname: '/posts',
                query: { 
                        id: id,
                        name: name,
                        firstname: firstname,
                        userEmail: userEmail

                        
                }
            },'/search');
        }

        //Handle image upload
        const image1Upload = (e) => {


       var fileInput = false;
       if (e.target.files[0]){
           fileInput = true;
       }
       if (fileInput) {
           Resizer.imageFileResizer(
            event.target.files[0],
            300,
            300,
            'png',
            100,
            0,
            uri => {
                console.log('im inside')

                //Update form with new image data
                setForm({
                    ...form,
                 imageFront:{
                     data: uri, 
                     contentType: 'image/png'
                 }
            
            })
            


            console.log(form)

            //Update image preview
            setPrevImage(uri);
            
            },
            'base64'

           );
       }
       /*
       else{
           setForm({
               imageFront:{
                   data: form.imageFront,
                   contentType: 'image/png'
               }
           })
       }
       */

       
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
            }, 'aboutUs');
        }

        
        //Toast functions
        const notify = () => toast.warning("Updating post");
        const notifyDone = () => toast.success("Post updated");
           

    return (
        <div className='newBook-page'>
            <Head>
                <title>Edit post, MacEwan Book Trade</title>
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


            
           <div style={{ marginTop:'65px', fontSize:'18px', textAlign:'center', width:'100%' }}><p>Update your book posting</p></div>


                
            </div>
                
        </div>
           
        <form className='create-book-form' onSubmit={handleSubmit} style={{ marginTop:'10%' }}>
        <img src={prevImage} alt='default-image' className='image-preview'/>
        <div className="form-group my-group" style={{marginTop:'8%'}}>
                <input 
                    type="text" 
                    className="form-control new-book-input" 
                    id="exampleInputEmail1" 
                    placeholder="Enter book title"
                    name="title"
                    value={form.title}
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
                    value={form.author}
                    required
                    />

                <input 
                    type="text" 
                    className="form-control new-book-input" 
                    placeholder="Price"
                    name='price'
                    style={{ marginTop:'5%' }}
                    value={form.price}
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
            </label>
            

                <button type="submit" className="btn btn-success my-btn">Update</button>
                </div>
                </form>

                <ToastContainer/>
            
        </div>
    )
});




export default EditBook;