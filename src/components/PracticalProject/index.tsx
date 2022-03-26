import { Link, Projects } from './styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined'
import { useLocalStorage } from '../../utils/useLocalStorage'
import { useEffect } from 'react'
import { getProjects } from '../../api/practicalproject'
import axios from 'axios'

interface Project {
    name: string
    description: string
    link: string
    image: string
}

interface RepoInfo {
    name: string
    forksCount: number
    stargazersCount: number
}

export function PracticalProject() {
    const [projects, setProjects] = useLocalStorage('projects', [])
    const [pjdetails, setPjdetails] = useLocalStorage('pjdetails', [])

    const getUserAndRepo = (project: Project) => {
        return project.link.slice('https://github.com/'.length).split('/')
    }

    const getForksCount = (name: string) => {
        let curForksCount

        pjdetails.forEach((item: RepoInfo) => {
            if (item.name === name) {
                curForksCount = item.forksCount
            }
        })

        return curForksCount
    }

    const getStargazersCount = (name: string) => {
        let curStargazersCount

        pjdetails.forEach((item: RepoInfo) => {
            if (item.name === name) {
                curStargazersCount = item.stargazersCount
            }
        })

        return curStargazersCount
    }

    useEffect(() => {
        const getRepoInfo = async (user: string, repo: string) => {
            const url = `https://api.github.com/users/${user}/repos`
            const res = await axios.get(url + '?per_page=100')

            if (res.status === 200) {
                const repoInfo = res.data.filter((item: any) => {
                    return item.name === repo
                })

                setPjdetails((currentArray: Array<RepoInfo>) => [
                    ...currentArray,
                    {
                        name: repoInfo[0].name,
                        forksCount: repoInfo[0].forks_count,
                        stargazersCount: repoInfo[0].stargazers_count
                    }
                ])
            }
        }

        const getData = async () => {
            const res = await getProjects()

            if (res.status === 200) {
                setProjects(res.data)

                setPjdetails([])

                res.data.forEach((project: Project) => {
                    const [user, repo] = getUserAndRepo(project)

                    getRepoInfo(user, repo).catch(function (error) {
                        console.log(error)
                    })
                })
            }
        }

        getData().catch(function (error) {
            console.log(error)
        })
    }, [])

    return (
        <>
            <Projects>
                {projects.map((project: Project, index: number) => {
                    return (
                        <Card
                            key={index}
                            color="#fffffe"
                            variant="outlined"
                            sx={{
                                maxWidth: '85%',
                                maxHeight: '700px',
                                minHeight: '600px',
                                margin: '1rem 0'
                            }}
                        >
                            <CardContent>
                                <Typography
                                    sx={{
                                        fontSize: 24,
                                        fontWeight: 500,
                                        lineHeight: '24px',
                                        marginBottom: '1.5rem'
                                    }}
                                    color="#272343"
                                    gutterBottom
                                >
                                    {project.name}

                                    <Link href={project.link} target="_blank">
                                        <LocalFireDepartmentOutlinedIcon
                                            sx={{
                                                fontSize: 24,
                                                margin: '0 0.3rem',
                                                color: '#8bb7b9'
                                            }}
                                        />
                                        {getForksCount(project.name)}
                                        <StarRoundedIcon
                                            sx={{
                                                fontSize: 24,
                                                margin: '0 0.3rem',
                                                color: '#8bb7b9'
                                            }}
                                        />
                                        {getStargazersCount(project.name)}
                                    </Link>
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="#2d334a"
                                    sx={{
                                        fontSize: 16,
                                        letterSpacing: 1,
                                        lineHeight: 1.5
                                    }}
                                >
                                    {project.description}
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                height="500"
                                image={project.image}
                                alt={project.name}
                            />
                        </Card>
                    )
                })}
            </Projects>
        </>
    )
}
