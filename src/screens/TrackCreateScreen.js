import React, { useCallback } from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements'
import {SafeAreaView, withNavigationFocus} from 'react-navigation'
import Map from '../components/Map'
import {withLocationContext} from '../hooks/locationProvider'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'

const TrackCreateScreen = ({locationState, addLocation, isFocused}) =>  {
    const memoAddLocation = useCallback(location => {
        addLocation(location, locationState.recording)
    }, [locationState.recording])

    const [err] = useLocation(isFocused, memoAddLocation);

    return <SafeAreaView forceInset={{top:'always'}}>
        <Text h2>Create a Trap</Text>
        <Map />
        {err && <Text>Please enable location services</Text>}
        <TrackForm />
    </SafeAreaView>
}

const styles = StyleSheet.create({

})

const withNavigationTrackCreateScreen = withNavigationFocus(TrackCreateScreen)
const withLocationTrackCreateScreen = withLocationContext(withNavigationTrackCreateScreen)

export default withLocationTrackCreateScreen