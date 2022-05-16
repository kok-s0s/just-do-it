import { useEffect, useState } from 'react'
import { SortableContainer, SortableElement, SortableHandle, arrayMove } from 'react-sortable-hoc'
import Basic from '../../layouts/Basic'
import { getBookmarkCategory } from '../../api/bookmark'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { Border, Card, Header, Icon, Manage, Option, Title } from './styles'

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

  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
    setBookmarkCategory(arrayMove(bookmarkCategory, oldIndex, newIndex))
  }

  useEffect(() => {
    const getData = async () => {
      const res = await getBookmarkCategory()

      if (res.status === 200 && res.data.length > bookmarkCategory.length)
        setBookmarkCategory(res.data)
    }

    getData()
  }, [])

  return (
    <Basic href="/explore">
      <SortableList
        shouldUseDragHandle={true}
        useDragHandle
        axis="xy"
        items={bookmarkCategory}
        onSortEnd={onSortEnd}
      />
    </Basic>
  )
}
