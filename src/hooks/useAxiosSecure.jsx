import React from 'react';
import axios from 'axios';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';
 const axiosSecure=axios.create({
   baseURL :'http://localhost:5000/'
})
const useAxiosSecure = () => {
   const { logOut } = useAuth(); 
  const navigate = useNavigate();

  axiosSecure.interceptors.request.use(function(config){
    const token=localStorage.getItem('access-token')
    console.log("request stop by interceptors ",token)
    config.headers.authorization=`Bearer ${token}`;
    return config 
  },function(error){
    return Promise.reject(error);
  });


//intercepts 401 and 403 
 axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      });
 

    return axiosSecure;
};

export default useAxiosSecure;

