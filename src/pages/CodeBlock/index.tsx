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
import Chip from '@mui/material/Chip'
import type { SyntheticEvent } from 'react'
import { useEffect, useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { getRandomQuestions, getTopicType } from '../../api/leetcode'
import Basic from '../../layouts/Basic'
import { Challenge, GoToCode, Questions, Random } from './styles'

interface Question {
  topic: string
  description: string
  link: string
  difficulty: string
}

interface TopicType {
  name: string
  questions: Array<Question>
}

export function CodeBlock() {
  const [topictype, setTopicType] = useLocalStorage('topictype', [])
  const [typeQ, setTypeQ] = useLocalStorage('typeQ', [])
  const [randomQ, setRandomQ] = useLocalStorage('randomQ', [])
  const [value, setValue] = useLocalStorage('curDifficultyTab', '0')
  const [visible, setVisible] = useState(false)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  useEffect(() => {
    const getData = async () => {
      getTopicType()
        .then((response) => {
          if (response.status === 200) {
            setTopicType(response.data)
            const TempData: Array<any> = []
            response.data.forEach((item: TopicType) => {
              TempData.push(item.questions)
            })
            setTypeQ(TempData)
          }
        })

      getRandomQuestions()
        .then((response) => {
          if (response.status === 200)
            setRandomQ(response.data)
        })
    }

    getData()
  }, [])

  return (
    <Basic href="/explore">
      <GoToCode
        href="https://leetcode-cn.com/problemset/all/"
        target="_blank"
      >
        每日一题 每天一个小尝试
      </GoToCode>

      <TabContext value={value}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <Tabs value={value} onChange={handleChange} centered>
            {topictype.map((item: TopicType, index: number) => (
              <Tab
                label={item.name}
                value={index.toString()}
                key={index}
              />
            ))}
          </Tabs>

          {typeQ.map((item: Array<Question>, index: number) => (
            <TabPanel key={index} value={index.toString()}>
              <Questions>
                {item.map((que: Question) => (
                  <Card
                    key={`${que.topic} + ${que.link}`}
                    sx={{
                      minWidth: 250,
                      marginLeft: '0.5rem',
                      marginRight: '0.5rem',
                    }}
                    color="#fffffe"
                    variant="outlined"
                  >
                    <CardContent>
                      <Typography
                        sx={{
                          fontSize: 18,
                          fontWeight: 500,
                        }}
                        color="#272343"
                        gutterBottom
                      >
                        {que.topic}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="#2d334a"
                        sx={{
                          fontSize: 16,
                          letterSpacing: 1,
                          lineHeight: 1.5,
                        }}
                      >
                        {que.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {que.difficulty === '简单'
                        ? (
                          <Chip
                            label="简单"
                            size="small"
                            sx={{
                              marginLeft: '0.3rem',
                            }}
                          />
                          )
                        : que.difficulty === '中等'
                          ? (
                            <Chip
                              label="中等"
                              size="small"
                              sx={{
                                marginLeft: '0.3rem',
                              }}
                            />
                            )
                          : (
                            <Chip
                              label="困难"
                              size="small"
                              sx={{
                                marginLeft: '0.3rem',
                              }}
                            />
                            )}
                      <a href={que.link} target="_blank" rel="noreferrer">
                        <Button
                          size="small"
                          sx={{
                            marginLeft: '4.5rem',
                          }}
                        >
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

      <Random>
        <Challenge onClick={() => setVisible(!visible)}>Try</Challenge>

        {visible
          ? (
            <Questions>
              {randomQ.map((que: Question) => (
                <Card
                  key={`${que.topic} + ${que.link} - ${que.difficulty}`}
                  sx={{
                    minWidth: 250,
                    marginLeft: '0.5rem',
                    marginRight: '0.5rem',
                    height: 120,
                  }}
                  color="#fffffe"
                  variant="outlined"
                >
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: 18,
                        fontWeight: 500,
                      }}
                      color="#272343"
                      gutterBottom
                    >
                      {que.topic}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {que.difficulty === '简单'
                      ? (
                        <Chip
                          label="简单"
                          size="small"
                          sx={{
                            marginLeft: '0.3rem',
                          }}
                        />
                        )
                      : que.difficulty === '中等'
                        ? (
                          <Chip
                            label="中等"
                            size="small"
                            sx={{
                              marginLeft: '0.3rem',
                            }}
                          />
                          )
                        : (
                          <Chip
                            label="困难"
                            size="small"
                            sx={{
                              marginLeft: '0.3rem',
                            }}
                          />
                          )}
                    <a href={que.link} target="_blank" rel="noreferrer">
                      <Button
                        size="small"
                        sx={{
                          marginLeft: '4.5rem',
                        }}
                      >
                        Code Now 🖥
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              ))}
            </Questions>
            )
          : null}
      </Random>
    </Basic>
  )
}
