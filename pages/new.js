import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Router, useRouter, withRouter } from 'next/router';


const NewBook = withRouter(({ router:  { query:{name, id, firstname}}} ) => {
    const [form, setForm] = useState({ title:'', author:'', ownerID:'', ownerName:''}
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
            
            const res = await fetch('http://localhost:3000/api/books', {
                method: 'POST',
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
                
               
               
               
                
                
                
            })
            //router.push("/booklist")
        } catch (error) {
            console.log(error)

        }
    }

    const handleSubmit = (e) => { 
        e.preventDefault();


        setForm({
            ...form,
                 ownerID: id,
                 ownerName: name
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

    return (
        <div className='newBook-page'>
            <div className='book-greeting'>
            <div className='greeting-text'>
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
                
  
                <button type="submit" className="btn btn-primary my-btn">POST</button>
                </div>
                </form>
            
        </div>
    )
});

export default NewBook;