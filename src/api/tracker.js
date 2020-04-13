import axios from 'axios';
import {AsyncStorage} from 'react-native'

const instance =  axios.create({
    //ngrok url should be used here.
    baseURL:'http://68be39aa.ngrok.io'
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token')
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    },
    (err) => {
        return Promise.reject(err);
    }
)

export default instance;

