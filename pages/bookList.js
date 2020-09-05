import React, { useState, useEffect } from 'react';
import { FacebookProvider, LoginButton, FacebookLogin, facebookActions } from 'react-facebook';
import Login from 'react-facebook/dist/Login';
import Router from 'next/router';
import { useRouter } from 'next/router';
import { withRouter } from "next/router";



const bookList= () => {
    

    const handleResponse = (data) => {
        console.log(data);


        var myID = data.profile.id;
        var myName = data.profile.name;
        var firstName = data.profile.first_name;
        var userEmail = data.profile.email;
        console.log(userEmail)
        
        Router.push({
            pathname: '/booklist',
            query: { name: myName,
                    id: myID,
                    firstname: firstName,
                    mytitle: '',
                    author:'',
                    userEmail: userEmail
            } 
          },'/BookList')
      };

     const handleError = (error) => {
        this.setState({ error });
      };


    useEffect(() =>{
        console.log('Redirecting');


       
        
    })

    return(
        <div className='redirect-page'>
        <h2>For security purposes, please</h2>

        <FacebookProvider appId="2605624903036488">
    
            <LoginButton
              scope="email"
              onCompleted={handleResponse}
              onError={handleError}
              className="btn btn-primary"
            >
              <span><b>Click here</b></span>
            </LoginButton>
    
        </FacebookProvider>

      

      </div>
    )


}

export default bookList;