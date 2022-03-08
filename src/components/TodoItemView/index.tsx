import { ShowItem, More, Note, Time } from './styles'
import { useState, MouseEvent } from 'react'
import { db } from '../../dexie/db'
import { TodoItem } from '../../dexie/TodoItem'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

interface Props {
    item: TodoItem
}

export function TodoItemView({ item }: Props) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const Month = new Map([
        [0, 'January'],
        [1, 'February'],
        [2, 'March'],
        [3, 'April'],
        [4, 'May'],
        [5, 'June'],
        [6, 'July'],
        [7, 'August'],
        [8, 'September'],
        [9, 'October'],
        [10, 'November'],
        [11, 'December']
    ])
    const ordinalNumber = (n: number) => {
        return n + (['st', 'nd', 'rd'][n < 20 ? n - 1 : (n % 10) - 1] || 'th')
    }
    const appendZero = (n: number) => {
        if (n < 10) return `0${n}`
        else return n
    }

    const date = item.time
        ? `Added on ${Month.get(item.time.getMonth())} ${ordinalNumber(
              item.time.getDate()
          )} at ${item.time.getHours()}:${appendZero(item.time.getMinutes())}`
        : ''

    return (
        <ShowItem>
            <EventNoteOutlinedIcon
                fontSize="small"
                sx={{
                    color: '#595F69',
                    position: 'absolute',
                    marginTop: '0.2rem',
                    marginLeft: '0.2rem'
                }}
            />
            <More
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreHorizIcon
                    sx={{
                        color: '#595F69'
                    }}
                />
            </More>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <MenuItem
                    onClick={() => {
                        if (item.id) db.todoItems.delete(item.id)
                        handleClose()
                    }}
                >
                    Delete note
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        handleClose()
                    }}
                >
                    Finish note
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        handleClose()
                    }}
                >
                    Logout
                </MenuItem>
            </Menu>
            <Note>{item.title}</Note>
            <Time>{date}</Time>
            {/* <div className="narrow">
                <input
                    type="checkbox"
                    checked={!!item.done}
                    onChange={ev =>
                        db.todoItems.update(item, {
                            done: ev.target.checked
                        })
                    }
                />
            </div> */}
        </ShowItem>
    )
}
