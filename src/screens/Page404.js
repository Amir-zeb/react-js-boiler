import React from 'react';
import { Link } from 'react-router-dom';

function Page404() {
    return ( 
        <div>
            <h1>Page 404</h1>
            <Link to="/">Goto Home</Link>
        </div>
     );
}

export default Page404;