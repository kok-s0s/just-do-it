import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db/db";
import type { TodoItem } from "../../db/TodoItem";
import { Month, appendZero, ordinalNumber } from "../../utils/DateHandle";
import {
  ShowItem,
  More,
  Note,
  Time,
  Input,
  Button,
  ButtonContainer,
} from "./styles";

interface Props {
  item: TodoItem;
}

export default function TodoItemView({ item }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [hidden, setHidden] = useState(false);
  const [note, setNote] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const date = item.time
    ? `Added on ${Month.get(item.time.getMonth())} ${ordinalNumber(
        item.time.getDate()
      )} at ${item.time.getHours()}:${appendZero(item.time.getMinutes())}`
    : "";
  const lists = useLiveQuery(() => db.todoLists.toArray());
  const mItem = (bColor1: string, bColor2: string, color: string) => {
    return {
      backgroundColor: bColor1,
      color: color,
      ":hover": {
        backgroundColor: bColor2,
        color,
      },
    };
  };
  const copy2OtherPlace = (curItem: TodoItem, to: number) => {
    const copyItem: TodoItem = curItem;
    copyItem.todoListId = to;
    curItem.id && db.todoItems.delete(curItem.id);
    db.todoItems.add(copyItem);
  };
  const reviseNote = (curItem: TodoItem, note: string) => {
    const copyItem: TodoItem = curItem;
    copyItem.note = note;
    copyItem.time = new Date();
    curItem.id && db.todoItems.delete(curItem.id);
    db.todoItems.add(copyItem);
  };

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "60px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [note]);

  return (
    <ShowItem>
      {hidden ? (
        <>
          <Input
            placeholder="Revise a note"
            value={note}
            ref={textareaRef}
            onChange={textAreaChange}
          />
          <ButtonContainer>
            <Button
              onClick={() => {
                reviseNote(item, note);
                setNote("");
                setHidden(!hidden);
              }}
            >
              确定
            </Button>

            <Button
              onClick={() => {
                setNote("");
                setHidden(!hidden);
              }}
            >
              取消
            </Button>
          </ButtonContainer>
        </>
      ) : (
        <>
          <More
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="#595f69" stroke-width="2">
                <circle cx="4" cy="12" r="1" />
                <circle cx="12" cy="12" r="1" />
                <circle cx="20" cy="12" r="1" />
              </g>
            </svg>
          </More>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem
              onClick={() => {
                if (item.id && lists && lists[0].id)
                  copy2OtherPlace(item, lists[0].id);

                handleClose();
              }}
            >
              ToDo again
            </MenuItem>
            <MenuItem
              sx={mItem("#84D4C6", "#2b8777", "#000000")}
              onClick={() => {
                if (item.id && lists && lists[1].id)
                  copy2OtherPlace(item, lists[1].id);

                handleClose();
              }}
            >
              Finish note
            </MenuItem>
            <MenuItem
              sx={mItem("#009999", "#1d7373", "#000000")}
              onClick={() => {
                setNote(item.note);
                setHidden(!hidden);
                handleClose();
              }}
            >
              Revise note
            </MenuItem>
            <MenuItem
              sx={mItem("#416862", "#1f413c", "#efeeef")}
              onClick={() => {
                if (item.id && lists && lists[2].id)
                  copy2OtherPlace(item, lists[2].id);

                handleClose();
              }}
            >
              Delayed plan
            </MenuItem>
            <MenuItem
              sx={mItem("#7d8889", "#293a3b", "#efeeef")}
              onClick={() => {
                if (item.id && lists && lists[3].id)
                  copy2OtherPlace(item, lists[3].id);

                handleClose();
              }}
            >
              Abandoned
            </MenuItem>
            <MenuItem
              sx={mItem("#c54a4b", "#b20e0f", "#efeeef")}
              onClick={() => {
                if (item.id) db.todoItems.delete(item.id);
                handleClose();
              }}
            >
              Delete note
            </MenuItem>
          </Menu>

          <Note>{item.note}</Note>
          <Time>{date}</Time>
        </>
      )}
    </ShowItem>
  );
}
