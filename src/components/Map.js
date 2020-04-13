import React from 'react';
import {StyleSheet, ActivityIndicator } from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';
import {withLocationContext} from '../hooks/locationProvider'


const Map = ({locationState}) => {
    let {currentLocation, locations} = locationState
    
    if(!currentLocation){
        return <ActivityIndicator size="large" style={{marginTop:200}} />;
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
        <Polyline  coordinates={locations.map(loc => loc.coords)}/>
    </MapView>
}

const styles = StyleSheet.create({
    map: {
        height:300,
        marginBottom:20
    }
})

export default withLocationContext(Map);