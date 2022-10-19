import { db } from "./db";

export async function populate() {
  const todoListIds = [
    {
      note: "今日待办",
      subTitle: "快乐玩耍",
      time: new Date(),
    },
    {
      note: "已完成",
      subTitle: "拒绝悲伤",
      time: new Date(),
    },
    {
      note: "延误计划",
      subTitle: "熬夜",
      time: new Date(),
    },
    {
      note: "永久废弃",
      subTitle: "已废弃",
      time: new Date(),
    },
  ];

  for (let i = 0; i < todoListIds.length; ++i) {
    const todoListId = await db.todoLists.add({
      note: todoListIds[i].note,
    });

    await db.todoItems.bulkAdd([
      {
        todoListId,
        note: todoListIds[i].subTitle,
        time: todoListIds[i].time,
      },
    ]);
  }
}
