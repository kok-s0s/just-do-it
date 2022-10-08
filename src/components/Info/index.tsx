import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Weather from "../Weather";
import Time from "../Time";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Abandoned from "../Abandoned";
import {
  InfoFooter,
  GithubInfo,
  GithubInfoText,
  Blog,
  ActionButton,
  Icon,
  GithubInfoImage,
  InfoScreen,
  Location,
  OtherInfo,
  UserName,
} from "./styles";

interface InfoProps {
  avatar_url: string;
  blog: string;
  events_url: string;
  followers: string;
  followers_url: string;
  following: string;
  following_url: string;
  html_url: string;
  location: string;
  login: string;
  organizations_url: string;
  public_gists: string;
  public_repos: string;
  received_events_url: string;
  repos_url: string;
  starred_url: string;
  subscriptions_url: string;
  url: string;
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

export default function Info() {
  const [name, setName] = useLocalStorage("name", "kok-s0s");
  const [info, setInfo] = useLocalStorage<InfoProps>("info", {} as InfoProps);
  const [exist, setExist] = useLocalStorage("exist", true);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const getGithubInfo = async (username: string) => {
      const url = `https://api.github.com/users/${username}`;

      try {
        const response = await axios.get(url);

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
            url: response.data.url,
          });
          setExist(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (exist || localStorage.getItem("info") === null) getGithubInfo(name);
  }, [exist]);

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
            label="username"
            variant="standard"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Button
            size="large"
            sx={{
              fontSize: "1.3rem",
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
      <InfoScreen>
        <GithubInfo>
          {info.avatar_url ? (
            <GithubInfoImage src={info.avatar_url} alt="avatar" />
          ) : (
            <Skeleton variant="circular" width={200} height={200} />
          )}

          {info.login ? (
            <GithubInfoText>
              <UserName>{info.login}</UserName>
              {info.location && (
                <Location>
                  <FmdGoodOutlinedIcon
                    sx={{
                      fontSize: "21px",
                      marginRight: "6px",
                    }}
                  />
                  {info.location}
                </Location>
              )}
              {info.blog && (
                <Blog>
                  <BookOutlinedIcon
                    sx={{
                      fontSize: "21px",
                      marginRight: "6px",
                    }}
                  />
                  {info.blog}
                </Blog>
              )}
            </GithubInfoText>
          ) : (
            <Skeleton variant="rectangular" width={200} height={220} />
          )}
        </GithubInfo>
        <InfoFooter>
          <OtherInfo>
            <Time />
            <Weather />
          </OtherInfo>
          <ActionButton>
            <Abandoned />
            <Icon
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={handleOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5Zm0 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3Z"
                />
                <path
                  fill="currentColor"
                  d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm-6 24.377V25a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3v1.377a11.899 11.899 0 0 1-12 0Zm13.992-1.451A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0Z"
                />
              </svg>
            </Icon>
            <Link to="/">
              <Icon whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="currentColor"
                    d="M3 18L19 2v10h42v12H19v10zm11 28.346C14 42.848 11.308 40 8 40H2v22h6c3.308 0 6-2.848 6-6.348c0-1.84-.748-3.492-1.936-4.652A6.487 6.487 0 0 0 14 46.346M8 58.617H5.125v-5.926H8c1.654 0 3 1.328 3 2.961s-1.346 2.965-3 2.965m0-9.308H5.125v-5.926H8c1.654 0 3 1.33 3 2.963s-1.346 2.963-3 2.963m32 9.308c-1.654 0-3-1.332-3-2.965v-9.307c0-1.633 1.346-2.963 3-2.963s3 1.33 3 2.963h3C46 42.848 43.308 40 40 40s-6 2.848-6 6.346v9.307c0 3.5 2.692 6.348 6 6.348s6-2.848 6-6.348h-3c0 1.632-1.346 2.964-3 2.964M62 40h-3.152l-3.886 9.5H53V40h-3v22h3v-9.5h1.962l3.886 9.5H62l-4.424-11zM27 62h3l-4-22h-5l-3 22h3l.826-6.059h4.072L27 62zm-4.713-9.441l1.284-9.416l1.712 9.416h-2.996z"
                  />
                </svg>
              </Icon>
            </Link>
          </ActionButton>
        </InfoFooter>
      </InfoScreen>
    </>
  );
}
