import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import type { SyntheticEvent } from 'react'
import { Link } from 'react-router-dom'
import { Technology } from '../../components/Technology'
import { Books } from '../../components/Books'
import { PracticalProject } from '../../components/PracticalProject'
import { CodeBlock } from '../../components/CodeBlock'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { BText, Back, Container } from './styles'

export function Explore() {
  const [value, setValue] = useLocalStorage('curTab', '1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Container>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="技术前沿" value="1" />
              <Tab label="书籍推荐" value="2" />
              <Tab label="项目推荐" value="3" />
              <Tab label="码无止境" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Technology />
          </TabPanel>
          <TabPanel value="2">
            <Books />
          </TabPanel>
          <TabPanel value="3">
            <PracticalProject />
          </TabPanel>
          <TabPanel value="4">
            <CodeBlock />
          </TabPanel>
        </TabContext>
      </Box>
      <Link to="/">
        <Back>
          <BText>返回</BText>
        </Back>
      </Link>
    </Container>
  )
}
