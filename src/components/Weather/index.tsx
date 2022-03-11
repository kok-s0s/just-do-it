import { useLocalStorage } from '../../utils/useLocalStorage'
import { useState } from 'react'
import { WeatherCard, Header, Desc, Icon, Location } from './styles'
import { giveWeatherIcon } from '../../utils/WeatherImg'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
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

export function Weather() {
    const [location, setLocation] = useLocalStorage('location', '广州')
    const [weather, setWeather] = useLocalStorage('weather', {})
    const [exist, setExist] = useState(true)
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const getWeatherInfo = async (location: string) => {
        const url = `https://api.seniverse.com/v3/weather/now.json?key=SkyWErkPwye-1C6wv&location=${location}&language=zh-Hans&unit=c`

        try {
            const response = await axios.get(url)

            if (response.status === 200) {
                setWeather({
                    location: response.data.results['0'].location,
                    now: response.data.results['0'].now
                })

                setExist(false)
            }
        } catch (error) {
            console.error(error)
        }
    }

    if (exist) getWeatherInfo(location)

    console.log(weather)

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField
                        id="standard-basic"
                        label="输入中文城市"
                        variant="standard"
                        required
                        value={location}
                        onChange={e => setLocation(e.target.value)}
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
                            handleClose()
                        }}
                    >
                        确定 ✅
                    </Button>
                </Box>
            </Modal>
            <WeatherCard>
                <Header>
                    <Desc>
                        <Location onClick={handleOpen}>
                            {weather.location.name}
                        </Location>{' '}
                        {weather.now.text} {weather.now.temperature}°C
                    </Desc>
                    <Icon
                        src={giveWeatherIcon(parseInt(weather.now.code))}
                        alt="icon"
                    />
                </Header>
            </WeatherCard>
        </>
    )
}