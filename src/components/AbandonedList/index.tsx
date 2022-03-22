import { Content } from './styles'
import { AbandonedItem } from '../AbandonedItem'
import { db } from '../../db/db'
import { TodoList } from '../../db/TodoList'
import { useLiveQuery } from 'dexie-react-hooks'

interface Props {
    todoList: TodoList
}

export function AbandonedList({ todoList }: Props) {
    const items = useLiveQuery(
        () => db.todoItems.where({ todoListId: todoList.id }).toArray(),
        [todoList.id]
    )

    if (!items) return null

    return (
        <Content>
            {items.map(item => (
                <AbandonedItem key={item.id} item={item} />
            ))}
        </Content>
    )
}
