import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useEffect } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { getProjects } from '../../api/practicalproject'
import { ProjectList } from './styles'

interface ProjectProps {
  name: string
  description: string
  link: string
  image: string
}

export function Projects() {
  const [projects, setProjects] = useLocalStorage<Array<ProjectProps>>('projects', [] as Array<ProjectProps>)

  useEffect(() => {
    const getData = async () => {
      const res = await getProjects()

      if (res.status === 200)
        setProjects(res.data)
    }

    getData()
  }, [])

  return (
    <ProjectList>
      {projects.map((project: ProjectProps, index: number) => {
        return (
          <Card
              key={index}
              color="#fffffe"
              variant="outlined"
              sx={{
                'maxWidth': '45%',
                'minHeight': '500px',
                'margin': '1rem 0',
                '&:first-child': {
                  marginTop: 0,
                },
                '&:last-child': {
                  marginBottom: 0,
                },
              }}
            >
            <CardContent sx={{ fontFamily: '\'Gill Sans\', \'Noto Serif SC\'' }}>
              <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 500,
                    letterSpacing: '0.1rem',
                    color: 'rgba(80, 80, 80)',
                  }}
                  gutterBottom
                >
                {project.name}
              </Typography>
              <Typography
                  sx={{
                    fontSize: '1.1rem',
                    fontFamily: '\'Gill Sans\', \'Noto Serif SC\'',
                    letterSpacing: '0.3rem',
                    color: 'rgba(80, 80, 80, 0.8)',
                  }}
                >
                {project.description}
              </Typography>
            </CardContent>
            <CardMedia
                component="img"
                sx={{ width: '100%' }}
                height="300"
                image={project.image}
                alt={project.name}
              />
          </Card>
        )
      })}
    </ProjectList>
  )
}
