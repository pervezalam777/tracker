import { useEffect, useState } from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'


export default (shouldTrack, callback) => {
    const [err, setError] = useState(null);

    useEffect(() => {
        let subscriber = null
        const startWatching = async () => {
            try{
                let { status } = await requestPermissionsAsync();
                if (status !== 'granted') {
                    setError('Permission to access location was denied');
                }
                subscriber = await watchPositionAsync({
                    accuracy:Accuracy.BestForNavigation,
                    timeInterval:1000,
                    distanceInterval:10
                }, callback);
    
            } catch(err){
                setError(err);
            }
        }

        if(shouldTrack){
            startWatching();
        } else {
            subscriber != null && subscriber.remove();
            subscriber = null;
        }
        return () => {
            if(subscriber){
                subscriber.remove();
            }
        }
    }, [shouldTrack, callback])

    return [err];
}