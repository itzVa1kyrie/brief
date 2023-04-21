import axios from 'axios';

const firebase = axios.create({
  baseURL: 'https://lab1-421ae-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default firebase;
