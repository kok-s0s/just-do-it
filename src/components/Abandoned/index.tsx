import { Button } from './styles'
import Drawer from '@mui/material/Drawer'
import { AbandonedList } from '../AbandonedList'
import { db } from '../../dexie/db'
import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'react'

export function Abandoned() {
    const lists = useLiveQuery(() => db.todoLists.toArray())

    const [state, setState] = useState(false)

    return (
        <>
            <Button onClick={() => setState(!state)}>永久废弃项</Button>

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
