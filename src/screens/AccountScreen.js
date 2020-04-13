import React from 'react';
import {Text, View, StyleSheet} from 'react-native'
import {Button} from "react-native-elements";
import {withAuthContext} from '../hooks/authProvider'
import {FontAwesome} from '@expo/vector-icons'

//NOTE: SaveAreaView, from react-navigation, can be used to shift down view
// so that it does not go behind top status bar.
const AccountScreen = ({signOut}) =>  {
    return <View style={style.container}>
        <Text style={style.headingStyle}>Account Sign Out</Text>
        <Button title="Sign Out" onPress={signOut} />
    </View>
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        marginBottom:200
    }, 
    headingStyle:{
        marginBottom: 20
    }
})

const withAuthAccountScreen = withAuthContext(AccountScreen);

withAuthAccountScreen.navigationOptions = () => {
    return {
        header: null,
        title:'Accounts',
        tabBarIcon: <FontAwesome name="gear" size={20} />
    }
}

export default withAuthAccountScreen