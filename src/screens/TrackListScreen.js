import React, { useEffect } from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import {ListItem} from 'react-native-elements'
import {NavigationEvents} from 'react-navigation'
import { withTrackContext } from '../hooks/TrackContext';

const TrackListScreen = ({fetchTracks, trackState:{tracks}, navigation}) =>  {
    console.log("tracks..... ", tracks)
    useEffect(()=>{
        fetchTracks();
    }, [])

    return <View style={styles.container}>
        <FlatList 
            data={tracks}
            keyExtractor={item => item._id}
            renderItem={({item}) => {
                return <TouchableOpacity onPress={() => {
                    navigation.navigate('TrackDetail', { _id: item._id})
                }}>
                    <ListItem chevron={true} title={item.name} />
                </TouchableOpacity>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

const withTrackContextTrackListScreen = withTrackContext(TrackListScreen)

withTrackContextTrackListScreen.navigationOptions = () => {
    return {
        title: 'Track List'
    }
}

export default withTrackContextTrackListScreen