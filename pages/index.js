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

        Router.push({
            pathname: '/posts',
            query: { name: myName,
                    id: myID
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
        <h1>MacEwan</h1>
        <h1>Book</h1>
        <h1>Trade</h1>
        </div>
    <div className='my-intro'>
        <p>Making it easier for those who need to find their books
        And those selling their old ones.</p>
        
    </div>
   
    
    <FacebookProvider appId="1338252696564421">
    
        <LoginButton
          scope="email"
          onCompleted={handleResponse}
          onError={handleError}
          className="btn btn-primary btn-fb"
        >
          <span>Login via Facebook</span>
        </LoginButton>
        
      </FacebookProvider>
      

</div>




      )
    };



export default Index;