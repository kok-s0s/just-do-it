import { useLiveQuery } from 'dexie-react-hooks'
import AbandonedItem from '../AbandonedItem'
import { db } from '../../db/db'
import type { TodoList } from '../../db/TodoList'
import { Content } from './styles'

interface Props {
  todoList: TodoList
}

export default function AbandonedList({ todoList }: Props) {
  const items = useLiveQuery(
    () => db.todoItems.where({ todoListId: todoList.id }).toArray(),
    [todoList.id],
  )

  if (!items)
    return null

  return (
    <Content>
      {items.map(item => (
        <AbandonedItem key={item.id} item={item} />
      ))}
    </Content>
  )
}
