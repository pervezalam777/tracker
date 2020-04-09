import React, { useEffect } from 'react';
import {StyleSheet, View} from 'react-native'
import {withAuthContext} from '../hooks/authProvider'
import AuthForm from '../components/AuthenticationForm'
import NavigationLink from '../components/navigationLink';
import { NavigationEvents } from 'react-navigation';

const SingUpScreen = ({authState, signUp, clearAuthErrorMessage, tryLocalSignIn}) =>  {

    useEffect(()=>{
        tryLocalSignIn();
    }, [])

    return <View style={style.container}>
        <NavigationEvents 
            onWillBlur={clearAuthErrorMessage}
        />
        <AuthForm 
            heading="Sign Up for Tracker" 
            buttonLabel="Sign Up"
            onSubmit={signUp}
            errorMessage={authState.errorMessage} 
        />
        <NavigationLink 
            label="Already have an account? Sign in instead"
            navigateTo='SignIn'
        />
    </View>
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        marginBottom: 200
    }
})

const withAuthSignUpScreen = withAuthContext(SingUpScreen);

withAuthSignUpScreen.navigationOptions = () => {
    return {
        header: null
    }
}

export default withAuthSignUpScreen