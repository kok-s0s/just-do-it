import { useLiveQuery } from 'dexie-react-hooks'
import { TodoList } from '../../dexie/TodoList'
import { db } from '../../dexie/db'
import { Content } from './styles'
import { AbandonedItem } from '../AbandonedItem'

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
