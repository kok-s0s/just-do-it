import {
    Container,
    Back,
    BText,
    BClickLeft,
    BClickRight,
    BTitle,
    Button,
    Image
} from './styles'
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded'
import PunchClockRoundedIcon from '@mui/icons-material/PunchClockRounded'
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { Link } from 'react-router-dom'

const paperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#fffffe',
    borderRadius: '50px'
}

const iconStyle = {
    marginTop: '1vh',
    marginBottom: '1.5vh',
    fontSize: 370,
    color: '#bae8e8'
}

export function HomePage() {
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs>
                    <BClickLeft>
                        <Paper sx={paperStyle} elevation={3}>
                            <BTitle>滴、打卡！</BTitle>
                            <PunchClockRoundedIcon sx={iconStyle} />
                            <Link to="/punch">
                                <Button>Go! Go! Go!</Button>
                            </Link>
                        </Paper>
                    </BClickLeft>
                </Grid>
                <Grid
                    item
                    xs={2}
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Image>
                        <ArrowCircleUpRoundedIcon
                            sx={{
                                fontSize: 180,
                                width: '100%',
                                color: '#8bb7b9'
                            }}
                        />
                    </Image>
                </Grid>
                <Grid item xs>
                    <BClickRight>
                        <Paper sx={paperStyle} elevation={3}>
                            <BTitle>知识分享专区</BTitle>
                            <TravelExploreRoundedIcon sx={iconStyle} />
                            <Link to="/explore">
                                <Button>Go! Go! Go!</Button>
                            </Link>
                        </Paper>
                    </BClickRight>
                </Grid>
            </Grid>
            <Link to="/">
                <Back>
                    <BText>返回</BText>
                </Back>
            </Link>
        </Container>
    )
}
