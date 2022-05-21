import Drawer from '@mui/material/Drawer'
import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'react'
import { AbandonedList } from '../AbandonedList'
import { db } from '../../db/db'
import { Button } from './styles'

export function Abandoned() {
  const lists = useLiveQuery(() => db.todoLists.toArray())

  const [state, setState] = useState(false)

  return (
    <>
      <Button onClick={() => setState(!state)}>Permanently obsolete</Button>

      <Drawer
        anchor={'right'}
        open={state}
        onClose={() => setState(!state)}
      >
        {lists && lists[3] ? <AbandonedList todoList={lists[3]} /> : ''}
      </Drawer>
    </>
  )
}
