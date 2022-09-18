import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { resetDatabase } from '../../db/db'
import { ResetButton } from './styles'

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
  borderRadius: '1rem',
  borderStyle: 'none',
  p: 4,
}

export function ResetDatabaseButton() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <ResetButton onClick={handleOpen}>Restart</ResetButton>
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
