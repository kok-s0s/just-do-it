import { useCurTime } from "../../hooks/useCurTime";
import { Item, TimeCard } from "./styles";

export default function Time() {
  const [hour, minute, seconds] = useCurTime();

  return (
    <TimeCard>
      <Item>{hour}</Item>
      <div>·</div>
      <Item>{minute}</Item>
      <div>·</div>
      <Item>{seconds}</Item>
    </TimeCard>
  );
}
