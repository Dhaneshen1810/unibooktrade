import { withRouter } from "next/router";
import Link from 'next/link';





const posts = withRouter(({ router:  { query:{name, id, firstName}}} ) => (
    <div>
        <p>Hello there, {name}</p>
        <p>Hello there, {firstName}</p>
        <p>Your ID is: {id}</p>

        
    </div>
))

  

    
export default posts;


