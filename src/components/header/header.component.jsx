import React from 'react';
import { Link } from 'react-router-dom'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/logo/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// REDUX
import { connect } from 'react-redux'


// FIREBASE
import { auth } from '../../firebase/firebase.utils'

const Header = ( props) => (

    <div className='container'>
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo' style={{WebkitTapHighlightColor: "transparent"}}/>
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

                <CartIcon  />
            </div>
                {
                    props.cart ? null : <CartDropdown />
                }
            
        </div>
    </div>    
);

// 'state' here is the top level Root Reducer
// so Root Reducer is pulling 'currentUser' from the userReducer.currentUser value
const mapStateToProps = (state) => ({

    currentUser: state.user.currentUser,
    cart: state.cart.hidden
});

// export default Header;
export default connect(mapStateToProps)(Header);