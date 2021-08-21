import React from 'react';
import { Link } from 'react-router-dom'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/logo/crown.svg'

// FIREBASE
import { auth } from '../../firebase/firebase.utils'

const Header = ( props) => (

    <div className='container'>
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo' />
            </Link>

            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                {/* <Link className='option' to='/signin'>
                    SIGN IN
                </Link> */}
                {
                    props.currentUser ? 
                    <div className='option' onClick={ () => auth.signOut() }>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>

                
            </div>

       

        </div>

   

        
    </div>
    
)

export default Header;