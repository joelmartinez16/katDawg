import axios from 'axios';
const petFinderKey = "ovJi0xO2AzVKVKZmSVXKLw63COyFrqAQ25my91lMFmJNBeGEzs";
const petFinderSecret = "sOSXf2W6VNHgT7xPkKM1zwIlpLSdAPkQKi7vy2MD";


export const getInfo = () =>
  axios.get('https://rescuegroups.org/manage/public_apikey_edit?ak=Kj0RT2J0&t=HBMa7f573cqrRTp');

export const fetchToken = async () => {
  const url = `https://api.petfinder.com/v2/oauth2/token`;
    const body = {
      grant_type:'client_credentials',
      client_id: petFinderKey,
      client_secret: petFinderSecret
    }
    return axios.post(url, body);  
}

export const getAnimalsByType = (type, token) => axios.get(`https://api.petfinder.com/v2/animals/?type=${type}`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
}) 