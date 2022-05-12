import instance from '../axios.config'

export const getQuestions = () => {
  return instance.get('/leetcode/question')
}

export const getDifficulty = () => {
  return instance.get('/leetcode/difficulty')
}

export const getTopicType = () => {
  return instance.get('/leetcode/topictype')
}

export const getRandomQuestions = () => {
  return instance.get('/leetcode/randomquestions')
}
