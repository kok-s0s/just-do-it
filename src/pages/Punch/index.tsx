import TodoLists from "../../components/TodoLists";
import Info from "../../components/Info";
import { Container } from "./styles";

export default function Punch() {
  return (
    <Container>
      <TodoLists />
      <Info />
    </Container>
  );
}
