import axios from 'axios'

export function request(config){
  const request =  axios.create({
    baseURL:'http://123.207.32.32:8000'
  })

  request.interceptors.request.use(config =>{
    // console.log(config);
    return config
  },() =>{
    // console.log(err);
  })

  request.interceptors.response.use(res => {
    // console.log(res);
    return res
  },() => {
    // console.log(err);
  })


  return request(config)
}