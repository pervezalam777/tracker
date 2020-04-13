import contextBuilder from './contextBuilder';
import tracker from '../api/tracker'
//TODO: AsyncStorage will be removed from react-native library
//It will be a separate library in future so import statement would be changed
import {AsyncStorage} from "react-native"
import {navigate} from '../navigationRef'

const SIGN_UP = "sign_up_success";
const SIGN_IN = "sign_in_success";
const ADD_ERROR = "error"
const CLEAR_MESSAGE = "clear_message";
const SIGN_OUT = "sign_out"


const reducer = (state, {type, payload}) => {
    switch(type){
        case ADD_ERROR:
            return {...state, errorMessage:payload};
        case SIGN_UP:
        case SIGN_IN:
            return {token:payload, isAuthenticated:true, errorMessage:''}
        case CLEAR_MESSAGE: 
            return {...state, errorMessage:''}
        case SIGN_OUT: 
            return {isAuthenticated:false, token:null, errorMessage:''}
        default:
            return state
    }
}

const signUp = dispatch => async (email, password) => {
    try {
        const response = await tracker.post('/signup', {email, password})
        console.log("Sign up response: ",response.data);

        const token = response.data.token
        await AsyncStorage.setItem("token", token);
        dispatch({type:SIGN_UP, payload:token})
        navigate('TrackList');
    } catch (error) {
        //error.response.data
        console.log("error on Sign Up: ", error);
        //dispatch({type:ADD_ERROR, payload:error.response.data.message});
    }
}

const signIn = dispatch => async (email, password) => {
    try {
        const response = await tracker.post('/signin', {email, password})
        const token = response.data.token
        await AsyncStorage.setItem("token", token);
        dispatch({type:SIGN_IN, payload:token})
        navigate('TrackList');
    } catch (err) {
        console.log("sign in error", err)
        //dispatch({type:ADD_ERROR, payload:err.response.data.message});
    }
}

const signOut = dispatch => async () => {
    try {
        await AsyncStorage.removeItem('token');
        dispatch({type:SIGN_OUT});
        navigate('SignIn')
    } catch(error) {
        console.log("sign out error", error)
        // Do nothing
    }
}

const clearAuthErrorMessage = dispatch => () => {
    dispatch({type:CLEAR_MESSAGE})
}

const tryLocalSignIn = dispatch => async () => {
    try{
        const token = await AsyncStorage.getItem('token');
        if(token){
            dispatch({type:SIGN_IN, payload:token});
            navigate('TrackList');
        } else {
            navigate('SignIn')
        }
    } catch(error){
        navigate('SignIn')
    }
}

export const { 
    withContext:withAuthContext, 
    Provider:AuthProvider
} = contextBuilder(
    reducer, 
    {
        isAuthenticated:false,
        token:null,
        errorMessage:''
    }, 
    {
        signIn,
        signUp,
        signOut,
        clearAuthErrorMessage,
        tryLocalSignIn
    }, 
    'authState'
);