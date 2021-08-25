import React from 'react';

import './cart-dropdown.styles.scss'

import CartItem from '../cart-item/cart-item.component'

import CustomButton from '../custom-button/custom-button.component'

// REDUX
import { connect } from 'react-redux'

// Selectors
import { selectCartItems } from '../../redux/cart/cart.selectors'

const CartDropdown = ({ cartItems }) => (

    <div className='cart-dropdown'>
        <div className='cart-items' />
        {
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        }

        <hr style={{ color: "green", width: "80%", marginBottom: "12px" }} />

        <CustomButton >GO TO CHECKOUT</CustomButton>
    </div>
);

// React Redux
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     cartItems
// });

// Selectors
// this makes sure that are cart-dropdown component does NOT get re-rendered
// when State changes that is unrelated to the cart items - for example, signing out
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});


export default connect(mapStateToProps)(CartDropdown);