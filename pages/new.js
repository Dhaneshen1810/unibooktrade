import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { useRouter, withRouter } from 'next/router';
import Router from 'next/router';
import Head from 'next/head'

import { Form } from 'react-bootstrap';
import { Label } from 'semantic-ui-react';

//Image resize
import Resizer from 'react-image-file-resizer';

const fileUpload = require('fuctbase64');

const NewBook = withRouter(({ router:  { query:{name, id, firstname, userEmail}}} ) => {
    const [form, setForm] = useState({ title:'', author:'', ownerID:'', ownerName:'', imageFront:'', price:'', userEmail:'', postedOn:''}
    );
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    //state of the preview image
    const [prevImage, setPrevImage] = useState('/static/default-image.svg');
    

    const router = useRouter();

    console.log('userEmail is ', userEmail)

    // Get current date
    
    
    var date = new Date().getDate()
    var year = new Date().getFullYear()

    //Get day
    var day;
    switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }

      //Get mobth
    var month;
    switch (new Date().getMonth()) {
        case 0:
          month = "December";
          break;
        case 1:
          month = "January";
          break;
        case 2:
           month = "March";
          break;
        case 3:
          month = "April";
          break;
        case 4:
          month = "May";
          break;
        case 5:
          month = "June";
          break;
        case 6:
          month = "July";
        case 6:
            month = "July";
        case 7:
            month = "August";
        case 8:
            month = "September";
        case 9:
            month = "October";
        case 10:
            month = "November";
        case 11:
            month = "December";
      }

      var DayDateMonth = ""+day+" "+date+" "+month+" "+year;
      


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
            const res = await fetch('https://usedbooksexchange.com/api/books', {

                method: 'POST',
                
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
               
            })

            //Redirect to my profile
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
                 userEmail:userEmail,
                 postedOn: DayDateMonth


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
                        firstname: firstname,
                        userEmail:userEmail
                        
                }
            },'/myprofile');
        }
    
        //Go to section to create new listing
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
                console.log(uri)

                //Update form with new image data
                setForm({
                    ...form,
                 imageFront:{
                     data: uri, 
                     contentType: 'image/png'
                 }
            
            })
        

            //Update image preview
            setPrevImage(uri);

            
            },
            'base64'

           );
       }

       
        
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
            });
        }

        
           

    return (
        <div className='newBook-page'>
            <Head>
                <title>Create post, MacEwan Book Trade</title>
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


            
           <div style={{ marginTop:'65px', fontSize:'18px', textAlign:'center', width:'100%' }}><p>Add a new book posting.</p></div>


                
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

                <input 
                    type="text" 
                    className="form-control new-book-input" 
                    placeholder="Price"
                    name='price'
                    style={{ marginTop:'5%' }}
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
            

            
  
                <button type="submit" className="btn btn-primary my-btn">POST</button>
                </div>
                </form>
            
        </div>
    )
});

export default NewBook;