import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import fish from '../../../assets/images/fish.jpeg'
import Basic from '../../layouts/Basic'
import { Circle, Href } from './styles'

const options = [
  { name: 'YouTube', link: 'https://www.youtube.com/' },
  { name: 'BiliBili', link: 'https://www.bilibili.com/' },
  { name: 'Twitch', link: 'https://www.twitch.tv/' },
  { name: 'AgeFans', link: 'https://www.agemys.com/update' },
]

/**
 * @todo Make an Anime Website
 * @body Shows the anime I've watched and its introduction page
 */
export function Animes() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Basic href="/explore">
      <Circle src={fish} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} aria-label="more" id="long-button" onClick={handleClick} />

      <Menu
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {options.map((option, index) => (
          <MenuItem key={index} onClick={handleClose} selected={option.name === 'YouTube'}>
            <Href href={option.link} target="_blank" rel="noreferrer" >
              {option.name}
            </Href>
          </MenuItem>
        ))}
      </Menu>
    </Basic>
  )
}
