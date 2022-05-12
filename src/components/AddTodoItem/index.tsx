import Box from '@mui/material/Box'
import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'
import { db } from '../../db/db'
import type { TodoList } from '../../db/TodoList'
import { Cancel, Confirm, FlexBox, Input } from './styles'

interface Props {
  todoList: TodoList
  hidden: boolean
  setHidden: Dispatch<SetStateAction<boolean>>
}

export function AddTodoItem({ todoList, hidden, setHidden }: Props) {
  const [item, setItem] = useState({
    todoListId: typeof todoList.id === 'number' ? todoList.id : 0,
    title: '',
    time: new Date(),
  })

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        padding: '0.8rem',
      }}
    >
      <Input
        placeholder="Enter a note"
        value={item.title}
        onChange={ev =>
          setItem(item => ({
            ...item,
            title: ev.target.value,
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
                time: new Date(),
              })
              setHidden(!hidden)
            }
          }}
        >
          确认
        </Confirm>
        <Cancel onClick={() => setHidden(!hidden)}>取消</Cancel>
      </FlexBox>
    </Box>
  )
}
