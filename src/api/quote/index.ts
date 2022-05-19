import instance from '../axios.config'

export const getQuote = (data: Array<string>) => {
  return instance.post('/quotes/one', {
    quotesID: data,
  })
}
