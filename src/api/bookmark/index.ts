import instance from '../axios.config'

export const getBookmarkCategory = () => {
  return instance.get('/bookmark/category')
}

