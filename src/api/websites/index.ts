import instance from '../axios.config'

export const getWebSites = () => {
    return instance.get('/website/websites')
}
