import firebase from 'firebase/app'
import 'firebase/database'
import {createStore} from 'redux'

const {
    REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_AUTH_DOMAIN,
    REACT_APP_FIREBASE_DATABASE_URL,
    REACT_APP_FIREBASE_PROJECT_ID,
    REACT_APP_FIREBASE_STORAGE_BUCKET,
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    REACT_APP_FIREBASE_APP_ID,
} = process.env
  
const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID,
}

try {
    firebase.initializeApp(firebaseConfig)
}
catch (error) {
    console.log(error.message)
}

const initState = {
    page: 'TopPage',
    login: false,
    user_name: 'no login',
    email: '',
    prefecture: 'hokkaido'
}

export function Reducer(state = initState, action){
    switch (action.type){
        case 'ChangePage':
            console.log('Change')
            let newpage = action.value.page;
            return{
                page: newpage,
                login: state.login,
                user_name: state.user_name,
                email: state.email,
                prefecture: state.prefecture
            }
        case 'UpdateUser':
            console.log('Update')
            return{
                page: action.value.page,
                login: action.value.login,
                user_name: action.value.user_name,
                email: action.value.email,
                prefecture: state.prefecture
            }
        default:
            return state;
    }
}

export default createStore(Reducer);