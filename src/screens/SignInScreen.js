import React from 'react';
import {StyleSheet, View} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import {withAuthContext} from '../hooks/authProvider'
import AuthForm from '../components/AuthenticationForm'
import NavigationLink from '../components/navigationLink';

const SingInScreen = ({authState, signIn, clearAuthErrorMessage}) =>  {

    return <View style={style.container}>
        <NavigationEvents 
            onWillBlur={clearAuthErrorMessage}
        />
        <AuthForm 
            heading="Sign In for Tracker" 
            buttonLabel="Sign In"
            onSubmit={signIn}
            errorMessage={authState.errorMessage} 
        />
        <NavigationLink 
            label="Do not have account? Sign in instead"
            navigateTo='SignUp'
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

const withAuthSignInScreen = withAuthContext(SingInScreen);

withAuthSignInScreen.navigationOptions = () => {
    return {
        header: null
    }
}

export default withAuthSignInScreen