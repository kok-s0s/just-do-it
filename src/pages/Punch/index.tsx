import { Container, Back, BText } from './styles'
import { Link } from 'react-router-dom'
import { TodoLists } from '../../components/TodoLists'
import { ResetDatabaseButton } from '../../components/ResetDatabaseButton'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export function Punch() {
    return (
        <>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            margin: 0,
                            padding: 0,
                            width: '100vw'
                        }}
                    >
                        <Grid item xs={8}>
                            <TodoLists />
                            <ResetDatabaseButton />
                        </Grid>
                        <Grid item xs={4}>
                            Github Information
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Link to="/home">
                <Back>
                    <BText>返回</BText>
                </Back>
            </Link>
        </>
    )
}
