import instance from '../axios.config'

export const getBookmarkCategory = () => {
  return instance.get('/bookmark/category')
}

export const getBookmarkList = () => {
  return instance.get('/bookmark/list')
}
