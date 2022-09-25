import TabContext from '@mui/lab/TabContext'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import type { SyntheticEvent } from 'react'
import { useEffect } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { getBooks } from '../../api/books'
import ControlPanel from '../../layouts/ControlPanel'
import { ClassDescription, ShowBook } from './styles'

interface Book {
  name: string
  author: string
  image: string
  bookDesc: string
  link: string
  classification: string
}

interface BookClassification {
  name: string
  description: string
  books: Array<Book>
}

export function Books() {
  const [bookClassification, setBookClassification] = useLocalStorage<Array<BookClassification>>(
    'bookClassification',
    [],
  )
  const [books, setBooks] = useLocalStorage<Array<Array<Book>>>('books', [])
  const [value, setValue] = useLocalStorage<string>('curClassificationTab', '0')

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue.toString())
  }

  useEffect(() => {
    const getData = async () => {
      const res = await getBooks()

      if (res.status === 200) {
        setBookClassification(res.data)
        const TempData: Array<any> = []
        res.data.forEach((item: BookClassification) => {
          TempData.push(item.books)
        })
        setBooks(TempData)
      }
    }

    getData()
  }, [])

  return (
    <ControlPanel href="/explore">
      <TabContext value={value}>
        <Box sx={{ width: '95vw', typography: 'body1' }}>
          <Tabs value={value} onChange={handleChange} centered>
            {bookClassification.map(
              (item: BookClassification, index: number) => (
                <Tab
                  label={item.name}
                  value={index.toString()}
                  key={index}
                  sx={{
                    fontSize: '1.2rem',
                    letterSpacing: '2px',
                  }}
                />
              ),
            )}
          </Tabs>

          {books.map((item: Array<Book>, index: number) => (
            <TabPanel key={index} value={index.toString()}>
              <ClassDescription>
                {bookClassification[index].description}
              </ClassDescription>

              <ShowBook>
                {item.map((book: Book) => (
                  <Card
                    key={`${book.name} + ${book.author}`}
                    sx={{
                      'minWidth': 350,
                      'maxWidth': 350,
                      'marginLeft': '0.5rem',
                      'marginRight': '0.5rem',
                      '&:first-child': {
                        marginLeft: 0,
                      },
                      '&:last-child': {
                        marginRight: 0,
                      },
                    }}
                    color="#fffffe"
                    variant="outlined"
                  >
                    <CardMedia
                      component="img"
                      height="400"
                      image={book.image}
                      alt={book.name}
                    />
                    <CardContent>
                      <Typography
                        sx={{
                          fontSize: 18,
                          fontWeight: 500,
                        }}
                        color="#272343"
                        gutterBottom
                      >
                        {book.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontWeight: 300,
                        }}
                        color="#272343"
                        gutterBottom
                      >
                        {book.author}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="#2d334a"
                        sx={{
                          fontSize: 16,
                          letterSpacing: 1,
                          lineHeight: 1.5,
                        }}
                      >
                        {book.bookDesc}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </ShowBook>
            </TabPanel>
          ))}
        </Box>
      </TabContext>
    </ControlPanel>
  )
}
