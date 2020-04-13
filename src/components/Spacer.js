import React from 'React';
import {View, StyleSheet} from 'react-native';

const Spacer = ({children}) => {
    return <View style={style.spacerStyle}>
        {children}
    </View>
}

const style = StyleSheet.create({
    spacerStyle:{
        margin: 15
    }
})

export default Spacer;