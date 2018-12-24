import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 3d975992a6b91a42489da14a66dc423e673ca8476b6c13079d4059eecab05cbc'
    }
});