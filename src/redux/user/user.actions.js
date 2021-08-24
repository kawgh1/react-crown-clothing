// literally functions that return objects
// only major requirement is that each object is in the correct format that the action is expected to be

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});

// we will set currentUser in the Header Component
// currently, Header is getting currentUser from App.js and we want Header to get it from our REDUCER