export const Month = new Map([
  [0, 'January'],
  [1, 'February'],
  [2, 'March'],
  [3, 'April'],
  [4, 'May'],
  [5, 'June'],
  [6, 'July'],
  [7, 'August'],
  [8, 'September'],
  [9, 'October'],
  [10, 'November'],
  [11, 'December'],
])
export const ordinalNumber = (n: number) => {
  return n + (['st', 'nd', 'rd'][n < 20 ? n - 1 : (n % 10) - 1] || 'th')
}
export const appendZero = (n: number) => {
  if (n < 10)
    return `0${n}`
  else return n
}
