import axios from 'axios'
//first to prod
//second to test back
//third from localhost
//fourth to test arena with url
export default axios.create({
  baseURL: 'http://195.38.164.24:8080'
  //baseURL: 'http://193.124.206.13:8080'
  //baseURL: 'localhost:8080'
  //baseURL: 'https://arenagames.io:8080'
})

console.log('hello world')
