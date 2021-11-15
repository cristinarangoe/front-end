import axios from 'axios';

export default async function requestCalculos(menuValue:string,values: unknown){
    const data =  await axios.post(`https://final-cristinarangoe-server.herokuapp.com/${menuValue}`,values);

    return data.data
}