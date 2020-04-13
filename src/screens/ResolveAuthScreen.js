import React, { useEffect } from 'react';
import {StyleSheet, View, Text} from 'react-native'
import {withAuthContext} from '../hooks/authProvider'

const ResolveAuthScreen = ({tryLocalSignIn}) =>  {

    useEffect(()=>{
        tryLocalSignIn();
    }, [])

    return <View style={styles.container}>
       <Text>Loading...</Text>
    </View>
}

const styles = StyleSheet.create({
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