import { Cancel, Confirm, Input, FlexBox } from './styles'
import { useState } from 'react'
import { db } from '../../dexie/db'
import { TodoList } from '../../dexie/TodoList'
import Box from '@mui/material/Box'

interface Props {
    todoList: TodoList
}

export function AddTodoItem({ todoList }: Props) {
    const [item, setItem] = useState({
        todoListId: typeof todoList.id === 'number' ? todoList.id : 0,
        title: '',
        time: new Date()
    })

    return (
        <Box
            sx={{
                width: '100%',
                height: 'auto',
                padding: '0.8rem'
            }}
        >
            <Input
                placeholder="Enter a note"
                value={item.title}
                onChange={ev =>
                    setItem(item => ({
                        ...item,
                        title: ev.target.value
                    }))
                }
            />
            <FlexBox>
                <Confirm
                    onClick={() => {
                        if (item.title !== '') {
                            const curDate = new Date()
                            item.time = curDate
                            db.todoItems.add(item)
                            setItem({
                                todoListId:
                                    typeof todoList.id === 'number'
                                        ? todoList.id
                                        : 0,
                                title: '',
                                time: new Date()
                            })
                        }
                    }}
                >
                    确认
                </Confirm>
                <Cancel>取消</Cancel>
            </FlexBox>
        </Box>
    )
}
