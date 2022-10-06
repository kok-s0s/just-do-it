import { useEffect, useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { getBooks } from '../../api/books'
import ControlPanel from '../../layouts/ControlPanel'
import { Container, Content, Image, Info, Item, List, Tab } from './styles'

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
  const [curBCIndex, setCurBCIndex] = useLocalStorage<number>('curBCIndex', 0);

  useEffect(() => {
    const getData = async () => {
      const res = await getBooks()

      if (res.status === 200) {
        setBookClassification(res.data)
      }
    }

    getData()
  }, [])

  return (
    <ControlPanel href="/explore">
      <Container>
        {bookClassification.map(
          (item: BookClassification, index: number) => (
            <Tab key={item.name}>
              <input type="radio" name="bc" id={"bc" + index} checked={curBCIndex === index} />
              <label htmlFor={"bc" + index}>
                <button onClick={() => setCurBCIndex(index)}>{item.name}</button>
              </label>
              <Content>
                <span>{item.description}</span>
                <List>
                  {item.books.map((book: Book) => (
                    <Item>
                      <Image src={book.image} alt={book.name} />
                      {/* <Info>
                        <span>{book.name}</span>
                        <span>{book.author}</span>
                        <span>{book.description}</span>
                      </Info> */}
                    </Item>
                  ))}
                </List>
              </Content>
            </Tab>
          ),
        )}
      </Container>
    </ControlPanel >
  )
}
