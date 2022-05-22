import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { TodoLists } from '../../components/TodoLists'
import { GithubInfo } from '../../components/GithubInfo'

export function Punch() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
          container
          spacing={2}
          sx={{
            margin: 0,
            width: '100vw',
            height: '100vh',
          }}
        >
        <Grid item xs={8} sx={{ paddingBottom: '1rem' }}>
          <TodoLists />
        </Grid>
        <Grid item xs={4} sx={{ paddingRight: '1rem' }}>
          <GithubInfo />
        </Grid>
      </Grid>
    </Box>
  )
}
