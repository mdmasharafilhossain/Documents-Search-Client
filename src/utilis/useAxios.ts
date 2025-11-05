import axios from 'axios';

 const useAxios = axios.create({
    baseURL: 'https://docfind-server.vercel.app',
  withCredentials: true,
});

export default useAxios;