import { withRouter } from "next/router";

const posts = withRouter(({ router:  { query:{name, id}} } ) => (
    <div>
        <p>Hello there, {name}</p>
        <p>Your ID is: {id}</p>

        
    </div>
    ));
    
    export default posts;


