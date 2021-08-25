import { createSelector } from 'reselect'

// Selectors are used when you only want to return part of the State or a 'slice'
// this prevents a total rerender of the component(s)

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity,
                0
        )
);