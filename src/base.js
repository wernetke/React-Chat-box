import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database' 

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAvKYEKuWqCDTqwhsFWkw2o2hDMHc0giLE",
        authDomain: "chatbox-app-71636.firebaseapp.com",
        databaseURL: "https://chatbox-app-71636.firebaseio.com",
       })

//Gestion bdd
const base = Rebase.createClass(firebase.database())
//initialisation App
export { firebaseApp }

export default base
