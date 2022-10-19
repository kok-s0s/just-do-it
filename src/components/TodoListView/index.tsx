import { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import type { TodoList } from "../../db/TodoList";
import TodoItemView from "../TodoItemView";
import AddTodoItem from "../AddTodoItem";
import { db } from "../../db/db";
import {
  AddItem,
  Combination,
  Count,
  Header,
  ListTitle,
  PlanItem,
} from "./styles";

interface Props {
  todoList: TodoList;
}

export default function TodoListView({ todoList }: Props) {
  const items = useLiveQuery(
    () => db.todoItems.where({ todoListId: todoList.id }).toArray(),
    [todoList.id]
  );

  const [hidden, setHidden] = useState(false);

  if (!items) return null;

  const curListLen = items.length;

  return (
    <PlanItem>
      <Header>
        <Combination>
          <Count>{curListLen}</Count>
          <ListTitle>{todoList.note}</ListTitle>
          <AddItem
            onClick={() => {
              setHidden(!hidden);
            }}
          >
            <svg
              className={hidden ? "rotate" : "rotateBack"}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path fill="currentColor" d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z" />
            </svg>
          </AddItem>
        </Combination>

        {hidden ? (
          <AddTodoItem
            todoList={todoList}
            hidden={hidden}
            setHidden={setHidden}
          />
        ) : (
          ""
        )}
      </Header>

      {items.map((item) => (
        <TodoItemView key={item.id} item={item} />
      ))}
    </PlanItem>
  );
}
