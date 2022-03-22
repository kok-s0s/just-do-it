import { ClassDescription, ShowBook } from './styles'
import TabContext from '@mui/lab/TabContext'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useLocalStorage } from '../../utils/useLocalStorage'
import { SyntheticEvent, useEffect } from 'react'
import { getBooks } from '../../api/books'

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
    classDesc: string
    books: Array<Book>
}

export function Books() {
    const [bookClassification, setBookClassification] = useLocalStorage(
        'bookClassification',
        []
    )
    const [books, setBooks] = useLocalStorage('books', [])
    const [value, setValue] = useLocalStorage('curClassificationTab', '0')

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue)
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

        getData().catch(function (error) {
            console.log(error)
        })
    }, [])

    return (
        <>
            <TabContext value={value}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        {bookClassification.map(
                            (item: BookClassification, index: number) => (
                                <Tab
                                    label={item.name}
                                    value={index.toString()}
                                    key={index}
                                />
                            )
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
                                            minWidth: 350,
                                            marginLeft: '0.5rem',
                                            marginRight: '0.5rem'
                                        }}
                                        color="#fffffe"
                                        variant="outlined"
                                    >
                                        <CardMedia
                                            component="img"
                                            height="400"
                                            image={book.image}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography
                                                sx={{
                                                    fontSize: 18,
                                                    fontWeight: 500
                                                }}
                                                color="#272343"
                                                gutterBottom
                                            >
                                                {book.name}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: 14,
                                                    fontWeight: 300
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
                                                    lineHeight: 1.5
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
        </>
    )
}
