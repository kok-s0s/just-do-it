import Box from '@mui/material/Box'
import type { Dispatch, SetStateAction } from 'react'
import { useEffect, useRef, useState } from 'react'
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
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setItem(item => ({
      ...item,
      title: event.target.value,
    }))
  }

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '60px'
      const scrollHeight = textareaRef.current.scrollHeight
      textareaRef.current.style.height = `${scrollHeight}px`
    }
  }, [item])

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
        ref={textareaRef}
        onChange={textAreaChange}
      />
      <FlexBox>
        <Confirm
          onClick={() => {
            if (item.title !== '') {
              const curDate = new Date()
              item.time = curDate
              db.todoItems.add(item)
              setItem({
                todoListId: typeof todoList.id === 'number' ? todoList.id : 0,
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
