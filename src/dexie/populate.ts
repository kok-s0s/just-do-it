import { db } from './db'

export async function populate() {
    const todoListIds = [
        {
            title: '今日待办',
            subTitle: '快乐玩耍',
            time: new Date()
        },
        {
            title: '已完成',
            subTitle: '拒绝悲伤',
            time: new Date()
        },
        {
            title: '延误计划',
            subTitle: '熬夜',
            time: new Date()
        }
    ]

    for (let i = 0; i < todoListIds.length; ++i) {
        const todoListId = await db.todoLists.add({
            title: todoListIds[i].title
        })

        await db.todoItems.bulkAdd([
            {
                todoListId,
                title: todoListIds[i].subTitle,
                time: todoListIds[i].time
            }
        ])
    }
}
