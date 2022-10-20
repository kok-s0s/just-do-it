import TodoLists from "../../components/TodoLists";
import Target from "../../components/Target";
import Info from "../../components/Info";
import { Container, LocalDBPanel } from "./styles";

export default function Punch() {
  return (
    <Container>
      <LocalDBPanel>
        <TodoLists />
        <Target />
      </LocalDBPanel>
      <Info />
    </Container>
  );
}
