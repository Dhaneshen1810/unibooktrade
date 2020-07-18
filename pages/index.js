import Link from 'next/link'
import Head from 'next/head'
import { View } from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';

import Router from 'next/router';


var myID=null;
var myName = null;

const Index = () => {

    const handleResponse = (data) => {
        console.log(data);

        

        var myID = data.profile.id;
        var myName = data.profile.name;
        var firstName = data.profile.first_name;

        Router.push({
            pathname: '/posts',
            query: { name: myName,
                    id: myID,
                    firstName: firstName
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
        <div>MacEwan</div>
        <div>Used books</div>
        <div>Exchange</div>
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