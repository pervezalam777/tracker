import React from 'react';
import {StyleSheet} from 'react-native'
import {Input, Button} from 'react-native-elements'
import {withLocationContext} from '../hooks/locationProvider'
import { withTrackContext } from '../hooks/TrackContext';

const TrackForm = ({
    locationState:{recording, name, locations},
    createTrack,
    resetLocation,
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
            style={styles.inputStyle}
            value={name}
            placeholder="Enter Track Name"
            onChangeText={changeName}
        />
        <Button 
            title={recording ? "Stop" : "Start Recording"}
            buttonStyle={styles.button}
            onPress={onSubmit}
        />
        {
            (!recording && locations.length)
            ? <Button
                title="Save Recording"
                onPress={() => createTrack(name, locations, resetLocation)}
            />
            : null
        }
    </>
}

const styles = StyleSheet.create({
    inputStyle: {
        marginTop: 25,
        marginBottom:30
    },
    button: {
        marginTop: 25,
        marginBottom: 15
    }
})

const withTrackTrackForm = withTrackContext(TrackForm)
const withLocationTrackForm = withLocationContext(withTrackTrackForm)

export default withLocationTrackForm;