import { useEffect } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { getBooks } from '../../api/books'
import ControlPanel from '../../layouts/ControlPanel'
import { Image } from './styles'

interface Book {
  name: string
  author: string
  image: string
  description: string
  link: string
  classification: string
}

interface BookClassification {
  name: string
  description: string
  books: Array<Book>
}

export default function Books() {
  const [bookClassification, setBookClassification] = useLocalStorage<Array<BookClassification>>(
    'bookClassification',
    [],
  )
  const [books, setBooks] = useLocalStorage<Array<Array<Book>>>('books', [])

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
      {bookClassification.map(
        (item: BookClassification, index: number) => (
          <>
            {item.name}
          </>
        ),
      )}

      {books.map((item: Array<Book>, index: number) => (
        <>
          {bookClassification[index].description}
          {item.map((book: Book) => (
            <>
              <Image src={book.image} alt={book.name} />
              {book.name}
              {book.author}
              {book.description}
            </>
          ))}
        </>
      ))}

    </ControlPanel >
  )
}
