import { withRouter, useRouter } from "next/router";
import Link from 'next/link';
import Router from "next/router";

//Getting book data from database
import fetch from 'isomorphic-unfetch';
import { Confirm, Butto, Loader } from 'semantic-ui-react';
import { useState, useEffect } from "react";




const myprofile = withRouter(({ router:  { query:{name, id, firstname, mytitle, author}}, books} ) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [bookName, setBookName] = useState('null');
    const [bookID, setBookID] = useState(0);
    const router = useRouter();



    useEffect(() => {
        if (isDeleting) {
            deleteBook();
        }
    }, [isDeleting])


    const deleteBook = async (e) =>{
        console.log('Book to delete: '+bookName+' with id: '+bookID);

        try {
            const deleted = await fetch('https://unibooktrade.vercel.app/api/books/'+bookID,{
                method:"DELETE"

               
            });
        } catch (error) {
            
        }

        //window.location.reload(false);

    }

    const handleDelete = async (e) => {
        console.log(e.target);
        setBookName(e.target.name);
        setBookID(e.target.id);
        setIsDeleting(true);
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

    return(

        <div className='profile-page'>
    
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
                    <p>Id: {id}</p>
                    <p>Firstname: {firstname}</p>
                    <p>title: {mytitle}</p>
                    <p>Author: {author}</p>
                    <p>Find your book by entering 
                        the <b>Author</b> or <b>Book name
                            below.
                        </b>
                    </p>
                </div>
                
            </div>
            
            <div className='book-list'>
                  
            
            {books.map( book => {
                
            //var imageBase64 = book.imageFront.contentType;
            var imageData;
            var base64data;

            console.log(book);
            if (book.imageFront){
                console.log('image')
                console.log(book.imageFront.contentType)
                
                imageData = book.imageFront.data;
                console.log(imageData)
                console.log('length: '+ imageData.length);

                //var myURL = book.imageFront.data;
                //let buff = new Buffer(myURL)
                //base64data = buff.toString('base64');
                //console.log(base64data);
                //const myImage = 'data:image/png;base64,'+base64data;
                //console.log('str data: '+base64data.length);
                //console.log('type: '+ book.imageFront.contentType);
            }
            else{
                console.log('no image');
                imageData='eweffwf';
            }
            
            console.log('hi');
                    return (
                        <div className='book-item-section'>
                           
                        <div key={book._id} className='book-item-profile'>

                        <img src={"data:image/png;base64," +  imageData}  style={{ width:'60px', height:'60px'}}/>
                            <p>Title: {book.title}</p>
                            <p>Author: {book.author}</p>
                            <p>Owner: {book.ownerID}</p>
                            
                        </div>

                        <div className='book-delete-section'>
                            <img src='/icons/cross.png' className='delete-icon' onClick={handleDelete} id={book._id} name={book.title}/>
                        </div>

                        </div>
                    )
                
            })}
        
        
            </div>        
        </div>
    )


});


myprofile.getInitialProps = async (mytitle) =>{

            

    const res = await fetch('https://unibooktrade.vercel.app/api/books', {
        headers: {
            title: mytitle.query.mytitle,
            author: mytitle.query.author
        }
    });
    const { data } = await res.json();

    return{ books: data }
}


export default myprofile;