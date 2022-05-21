import { useCurTime } from '../../hooks/useCurTime'
import { Item, TimeCard } from './styles'

export function Time() {
  const [hour, minute, seconds] = useCurTime()

  return (
    <TimeCard>
      <Item>{hour}</Item><div>·</div><Item>{minute}</Item><div>·</div><Item>{seconds}</Item>
    </TimeCard>
  )
}
