import React from 'react'

// REDUX
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = (props) => (

    <div className='cart-icon' onClick={props.toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        {/* <span className='item-count'>0</span> */}
        <span className='item-count'>{props.itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);