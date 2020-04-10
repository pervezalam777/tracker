import React from 'react';
import {StyleSheet} from 'react-native'
import {Input, Button} from 'react-native-elements'
import {withLocationContext} from '../hooks/locationProvider'

const TrackForm = ({
    locationState:{recording, name},
    startRecording, 
    stopRecording, 
    changeName
}) => {

    const onSubmit = () => {
        recording 
        ? stopRecording()
        : startRecording();
    }

    return <>
        <Input 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            value={name}
            placeholder="Enter Track Name"
            onChangeText={changeName}
        />
        <Button 
            title={recording ? "Stop" : "Start Recording"}
            onPress={onSubmit}
        />
    </>
}

const styles = StyleSheet.create({
    input: {
        marginTop: 15,
        marginBottom:15
    }
})

const withLocationTrackForm = withLocationContext(TrackForm)

export default withLocationTrackForm;