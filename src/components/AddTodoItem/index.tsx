import type { Dispatch, SetStateAction } from "react";
import { useEffect, useRef, useState } from "react";
import { db } from "../../db/db";
import type { TodoList } from "../../db/TodoList";
import { Container, Cancel, Confirm, Options, Input } from "./styles";

interface Props {
  todoList: TodoList;
  hidden: boolean;
  setHidden: Dispatch<SetStateAction<boolean>>;
}

export default function AddTodoItem({ todoList, hidden, setHidden }: Props) {
  const [item, setItem] = useState({
    todoListId: typeof todoList.id === "number" ? todoList.id : 0,
    note: "",
    time: new Date(),
  });
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setItem((item) => ({
      ...item,
      note: event.target.value,
    }));
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "85px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [item]);

  return (
    <Container>
      <Input
        placeholder="What do you want to do?"
        value={item.note}
        ref={textareaRef}
        onChange={textAreaChange}
      />
      <Options>
        <Confirm
          className={item.note === "" ? "disabled" : ""}
          disabled={item.note === ""}
          onClick={() => {
            if (item.note !== "") {
              const curDate = new Date();
              item.time = curDate;
              db.todoItems.add(item);
              setItem({
                todoListId: typeof todoList.id === "number" ? todoList.id : 0,
                note: "",
                time: new Date(),
              });
              setHidden(!hidden);
            }
          }}
        >
          确定
        </Confirm>
        <Cancel onClick={() => setHidden(!hidden)}>取消</Cancel>
      </Options>
    </Container>
  );
}
