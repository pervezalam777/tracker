import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import {withNavigation} from 'react-navigation';

const NavLink = ({label, navigateTo, navigation}) => {
    console.log("navigate To as: ", navigateTo)

    return <TouchableOpacity onPress={(e) => {
            e.stopPropagation();
            e.preventDefault();
            console.log("pressed....................", navigation.navigate)
            navigation.navigate(navigateTo);
        }}>
        <Text style={style.linkStyle}>{label}</Text>
    </TouchableOpacity>
}

const style = StyleSheet.create({
    linkStyle: {
        fontSize:15,
        marginLeft: 15,
        marginTop: 15,
        color:'blue'
    }
})

export default withNavigation(NavLink)