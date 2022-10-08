import { Link } from "react-router-dom";
import ControlPanel from "../../layouts/ControlPanel";
import { Box, Card, Container, Content, Idx, Next, Title } from "./styles";

const DataList = [
  {
    title: "book",
    href: "/book",
  },
  {
    title: "bookmark",
    href: "/bookmark",
  },
  {
    title: "leetcode",
    href: "/leetcode",
  },
  {
    title: "technology",
    href: "/technology",
  },
  {
    title: "culture",
    href: "/culture",
  },
  {
    title: "music",
    href: "/music",
  },
  {
    title: "stack",
    href: "/stack",
  },
  {
    title: "tool",
    href: "/tool",
  },
];

export default function Explore() {
  return (
    <ControlPanel href="/">
      <Container>
        {DataList.map((item, index) => {
          return (
            <Card key={index}>
              <Box>
                <Content>
                  <Idx>
                    <div>0</div>
                    <Link to={item.href} className="next">
                      <Next>Go</Next>
                    </Link>
                    <div>{index + 1}</div>
                    <div>0</div>
                  </Idx>
                  <Title className="title">{item.title}</Title>
                </Content>
              </Box>
            </Card>
          );
        })}
      </Container>
    </ControlPanel>
  );
}
