"use client";
import Editor from "../../components/Editor";
import Live from "../../components/Live";
import {
    tasks
} from "@/models/tasks"

import { useState } from "react";

const Todo: React.FC = _ => {

    const [
        top_tasks,
        topTasksHandler
    ] = useState<string[]>([]);

    const [
        list_tasks,
        listTasksHandler
    ] = useState<string[]>([]);

    function updateTop(task: string) {
        topTasksHandler([...top_tasks, task])
    }

    function updatelist(task: string) {
        listTasksHandler([...list_tasks, task])
    }   

    return (
        <>
        <header className="bg-slate-300 px-4 py-4">
            <h2 className="text-center">
                <b>TODO APP</b>
            </h2>
        </header>
            
        <div className="grid grid-cols-2 pt-4 items-baseline">
            <Editor 
                updateTop={updateTop}
                updatelist={updatelist}
            />
            <Live 
                top={top_tasks}
                list={list_tasks}
            />
        </div>
        </>
    )
}

export default Todo;