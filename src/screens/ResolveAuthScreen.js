import React, { useEffect } from 'react';
import {StyleSheet, View} from 'react-native'
import {withAuthContext} from '../hooks/authProvider'

const ResolveAuthScreen = ({tryLocalSignIn}) =>  {

    useEffect(()=>{
        tryLocalSignIn();
    }, [])

    return <View style={style.container}>
       <Text>Loading...</Text>
    </View>
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        marginBottom: 20
    }
})

const withAuthResolveAuthScreen = withAuthContext(ResolveAuthScreen);

withAuthResolveAuthScreen.navigationOptions = () => {
    return {
        header: null
    }
}

export default withAuthResolveAuthScreen