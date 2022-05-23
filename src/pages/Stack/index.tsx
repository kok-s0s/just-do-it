import ControlPanel from '../../layouts/ControlPanel'
import { giveSkillsIcon } from '../../utils/SkillsIcon'
import { data } from './data'
import { Container, Eimg, Equipment, Etitle, Exhibit, IconImg, Icons, IconsCard, IconsList, IconsTitle, LeftContainer } from './styles'

export const Stack = () => {
  return (
    <ControlPanel href="/explore">
      <Container>
        <LeftContainer>
          <Icons>
            <IconsCard>
              <IconsTitle>Tools</IconsTitle>
              <IconsList>
                {data.tools.map((_tool) => {
                  return (
                    <IconImg src={giveSkillsIcon(_tool.name)} alt={_tool.name} key={_tool.name}/>
                  )
                })}
              </IconsList>
            </IconsCard>

            <IconsCard>
              <IconsTitle>Web Dev</IconsTitle>
              <IconsList>
                {data.web.map((_web) => {
                  return (
                    <IconImg src={giveSkillsIcon(_web.name)} alt={_web.name} key={_web.name}/>
                  )
                })}
              </IconsList>
            </IconsCard>

            <IconsCard>
              <IconsTitle>Using~</IconsTitle>
              <IconsList>
                {data.Languages.using.map((_language) => {
                  return (
                    <IconImg src={giveSkillsIcon(_language.name)} alt={_language.name} key={_language.name}/>
                  )
                })}
              </IconsList>
            </IconsCard>

            <IconsCard>
              <IconsTitle>Learned, but not commonly used!</IconsTitle>
              <IconsList>
                {data.Languages.learned.map((_language) => {
                  return (
                    <IconImg src={giveSkillsIcon(_language.name)} alt={_language.name} key={_language.name}/>
                  )
                })}
              </IconsList>
            </IconsCard>
          </Icons>

          <Equipment>
            {data.equipments.map((_equipment) => {
              return (
                <Exhibit key={_equipment.name}>
                  <Etitle>{_equipment.name}</Etitle>
                  <Eimg src={_equipment.link} alt={_equipment.name}/>
                </Exhibit>
              )
            })}
          </Equipment>
        </LeftContainer>
      </Container>
    </ControlPanel>
  )
}
