import { useLiveQuery } from 'dexie-react-hooks'
import TodoListView from '../TodoListView'
import { db } from '../../db/db'
import { PlanScreen } from './styles'

export default function TodoLists() {
  const lists = useLiveQuery(() => db.todoLists.toArray())

  if (!lists)
    return null

  return (
    <PlanScreen>
      {lists.map((list, index) =>
        index < 3
          ? (
            <TodoListView key={list.id} todoList={list} />
          )
          : (
            ''
          ),
      )}
    </PlanScreen>
  )
}
