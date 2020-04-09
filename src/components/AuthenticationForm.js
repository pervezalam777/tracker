import React, { useState } from 'react';
import {StyleSheet} from 'react-native'
import {Text, Input, Button} from 'react-native-elements'
import {commonStyle} from '../styles/common'

const AuthForm = ({heading, buttonLabel, onSubmit, errorMessage}) =>  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <>
        <Text 
            h3 
            style={{...commonStyle.spacerMedium, ...style.headingStyle}}
        >{heading}</Text>
        <Input 
            label="Email"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setEmail}
            style={{...commonStyle.spacerSmall, ...style.inputStyle}} 
        />
        <Input 
            label="Password" 
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setPassword}
            secureTextEntry
            style={{...commonStyle.spacerSmall, ...style.inputStyle}} 
        />
        {
            errorMessage !== '' && 
            <Text style={style.errorMessageStyle}>
                {errorMessage}
            </Text>
        }
        <Button 
            title={buttonLabel} 
            onPress={() => onSubmit(email, password)}
            style={{...commonStyle.spacerSmall, ...style.buttonStyle}} 
        />
    </>
}

const style = StyleSheet.create({
    headingStyle: {
       
    },
    inputStyle:{
        
    },
    buttonStyle: {
        
    },
    errorMessageStyle: {
        fontSize:16,
        color:'red',
        marginLeft:15,
        marginTop:15
    }
})



export default AuthForm