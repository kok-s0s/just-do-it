import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { resetDatabase } from '../../db/db'
import { Icon } from './styles'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 0,
  padding: 0,
  transform: 'translate(-50%, -50%)',
  width: 650,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export function ResetDatabaseButton() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Icon whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={handleOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="currentColor"><path d="M12 6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Zm0 10a1 1 0 1 0 0 2a1 1 0 0 0 0-2Z"/><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 0 16 0a8 8 0 0 0-16 0Z" clipRule="evenodd"/></g></svg>
      </Icon>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              display: 'inline-block',
              fontFamily: '\'Macondo\',\'Noto Serif SC\'',
            }}
          >
            Are you sure you want to reset the data?
          </Typography>

          <Button
            sx={{
              fontSize: '1.5rem',
            }}
            onClick={() => {
              resetDatabase()
              handleClose()
            }}
          >
            ✅
          </Button>

          <Button
            sx={{
              fontSize: '1.5rem',
            }}
            onClick={() => {
              handleClose()
            }}
          >
            ❌
          </Button>
        </Box>
      </Modal>
    </>
  )
}
