import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import ArticleIcon from '@mui/icons-material/Article'
import Tooltip from '@mui/material/Tooltip'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useEffect } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { getArticles, getWebSites } from '../../api/websites'
import Basic from '../../layouts/Basic'
import {
  Articles,
  Icon,
  LinkWeb,
  MessageBox,
  TextH,
  WebSites,
} from './styles'

interface WebSite {
  name: string
  description: string
  link: string
  image: string
}

interface Article {
  title: string
  link: string
}

export function Technology() {
  const [webSites, setWebSites] = useLocalStorage('websites', [])
  const [articles, setArticles] = useLocalStorage('articles', [])

  useEffect(() => {
    const getData = async () => {
      const resWebSites = await getWebSites()

      if (resWebSites.status === 200)
        setWebSites(resWebSites.data)

      const resArticles = await getArticles()

      if (resArticles.status === 200)
        setArticles(resArticles.data)
    }

    getData()
  }, [])

  return (
    <Basic href="/explore">
      <TextH>
        <p>技术论坛</p>
        <ArchiveOutlinedIcon
          sx={{ fontSize: 30, marginLeft: '0.5rem' }}
        />
      </TextH>

      <WebSites>
        {webSites.map((webSite: WebSite, index: number) => {
          return (
            <Tooltip
              title={webSite.description}
              placement="top"
              key={index}
            >
              <LinkWeb href={webSite.link} target="_blank">
                <Icon src={webSite.image} alt={webSite.name} />
              </LinkWeb>
            </Tooltip>
          )
        })}
      </WebSites>

      <TextH>
        <p>待读文章</p>
        <ArchiveOutlinedIcon
          sx={{ fontSize: 30, marginLeft: '0.5rem' }}
        />
      </TextH>

      <MessageBox>
        <Articles>
          <List sx={{ flex: 1 }}>
            {articles.map((article: Article, index: number) => {
              return (
                <LinkWeb key={index} href={article.link} target="_blank">
                  <ListItem
                    sx={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '10px',
                      marginBottom: '0.7rem',
                    }}
                    disablePadding
                  >
                    <ListItemButton
                      sx={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '10px',
                      }}
                    >
                      <ArticleIcon
                        sx={{
                          marginRight: '1rem',
                        }}
                      />
                      <ListItemText
                        primary={article.title}
                      />
                    </ListItemButton>
                  </ListItem>
                </LinkWeb>
              )
            })}
          </List>
        </Articles>
      </MessageBox>
    </Basic>
  )
}
