import React from 'react';

import './cart-dropdown.styles.scss'

import CartItem from '../cart-item/cart-item.component'

import CustomButton from '../custom-button/custom-button.component'

// REDUX
import { connect } from 'react-redux'

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

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);