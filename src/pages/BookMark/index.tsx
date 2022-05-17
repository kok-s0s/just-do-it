import { useEffect, useState } from 'react'
import { SortableContainer, SortableElement, SortableHandle, arrayMove } from 'react-sortable-hoc'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import Basic from '../../layouts/Basic'
import { getBookmarkCategory, getBookmarkList } from '../../api/bookmark'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { Answer, Border, Card, False, Header, HighLight, Icon, Manage, Option, Search, SearchHeader, SearchInput, Title } from './styles'

interface Bookmark {
  name: string
  description: string
  link: string
}

interface BookmarkCategory {
  id: string
  name: string
  bookmarks: Array<Bookmark>
}

const Handle = SortableHandle(({ tabIndex }: { tabIndex: number }) => (
  <Icon whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.7 }} tabIndex={tabIndex}>
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.353 0v2.824H4.94v2.823H3.53v2.824H2.118v2.823H.706v2.824h8.47v2.823H7.765v2.824H6.353v2.823h1.412v-1.412h1.411v-1.411h1.412v-1.412H12V16.94h1.412v-1.41h1.412v-1.411h1.411v-1.412h1.412v-1.412h1.412V9.882h1.412V8.471h1.411V7.059h-4.235V5.647h1.412V4.235h1.412V2.824h1.411V1.412h1.412V0zm0 22.588H4.94V24h1.412zM7.765 2.824h9.882v1.411h-1.412v1.412h-1.411V7.06h-1.412v1.41H12v1.411h1.412v1.412H12V9.882h-1.412v1.412H9.176V9.882H7.765v1.412H6.353V9.882H4.94V8.471h1.412V5.647h1.412zM6.353 8.47v1.411h1.412v-1.41zm2.823 1.411h1.412v-1.41H9.176zm5.648 0h1.411v1.412h-1.411Z"/></svg>
  </Icon>
))

const SortableItem = SortableElement((props: { shouldUseDragHandle?: any; value?: any }) => {
  const { value: category } = props
  const [hidden, setHidden] = useState(false)

  return (
    <Card>
      <Header>
        <Title whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }} onClick={() => setHidden(!hidden)}>{category.name}</Title>
        {props.shouldUseDragHandle && <Handle tabIndex={category.id} />}
      </Header>
      {hidden
        ? (
          <Border initial={{ scale: 0 }} animate={{ rotate: 360, scale: 1 }} transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}>
            {category.bookmarks.map((bookmark: Bookmark) => {
              return (
                <li key={bookmark.name}>
                  <Option href={bookmark.link} target="_blank">{bookmark.name}</Option>
                </li>
              )
            })}
          </Border>
          )
        : ''}
    </Card>
  )
})

const SortableList = SortableContainer((props: { [x: string]: any; items: any }) => {
  const { items, ...restProps } = props

  return (
    <Manage>
      {items.map((item: BookmarkCategory, index: number) => (
        <SortableItem
          key={`item-${item.id}`}
          index={index}
          value={item}
          {...restProps}
        />
      ))}
    </Manage>
  )
})

export function BookMark() {
  const [bookmarkCategory, setBookmarkCategory] = useLocalStorage(
    'bookmarkCategory',
    [],
  )
  const [bookmarkList, setBookmarkList] = useLocalStorage(
    'bookmarkList',
    [],
  )
  const [query, setQueryText] = useState('')
  const [matchArray, setMatchArray] = useState([])
  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
    setBookmarkCategory(arrayMove(bookmarkCategory, oldIndex, newIndex))
  }
  const findMatches = (wordToMatch: string | RegExp) => {
    return bookmarkList.filter((bookmark: Bookmark) => {
      const regex = new RegExp(wordToMatch, 'i')
      return bookmark.name.match(regex)
    })
  }

  useEffect(() => {
    const getData = async () => {
      const resList = await getBookmarkList()

      if (resList.status === 200)
        setBookmarkList(resList.data)

      const resCategory = await getBookmarkCategory()

      if (resCategory.status === 200)
        setBookmarkCategory(resCategory.data)
    }

    getData()
  }, [])

  useEffect(() => {
    setMatchArray(findMatches(query))
  }, [query])

  return (
    <Basic href="/explore">
      <SortableList
        shouldUseDragHandle={true}
        useDragHandle
        axis="xy"
        items={bookmarkCategory}
        onSortEnd={onSortEnd}
      />
      <Search>
        <SearchHeader>
          <TravelExploreIcon sx={{
            fontSize: 36,
            color: 'rgba(0, 0, 0, 0.5)',
          }}/>
          <SearchInput type="text" value={query} placeholder="Query" onChange={ev => setQueryText(ev.target.value)} />
        </SearchHeader>
        {(query !== '' && matchArray.length > 0)
          ? (
            <Answer>
              {matchArray.map((bookmark: Bookmark) => {
                const regex = new RegExp(query, 'gi')

                return (
                  <li key={bookmark.name}>
                    <Option href={bookmark.link} target="_blank">
                      {bookmark.name.split(' ').map((part, i) => {
                        return regex.test(part)
                          ? (
                            <HighLight key={i}>{part}</HighLight>
                            )
                          : (
                            <span key={i}>{part}</span>
                            )
                      })}
                    </Option>
                  </li>
                )
              })}
            </Answer>
            )
          : (query !== '' && matchArray.length === 0)
              ? (
                <False>
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="currentColor"><path d="M30 25.14V12.5a1.5 1.5 0 1 0-3 0V23h-2V9.5a1.5 1.5 0 1 0-3 0V23h-2V12.5a1.5 1.5 0 1 0-3 0V25h-2v-8.5a1.5 1.5 0 1 0-3 0v13.238a10.263 10.263 0 0 0 19.324 4.818l5.906-11.107a1.812 1.812 0 0 0-3.184-1.731l-2.172 3.909c-.5.902-1.874.546-1.874-.486Z"/><path fillRule="evenodd" d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4Zm18.095 20c0-9.994-8.101-18.095-18.095-18.095c-9.994 0-18.095 8.101-18.095 18.095c0 9.994 8.101 18.095 18.095 18.095c9.994 0 18.095-8.101 18.095-18.095Z" clipRule="evenodd"/></g></svg>
                </False>
                )
              : '' }
      </Search>
    </Basic>
  )
}
