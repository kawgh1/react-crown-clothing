// Utility functions allow us to keep our files clean 
// and organize functions that we may need to use 
// in multiple files in one location

export const addItemToCart = (cartItems, cartItemToAdd) => {
    // check if item added is already in cart and increase quantity property instead of separate item
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    // quantity property gets attached first time around since this
    // if block won't run when its a new item!
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};