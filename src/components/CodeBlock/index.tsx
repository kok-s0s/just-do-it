import { Container, Questions, GoToCode } from './styles'
import TabContext from '@mui/lab/TabContext'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useLocalStorage } from '../../utils/useLocalStorage'
import { useState, useEffect, SyntheticEvent } from 'react'
import { getDifficulty, getTopicType } from '../../api/leetcode'

interface Question {
    topic: string
    description: string
    link: string
}

interface Difficulty {
    chineseCharacter: string
    questions: Array<Question>
}

export function CodeBlock() {
    const [difficulty, setDifficulty] = useLocalStorage('difficulty', [])
    const [degree, setDegree] = useLocalStorage('degree', [])
    const [topictype, setTopicType] = useState([])

    const [value, setValue] = useLocalStorage('curDifficultyTab', '0')

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    useEffect(() => {
        const getData = async () => {
            getDifficulty()
                .then(function (response) {
                    if (response.status === 200) {
                        setDifficulty(response.data)

                        const TempData: Array<any> = []
                        response.data.forEach((item: Difficulty) => {
                            TempData.push(item.questions)
                        })
                        setDegree(TempData)
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })

            getTopicType()
                .then(function (response) {
                    if (response.status === 200) {
                        setTopicType(response.data)
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
        }

        getData()
    }, [])

    return (
        <Container>
            <GoToCode
                href="https://leetcode-cn.com/problemset/all/"
                target="_blank"
            >
                每日一题 每天一个小尝试
            </GoToCode>

            <TabContext value={value}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        {difficulty.map((item: Difficulty, index: number) => (
                            <Tab
                                label={item.chineseCharacter}
                                value={index.toString()}
                                key={index}
                            />
                        ))}
                    </Tabs>

                    {degree.map((item: Array<Question>, index: number) => (
                        <TabPanel key={index} value={index.toString()}>
                            <Questions>
                                {item.map((que: Question) => (
                                    <Card
                                        key={`${que.topic} + ${que.link}`}
                                        sx={{
                                            minWidth: 240,
                                            marginLeft: '0.5rem',
                                            marginRight: '0.5rem'
                                        }}
                                    >
                                        <CardContent>
                                            <Typography
                                                sx={{ fontSize: 16 }}
                                                color="text.secondary"
                                                gutterBottom
                                            >
                                                {que.topic}
                                            </Typography>
                                            <Typography
                                                variant="h5"
                                                component="div"
                                            ></Typography>
                                            <Typography variant="body2">
                                                {que.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <a href={que.link} target="_blank">
                                                <Button size="small">
                                                    Code Now 🖥
                                                </Button>
                                            </a>
                                        </CardActions>
                                    </Card>
                                ))}
                            </Questions>
                        </TabPanel>
                    ))}
                </Box>
            </TabContext>
        </Container>
    )
}
