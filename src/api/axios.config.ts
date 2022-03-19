import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:27017/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default instance
