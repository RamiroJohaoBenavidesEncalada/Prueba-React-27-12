import axios from 'axios';

const clientHttp = axios.create({
  baseURL: "https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/",
  // Si la petición toma más tiempo que `timeout`, esta será abortada.
  timeout: 30000,
});


export default clientHttp;