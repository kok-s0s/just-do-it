import instance from '../axios.config'

export const getBooks = () => {
    return instance.get('/books/classification')
}
