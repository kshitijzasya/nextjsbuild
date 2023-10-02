'use client'

import "./style.module.css";

interface BtnInterface {
    text: string;
    callback: Function
}

const Btn: React.FC<BtnInterface> = ({text , callback}) =>  {
    return (
        <>
        <button
            className="rounded bg-sky-700 border-2 py-1 px-2 text-white cursor-pointer w-32"
            onClick={ () => callback()}
        >
            {text}
        </button>
        </>
    )
}

export default Btn;