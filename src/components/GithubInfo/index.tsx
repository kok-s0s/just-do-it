import { useState, SyntheticEvent } from 'react'
import { useLocalStorage } from '../../utils/useLocalStorage'
import {
    InfoScreen,
    ChangeButton,
    RFooter,
    Image,
    AlignRight,
    UserName,
    Location,
    Blog
} from './styles'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'
import BookOutlinedIcon from '@mui/icons-material/BookOutlined'
import { Weather } from '../Weather'
const axios = require('axios').default

const style = {
    margin: 0,
    padding: 0,
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
}

export function GithubInfo() {
    const [name, setName] = useLocalStorage('name', 'kok-s0s')
    const [info, setInfo] = useLocalStorage('info', {})
    const [open, setOpen] = useState(false)
    const [exist, setExist] = useState(true)
    const [ready, setReady] = useState(false)
    const [snackbar, setSnackbar] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const snackbarClick = () => {
        setSnackbar(true)
    }
    const snackbarClose = (event: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }

        setSnackbar(false)
    }
    const getGithubInfo = async (username: string) => {
        const url = `https://api.github.com/users/${username}`

        try {
            const response = await axios.get(url)

            if (response.status === 200) {
                setInfo({
                    avatar_url: response.data.avatar_url,
                    blog: response.data.blog,
                    events_url: response.data.events_url,
                    followers: response.data.followers,
                    followers_url: response.data.followers_url,
                    following: response.data.following,
                    following_url: response.data.following_url,
                    html_url: response.data.html_url,
                    location: response.data.location,
                    login: response.data.login,
                    organizations_url: response.data.organizations_url,
                    public_gists: response.data.public_gists,
                    public_repos: response.data.public_repos,
                    received_events_url: response.data.received_events_url,
                    repos_url: response.data.repos_url,
                    starred_url: response.data.starred_url,
                    subscriptions_url: response.data.subscriptions_url,
                    url: response.data.url
                })
                setExist(false)
                setReady(true)
            }
        } catch (error) {
            setReady(false)
            console.error(error)
        }
    }

    if (exist) getGithubInfo(name)

    return (
        <>
            {ready === false ? (
                <Snackbar
                    open={snackbar}
                    autoHideDuration={5000}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    onClose={snackbarClose}
                    message="超过请求上限 or 用户名不存在 😢"
                />
            ) : (
                <></>
            )}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField
                        id="standard-basic"
                        label="用户名"
                        variant="standard"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Button
                        size="large"
                        sx={{
                            position: 'absolute',
                            right: '1.2rem',
                            fontSize: '1.75rem',
                            bottom: '1rem'
                        }}
                        onClick={() => {
                            setExist(true)
                            if (ready === false) snackbarClick()
                            handleClose()
                        }}
                    >
                        确定 ✅
                    </Button>
                </Box>
            </Modal>
            <InfoScreen>
                <Image src={info.avatar_url} alt="avatar"></Image>
                <AlignRight>
                    <UserName>{info.login}</UserName>
                    {info.location && (
                        <Location>
                            <FmdGoodOutlinedIcon
                                sx={{
                                    fontSize: '21px',
                                    marginRight: '6px'
                                }}
                            />
                            {info.location}
                        </Location>
                    )}
                    {info.blog && (
                        <Blog>
                            <BookOutlinedIcon
                                sx={{
                                    fontSize: '21px',
                                    marginRight: '6px'
                                }}
                            />
                            {info.blog}
                        </Blog>
                    )}
                </AlignRight>
                <Weather />
            </InfoScreen>
            <RFooter>
                <ChangeButton onClick={handleOpen}>更换用户</ChangeButton>
            </RFooter>
        </>
    )
}
