import {
    Icon,
    LinkWeb,
    WebSites,
    TextH,
    Articles,
    IconForArtice,
    MessageBox,
    PunchButton
} from './styles'
import Fish from '../../../assets/images/fish.jpeg'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import ArticleIcon from '@mui/icons-material/Article'
import Tooltip from '@mui/material/Tooltip'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useEffect } from 'react'
import { getWebSites, getArticles } from '../../api/websites'
import { Link } from 'react-router-dom'

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

            if (resWebSites.status === 200) {
                setWebSites(resWebSites.data)
            }

            const resArticles = await getArticles()

            if (resArticles.status === 200) {
                setArticles(resArticles.data)
            }
        }

        getData().catch(function (error) {
            console.log(error)
        })
    }, [])

    return (
        <>
            <TextH>
                <p>发布前沿技术的信息网站汇总</p>
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
                <p>文章推荐</p>
                <ArchiveOutlinedIcon
                    sx={{ fontSize: 30, marginLeft: '0.5rem' }}
                />
            </TextH>

            <MessageBox>
                <Articles>
                    <List sx={{ flex: 1 }}>
                        {articles.map((article: Article, index: number) => {
                            return (
                                <LinkWeb href={article.link} target="_blank">
                                    <ListItem
                                        sx={{
                                            backgroundColor: '#FFFFFF',
                                            borderRadius: '10px',
                                            marginBottom: '0.7rem'
                                        }}
                                        disablePadding
                                    >
                                        <ListItemButton
                                            sx={{
                                                backgroundColor: '#FFFFFF',
                                                borderRadius: '10px'
                                            }}
                                        >
                                            <ArticleIcon
                                                sx={{
                                                    marginRight: '1rem'
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

                <PunchButton>
                    <IconForArtice src={Fish} alt="fish" />
                    <Link to="/punch">
                        <Button sx={{ fontSize: 30, margin: '1rem 0 0 1rem' }}>
                            阅读打卡
                        </Button>
                    </Link>
                </PunchButton>
            </MessageBox>
        </>
    )
}
