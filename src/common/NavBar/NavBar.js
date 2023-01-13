import React from 'react';
import '../NavBar/NavBar.css';
import { Link } from 'react-router-dom';
const NavBar=()=>{

    return(
        <div className='wrapper'>
            <div>
        
            <li><Link to='/'>Home</Link></li>
            </div>
                <div>
                <p><Link to='/product'>Product</Link></p>
                </div>
                <div>
                <p><Link to='/signIn'>SignIn</Link></p>
                </div> 
                <div>
                <p><Link to='/cart'>Cart</Link></p>
                    </div>
                

        </div>
    )
}

export default NavBar;