import React, { useCallback } from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements'
import {SafeAreaView, withNavigationFocus} from 'react-navigation'
import Map from '../components/Map'
import {withLocationContext} from '../hooks/locationProvider'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import {FontAwesome} from '@expo/vector-icons'

const TrackCreateScreen = ({locationState:{recording}, addLocation, isFocused}) =>  {
    const memoAddLocation = useCallback(location => {
        addLocation(location, recording)
    }, [recording])

    const [err] = useLocation(isFocused || recording, memoAddLocation);

    return <SafeAreaView forceInset={{top:'always'}}>
        <Text h2 style={styles.heading}>Create a Track</Text>
        <Map />
        {err && <Text>Please enable location services</Text>}
        <TrackForm />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    heading:{
        marginTop:10,
        marginBottom:15
    }
})

const withNavigationTrackCreateScreen = withNavigationFocus(TrackCreateScreen)
const withLocationTrackCreateScreen = withLocationContext(withNavigationTrackCreateScreen)

withLocationTrackCreateScreen.navigationOptions = {
    title:"Add Track",
    tabBarIcon: <FontAwesome name="plus" size={20} />
}

export default withLocationTrackCreateScreen