import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';


const NewBook = () => {
    const [form, setForm] = useState({ title:'', description:''}
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
                <p>Find your book by entering 
                    the <b>Author</b> or <b>Book name
                        below.
                    </b>
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
}

export default NewBook;