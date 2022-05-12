import Stack from '@mui/material/Stack'
import { useLiveQuery } from 'dexie-react-hooks'
import { TodoListView } from '../TodoListView'
import { db } from '../../db/db'
import { PlanScreen } from './styles'

export function TodoLists() {
  const lists = useLiveQuery(() => db.todoLists.toArray())

  if (!lists)
    return null

  return (
    <PlanScreen>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
        sx={{
          margin: 0,
          padding: 0,
        }}
      >
        {lists.map((list, index) =>
          index < 3
            ? (
              <TodoListView key={list.id} todoList={list} />
              )
            : (
                ''
              ),
        )}
      </Stack>
    </PlanScreen>
  )
}
