import Drawer from '@mui/material/Drawer'
import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'react'
import { AbandonedList } from '../AbandonedList'
import { db } from '../../db/db'
import { Icon } from './styles'

export function Abandoned() {
  const lists = useLiveQuery(() => db.todoLists.toArray())

  const [state, setState] = useState(false)

  return (
    <>
      <Icon whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={() => setState(!state)}>
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M216 48H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16Zm-24 160H64V64h128ZM80 24a8 8 0 0 1 8-8h80a8 8 0 0 1 0 16H88a8 8 0 0 1-8-8Z"/></svg>
      </Icon>

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
