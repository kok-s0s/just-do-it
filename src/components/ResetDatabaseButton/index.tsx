import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { resetDatabase } from '../../db/db'
import { ButtonWow } from './styles'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  margin: 0,
  padding: 0,
  transform: 'translate(-50%, -50%)',
  width: 400,
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
      <ButtonWow onClick={handleOpen}>慎重点击 不然重置</ButtonWow>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            你是否确定要重置数据？
          </Typography>
          <Button
            size="large"
            sx={{
              position: 'absolute',
              right: '1.2rem',
              fontSize: '1.75rem',
              bottom: '1rem',
            }}
            onClick={() => {
              resetDatabase()
              handleClose()
            }}
          >
            确定 ✅
          </Button>
        </Box>
      </Modal>
    </>
  )
}
