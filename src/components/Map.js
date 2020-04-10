import React from 'react';
import {StyleSheet, ActivityIndicator } from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';
import {withLocationContext} from '../hooks/locationProvider'


const Map = ({locationState}) => {
    let {currentLocation} = locationState
    
    if(!currentLocation){
        return <ActivityIndicator size="large" style={{marginTop200}} />;
    }

    let regionObject = {
        ...currentLocation.coords,
        longitudeDelta:0.01,
        latitudeDelta:0.01
    }

    return <MapView 
        style={styles.map}
        initialRegion={regionObject}
        region={regionObject} 
    >
        <Circle  
            center={currentLocation.coords}
            radius={30}
            strokeColor="rgba(158,158,255, 1.0)"
            fillColor="rgba(158,158,255,0.3)"
        />
        {/* <Polyline  coordinates={points}/> */}
    </MapView>
}

const styles = StyleSheet.create({
    map: {
        height:300
    }
})

export default withLocationContext(Map);