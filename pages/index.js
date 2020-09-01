import Link from 'next/link'
import Head from 'next/head'
import { View } from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
import Check from '../pages/components/logincheck'

import Router from 'next/router';


var myID=null;
var myName = null;

const Index = () => {

    const handleResponse = (data) => {
        console.log(data);

        //Toggle logincheck


        

        var myID = data.profile.id;
        var myName = data.profile.name;
        var firstName = data.profile.first_name;
        var userEmail = data.profile.email;
        console.log(userEmail)
        
        Router.push({
            pathname: '/posts',
            query: { name: myName,
                    id: myID,
                    firstname: firstName,
                    userEmail: userEmail
            }
        })
      };

     const handleError = (error) => {
        this.setState({ error });
      };

      return(
    <div className='login-page'>
    <Head>
        <title>MacEwan Book Trade</title>
    </Head>
    <div className='my-title'>
        <div><p>MacEwan</p></div>
        <div><p>Used books</p></div>
        <div><p>Exchange</p></div>
      </div>
    <div className='my-intro'>
        <p>Trading used books made easier.</p>
        
    </div>
   

    
    <FacebookProvider appId="2605624903036488">
    
        <LoginButton
          scope="email"
          onCompleted={handleResponse}
          onError={handleError}
          className="btn btn-primary btn-fb"
        >
          <span><b>Login via Facebook</b></span>
        </LoginButton>
        
      </FacebookProvider>
      

</div>




      )
    };



export default Index;