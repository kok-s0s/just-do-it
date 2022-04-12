import { ShowItem, More, Note, Time, Input } from './styles'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { db } from '../../db/db'
import { TodoItem } from '../../db/TodoItem'
import { Month, ordinalNumber, appendZero } from '../../utils/DateHandle'
import { useState, MouseEvent } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'

interface Props {
    item: TodoItem
}

export function TodoItemView({ item }: Props) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [hidden, setHidden] = useState(false)
    const [tempTitle, setTempTitle] = useState('')
    const open = Boolean(anchorEl)
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const date = item.time
        ? `Added on ${Month.get(item.time.getMonth())} ${ordinalNumber(
              item.time.getDate()
          )} at ${item.time.getHours()}:${appendZero(item.time.getMinutes())}`
        : ''
    const lists = useLiveQuery(() => db.todoLists.toArray())
    const mItem = (bColor1: string, bColor2: string, color: string) => {
        return {
            backgroundColor: bColor1,
            color: color,
            ':hover': {
                backgroundColor: bColor2,
                color: color
            }
        }
    }
    const copy2OtherPlace = (curItem: TodoItem, to: number) => {
        const copyItem: TodoItem = curItem
        copyItem.todoListId = to
        curItem.id && db.todoItems.delete(curItem.id)
        db.todoItems.add(copyItem)
    }
    const reviseNote = (curItem: TodoItem, title: string) => {
        const copyItem: TodoItem = curItem
        copyItem.title = title
        curItem.id && db.todoItems.delete(curItem.id)
        db.todoItems.add(copyItem)
    }

    return (
        <ShowItem>
            {hidden ? (
                <>
                    <Input
                        placeholder="Revise a note"
                        value={tempTitle}
                        onChange={ev => setTempTitle(ev.target.value)}
                    />
                    <Grid
                        container
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        <Grid item>
                            <Button
                                onClick={() => {
                                    reviseNote(item, tempTitle)
                                    setTempTitle('')
                                    setHidden(!hidden)
                                }}
                            >
                                确定
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={() => setHidden(!hidden)}>
                                取消
                            </Button>
                        </Grid>
                    </Grid>
                </>
            ) : (
                <>
                    <EventNoteOutlinedIcon
                        fontSize="small"
                        sx={{
                            position: 'absolute',
                            marginTop: '0.2rem',
                            marginLeft: '0.2rem',
                            color: '#595F69'
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
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                    >
                        <MenuItem
                            onClick={() => {
                                if (item.id && lists && lists[0].id) {
                                    copy2OtherPlace(item, lists[0].id)
                                }
                                handleClose()
                            }}
                        >
                            ToDo again
                        </MenuItem>
                        <MenuItem
                            sx={mItem('#84D4C6', '#2b8777', '#000000')}
                            onClick={() => {
                                if (item.id && lists && lists[1].id) {
                                    copy2OtherPlace(item, lists[1].id)
                                }
                                handleClose()
                            }}
                        >
                            Finish note
                        </MenuItem>
                        <MenuItem
                            sx={mItem('#009999', '#1d7373', '#000000')}
                            onClick={() => {
                                setTempTitle(item.title)
                                setHidden(!hidden)
                                handleClose()
                            }}
                        >
                            Revise note
                        </MenuItem>
                        <MenuItem
                            sx={mItem('#416862', '#1f413c', '#efeeef')}
                            onClick={() => {
                                if (item.id && lists && lists[2].id) {
                                    copy2OtherPlace(item, lists[2].id)
                                }
                                handleClose()
                            }}
                        >
                            Delayed plan
                        </MenuItem>
                        <MenuItem
                            sx={mItem('#7d8889', '#293a3b', '#efeeef')}
                            onClick={() => {
                                if (item.id && lists && lists[3].id) {
                                    copy2OtherPlace(item, lists[3].id)
                                }
                                handleClose()
                            }}
                        >
                            Abandoned
                        </MenuItem>
                        <MenuItem
                            sx={mItem('#c54a4b', '#b20e0f', '#efeeef')}
                            onClick={() => {
                                if (item.id) db.todoItems.delete(item.id)
                                handleClose()
                            }}
                        >
                            Delete note
                        </MenuItem>
                    </Menu>

                    <Note>{item.title}</Note>
                    <Time>{date}</Time>
                </>
            )}
        </ShowItem>
    )
}
