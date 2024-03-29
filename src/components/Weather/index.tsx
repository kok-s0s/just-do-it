import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { giveWeatherIcon } from "../../utils/WeatherImg";
import { Icon, Location, RightContainer, WeatherCard } from "./styles";

interface WeatherProps {
  name: string;
  code: string;
  temperature: string;
  text: string;
}

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: 0,
  padding: 0,
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "1rem",
  borderStyle: "none",
  p: 4,
};

export default function Weather() {
  const [location, setLocation] = useLocalStorage("location", "广州");
  const [weather, setWeather] = useLocalStorage<WeatherProps>(
    "weather",
    {} as WeatherProps
  );
  const [exist, setExist] = useState(true);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const getWeatherInfo = async (location: string) => {
      const url = `https://api.seniverse.com/v3/weather/now.json?key=SkyWErkPwye-1C6wv&location=${location}&language=zh-Hans&unit=c`;

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          setWeather({
            name: response.data.results["0"].location.name,
            code: response.data.results["0"].now.code,
            temperature: response.data.results["0"].now.temperature,
            text: response.data.results["0"].now.text,
          });

          setExist(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (exist) getWeatherInfo(location);
  });

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
            label="输入中文城市"
            variant="standard"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <Button
            size="large"
            sx={{
              fontSize: "1.5rem",
              marginLeft: "3rem",
            }}
            onClick={() => {
              setExist(true);
              handleClose();
            }}
          >
            ✅
          </Button>

          <Button
            sx={{
              fontSize: "1.3rem",
            }}
            onClick={() => {
              handleClose();
            }}
          >
            ❌
          </Button>
        </Box>
      </Modal>
      <WeatherCard>
        <Location onClick={handleOpen}>{weather.name}</Location>
        <div>{weather.text}</div>
        <RightContainer>
          <Icon src={giveWeatherIcon(parseInt(weather.code))} alt="icon" />
        </RightContainer>
        <div>{weather.temperature}°C</div>
      </WeatherCard>
    </>
  );
}
