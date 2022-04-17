import instance from '../axios.config'

export const getWebSites = () => {
    return instance.get('/website/websites')
}

export const getArticles = () => {
    return instance.get('/website/articles')
}
