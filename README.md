# React-based E-Commerce site with additional features
This `main` branch contains Redux and the more advanced features. The `react_only` branch contains only react and basic firebase functionality.

- Based on course by Zero-to-Mastery

## Tools Used
- ### Sass CSS
    - **$ npm install node-sass --save**
    - **Google Fonts**
        - Indie Flower
        - Permanent Marker
        - Rock Salt
        - Arsenal
        - Jura (Crown logo)
  
- ### React Router
    - **$ npm install react-router-dom**
  
- ### Google Firebase
    - https://firebase.google.com/
    - **$ npm install firebase@6.0.2**

- ### Redux
    

## Things I Added
- I added a lot of custom styling, images and mobile view / responsive design

## Build Errors
- Encountered an error with the node_module grpc
    - Set Node and NPM versions in package.json
    
        File: package.json
        
            "engines": {
                "node": "12.x"
            },

- Building on Heroku
- https://github.com/mars/create-react-app-buildpack
    - **heroku create crown-clothing --buildpack https://github.com/mars/create-react-app-buildpack.git**

## Things I Learned

## REDUX
- React is best at handling the View - not so good at handling complex State
- Redux is for managing and scaling large applications that have a lot going on in State
- Useful for sharing data between Components
- ### 3 Principles of Redux
    - 1. Single source of truth
        - There is only one State in Redux
    - 2. State is read only
    - 3. Changes made using only pure functions
        - A pure function is one that always receives an input and always returns a predictable output

- ### Redux Flow
    - **Action --> Root Reducer --> Store --> DOM changes**
    - Action - a user event, clicking a button
    - Reducer - **ALL user actions go through the Reducer first**
        - this is how we keep things organized at scale
        - user takes user action, inputs in a pure function at the reducer and updates State
    - Store - represents what our app should look like, State updates
    - DOM Changes - React detects changes to State and renders appropriately
- ## FLUX Pattern
    - Redux uses an architectural pattern called Flux
    - **Action --> Dispatcher --> Store --> View**



### Javascript Objects We Get Back From Firestore Database
- A **query** is a request we make to Firestore to give us something from the **Database**
    - **Firestore returns us two types of objects: references and snapshots**
        - Of these objects, they can be either **Document** or **Collection** versions
        - Firestore will **always** return us these objects, even if nothing exists at/from that query

- **QueryReference** - Object that represents the **"current"** place in the database that we are querying.
    - We get a queryReference by calling either:
        - **firestore.doc('/users/:userId');**
        - **firestore.collections('/users);**
    - **The queryReference object does not have the actual data of the collection or document. It instead has properties that tell us details about it, or the method to get the Snapshot object which gives us the data we are looking for.**

- **QuerySnapshot**
    - We get a querySnapshot from our collectionReference object
    - We can check if there are any documents in the collection by calling the **.empty** property which returns a boolean
    - We can get all the documents in the collection by calling the **.doc** property. It returns an array of our documents as ***documentSnapshot*** objects


### DocumentReference vs CollectionReference
- We use documentRef objects to perform **CRUD operations** (create, retrieve, update, delete). The documentRef methods are **.set()**, **.get()**, **.update()** and **.delete()**
    - We can also add documents to collections using the collectionRef object using the **.add()** method.
        - collectionRef.add({ value: property })
    - We get the snapshotObject from the referenceObject using the **.get()** method
        - documentRef.get() or collectionRef.get()
    - **documentRef returns a documentSnapshot object**
    - **collectionRef returns a querySnapshot object**

### DocumentSnapshot
- We get a documentSnapshot object from our documentReference object
- The documentSnapshot object allows us to check if a document exists at this query using the **.exists** property which returns a boolean
- We can also get the actual properties on the object by calling the **.data()** method, which returns us a JSON object of the document

    File: App.js

        componentDidMount() {
        
            this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        
                // if userAuth exist in firestore database
                if (userAuth) {
                    const userRef = await createUserProfileDocument(userAuth);

                    userRef.onSnapshot(snapShot => {

                            // console.log(snapShot.data());

                            this.setState({
                                currentUser: {
                                    id: snapShot.id,
                                    ...snapShot.data()
                                }
                            })
                        
                    });
                }

            });
        }