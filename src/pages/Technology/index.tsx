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
  Icon,
  LinkWeb,
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

      <List sx={{ margin: '1rem', overflowY: 'scroll', scrollbarWidth: 'none' }}>
        {articles.map((article: Article, index: number) => {
          return (
            <LinkWeb key={index} href={article.link} target="_blank">
              <ListItem
                    sx={{
                      backgroundColor: '#FFFFFF',
                    }}
                    disablePadding
                  >
                <ListItemButton
                      sx={{
                        backgroundColor: '#FFFFFF',
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

    </Basic>
  )
}
