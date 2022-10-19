import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { db } from "../../db/db";
import type { TodoItem } from "../../db/TodoItem";
import { Month, appendZero, ordinalNumber } from "../../utils/DateHandle";
import { Card, Note, Time } from "./styles";

interface Props {
  item: TodoItem;
}

export default function AbandonedItem({ item }: Props) {
  const date = item.time
    ? `Added on ${Month.get(item.time.getMonth())} ${ordinalNumber(
        item.time.getDate()
      )} at ${item.time.getHours()}:${appendZero(item.time.getMinutes())}`
    : "";

  return (
    <Card>
      <DeleteOutlineRoundedIcon
        fontSize="small"
        sx={{
          color: "#595F69",
          position: "absolute",
          top: "0.6rem",
          right: "0.6rem",
          cursor: "pointer",
        }}
        onClick={() => {
          if (item.id) db.todoItems.delete(item.id);
        }}
      />
      <Note>{item.note}</Note>
      <Time>{date}</Time>
    </Card>
  );
}
