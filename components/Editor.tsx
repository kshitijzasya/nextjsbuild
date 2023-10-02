'use client';
import Btn from "./btn";
import { useState } from "react";

import {
    EditorInterface
} from "@/models/tasks"

const Editor: React.FC<EditorInterface> = ({
    updateTop,
    updatelist
}) => {

    const [top, changeTop] = useState<string>("")
    const [list, changeList] = useState<string>("")

    function addTop() {
        updateTop(top)
        changeTop("")
    }

    function addList() {
        updatelist(list)
        changeList("")
    }

    return (
        <div className="flex justify-center flex-col px-4">
            <div className="w-full text-center">
                <h3 className="bg-slate-300 rounded"> <b>Editor</b></h3>
            </div>
            <div className="flex flex-col justify-center">
                <h4 className="text-left text-white">Top tasks</h4>
                <div className="flex justify-between">
                    <input value={top} type="text" className="rounded" onChange={e => changeTop(e.target.value)}></input>
                    <Btn 
                        text="Add"
                        callback={addTop}
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center">
                <h4 className="text-left text-white">Tasks</h4>
                <div className="flex justify-between">
                    <input value={list} type="text" className="rounded" onChange={e => changeList(e.target.value)}></input>
                    <Btn 
                        text="Add"
                        callback={addList}
                    />
                </div>
            </div>
        </div>
    )
}

export default Editor;