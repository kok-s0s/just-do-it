import { Container, Back, BText, LFooter } from './styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { TodoLists } from '../../components/TodoLists'
import { Abandoned } from '../../components/Abandoned'
import { ResetDatabaseButton } from '../../components/ResetDatabaseButton'
import { GithubInfo } from '../../components/GithubInfo'
import { Link } from 'react-router-dom'

export function Punch() {
    return (
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
                        <LFooter>
                            <ResetDatabaseButton />
                            <Abandoned />
                        </LFooter>
                    </Grid>
                    <Grid item xs={4}>
                        <GithubInfo />
                    </Grid>
                </Grid>
            </Box>
            <Link to="/home">
                <Back>
                    <BText>返回</BText>
                </Back>
            </Link>
        </Container>
    )
}
