import axios from 'axios';

export default axios.create({
    //ngrok url should be used here.
    baseURL:'http://localhost:3001'
})