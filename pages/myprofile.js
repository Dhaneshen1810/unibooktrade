import { withRouter, useRouter } from "next/router";
import Link from 'next/link';
import Router from "next/router";
import Head from 'next/head'

//Getting book data from database
import fetch from 'isomorphic-unfetch';
import { Confirm, Butto, Loader } from 'semantic-ui-react';
import { useState, useEffect } from "react";




const myprofile = withRouter(({ router:  { query:{name, id, firstname, mytitle, author, userEmail}}, books} ) => {


    const [booklist, setBooklist] = useState([]);

    const [isDeleting, setIsDeleting] = useState(false);
    const [bookName, setBookName] = useState('null');
    const [bookID, setBookID] = useState(0);
    const router = useRouter();

    



    useEffect(() => {
        setBooklist(books)
        console.log('books are: ');
        console.log(booklist)



        if (isDeleting) {
            deleteBook();
        }
    }, [isDeleting])


    const deleteBook = async (e) =>{

        console.log(bookID)
        try {
            const deleted = await fetch('https://usedbooksexchange.com/api/books',{
            //const deleted = await fetch('http://localhost:3000/api/books',{
                method:'DELETE',
                headers:{
                    "Accept": 'application/json',
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    title:'',
                    author:'',
                    id: bookID,
                })


               
            });
        } catch (error) {
            
        }

        /*
        Router.push({
            pathname: '/myprofile',
            query: { 
                    mytitle: '',
                    author: '',
                    name: name,
                    id: id,
                    firstname: firstname
                    
            }
        })
        */

        window.location.reload(false);

    }

    // The user clicks on the delete button
    const handleDelete = async (e) => {
        console.log(e.target);
        setBookName(e.target.name);
        setBookID(e.target.id);
        setIsDeleting(true);
    }

    // The user clicks on the edit button
    // The user is sent to the edit page
    // The data about this particular book post is the to the page as well
    const handleEdit = (myBookID, myTitle, myAuthor, imageData, price, userEmail) => {
        //Update bookID
        //setBookID(e.target.id);
        //console.log('Book id: '+e.target.id);
        console.log('Owner name: '+ name);
        console.log('ownerID: '+id);
        
        
        Router.push({
            pathname: '/edit',
            query: { 
                name: name,
                id: id,
                firstname: firstname,
                bookID: myBookID,
                bookTitle: myTitle,
                bookAuthor: myAuthor,
                price: price,
                userEmail:userEmail
                    
            }
        });
        
        
        
        
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
        });
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
        });
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
        });
    }

    if (books){
    return(

        <div className='profile-page'>
            <Head>
                <title>My profile, MacEwan Book Trade</title>
            </Head>
    
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
                <br/>
                    <div className='myprofile-header'>
                        <p>This is your collection<br/> You currently have {books.length} posts</p>
                    </div>
                    <br/>
                    
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
                           
                        <div key={book._id} className='book-item-profile'>

                            <div className='section1'>
                                <div className='section1-image'>
                                    <img src={imageData}  style={{ width:'100px', height:'100px', borderRadius:'20px'}}/>
                                </div>
                                <div className='section1-info'>
                                    <p><b>{book.title}</b></p>
                                    <p>{book.author}</p>
                                    <p>${book.price}</p>
                                </div>
                            
                            </div>

                            <div className='section2'>
                                <div className='buttons-section'>
                                <button className='btn btn-success' style={{ width:'100px', height:'45px'}} onClick={() => handleEdit(book._id, book.title, book.author, imageData, book.price)} id={book._id} name={book.title}>Edit</button>
                                <button className='btn btn-secondary' style={{ width:'100px', height:'45px'}} onClick={handleDelete} id={book._id} name={book.title}>Delete</button>
                                </div>
                            </div>
                        
                            
                        </div>

                        

                        
                    )
                    
                
            }
            
            
            )}
            
        
        
            </div>        
        </div>
    )

        }

        else{
            return(books)
        }


});


myprofile.getInitialProps = async (mytitle) =>{

            

    

   try {

    const res = await fetch('https://usedbooksexchange.com/api/books', {
        //const res = await fetch('http://localhost:3000/api/books', {
            headers: {
                title: mytitle.query.mytitle,
                author: mytitle.query.author,
                id: mytitle.query.id
            }
        });
        const { data } = await res.json();
    
       
       return{ books:data }
       
   } catch (error) {

    return { books: [] }
       
   }
    
}


export default myprofile;