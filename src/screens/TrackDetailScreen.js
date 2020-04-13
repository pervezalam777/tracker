import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { withTrackContext } from '../hooks/TrackContext';
import MapView, { Polyline} from 'react-native-maps';

const TrackDetailScreen = ({navigation, trackState:{tracks}}) =>  {
    const _id = navigation.getParam('_id');
    const track = tracks.find(track => track._id === _id);
    const initialCoords = track.locations[0].coords

    return <View style={styles.container}>
        <Text>{track.name}</Text>
        <MapView 
            style={styles.map}
            initialRegion={{
                longitudeDelta:0.01,
                latitudeDelta:0.01,
                ...initialCoords
            }}
            
        >
            <Polyline
                coordinates={track.locations.map(loc => loc.coords)}
            />
        </MapView>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        height:300
    }
})

const withTrackContextTrackDetailScreen = withTrackContext(TrackDetailScreen)

withTrackContextTrackDetailScreen.navigationOptions = () =>  {
    return {
        title: 'Track Details'
    }
}

export default withTrackContextTrackDetailScreen