import {
    PlanItem,
    Header,
    Count,
    ListTitle,
    AddItem,
    Combination,
    Content
} from './styles'
import AddIcon from '@mui/icons-material/Add'
import { TodoList } from '../../db/TodoList'
import { TodoItemView } from '../TodoItemView'
import { AddTodoItem } from '../AddTodoItem'
import { db } from '../../db/db'
import { useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'

interface Props {
    todoList: TodoList
}

export function TodoListView({ todoList }: Props) {
    const items = useLiveQuery(
        () => db.todoItems.where({ todoListId: todoList.id }).toArray(),
        [todoList.id]
    )

    const [hidden, setHidden] = useState(false)

    if (!items) return null

    const curListLen = items.length

    return (
        <PlanItem>
            <Header>
                <Combination>
                    <Count>{curListLen}</Count>
                    <ListTitle>{todoList.title}</ListTitle>
                    <AddItem
                        onClick={() => {
                            setHidden(!hidden)
                        }}
                    >
                        <AddIcon />
                    </AddItem>
                </Combination>
            </Header>

            <Content>
                {hidden ? (
                    <AddTodoItem
                        todoList={todoList}
                        hidden={hidden}
                        setHidden={setHidden}
                    />
                ) : (
                    ``
                )}

                {items.map(item => (
                    <TodoItemView key={item.id} item={item} />
                ))}
            </Content>
        </PlanItem>
    )
}
