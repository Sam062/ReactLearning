import React, { useState } from 'react'

export const TodoComponent = () => {

    const todo = [
        {
            id: 1,
            task: "TASK-1",
            task_time: "Morning-8AM"
        },
        {
            id: 2,
            task: "TASK-2",
            task_time: "Morning-10AM"
        },
        {
            id: 3,
            task: "TASK-3",
            task_time: "After-Noon-1PM"
        },
        {
            id: 4,
            task: "TASK-4",
            task_time: "AfterNoon-4PM"
        }
    ]

    const [todoList, setTodoList] = useState(todo);


    const clearTasks = () => {
        setTodoList([]);
    }

    const removeTask = (id) => {
        const temp = todoList.filter(x => id !== x.id);
        setTodoList(temp);
    }

    return (
        <div>
            {
                todoList && todoList.length > 0 ?
                    todoList.map(list => {
                        return (
                            <h3 key={list.id}>
                                {list.task} & {list.task_time}
                                <button onClick={() => removeTask(list.id)} style={{ marginLeft: "1rem", color: "red" }}>Remove</button>
                            </h3>
                        )
                    }) :
                    <h5>No tasks to display</h5>
            }
            <button onClick={() => clearTasks()} style={{ background: "red", color: "white" }}>Clear Tasks</button>
        </div>
    )
}
