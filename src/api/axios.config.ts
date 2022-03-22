import axios from 'axios'

const curState = 'pro'
const devURL = 'http://localhost:27017/'
const proURL = 'http://106.52.175.59:27017/'

const instance = axios.create({
    baseURL: curState === 'pro' ? proURL : devURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default instance
