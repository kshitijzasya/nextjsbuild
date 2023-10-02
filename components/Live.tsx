import {
    useState,
    useEffect
} from "react";
import {
    LiveInterface
} from "@/models/tasks";

interface dataInt {
    date: number,
    day: string,
    month: number,
    year: number
}

const days: string[] = ["M","T","W","T","F","S","S"];
let dataSample = {
    date: 0,
    day: '',
    month: 0,
    year: 0
}

const Live: React.FC<LiveInterface> = ({
    top,
    list
}) => {
    const [achievment, setAchievment] = useState<string>("");
    const [rate, setRate] = useState<number>(0);
    const [data, setData] = useState<dataInt>(dataSample)

    useEffect(() => {
        let date = new Date;
        setData({
            date: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear(),
            day: (new Date).toLocaleString('en-us', {weekday: 'long'}).split('')[0]
        });
    }, [])

    return (
            <div className="flex justify-center flex-col px-4 rounded">
                <div className="w-full  text-center">
                    <h3 className="bg-slate-300 rounded"> <b>Live Show</b></h3>
                </div>
                <div className="flex flex-row justify-between text-white">
                    <span>Date: {data.date} / {data.month} / {data.year}</span>
                    <div className="flex justify-evenly"> 
                        {
                            days.map((d, k) => {
                            return (
                                <span className={d === data.day ?   'bg-stone-400 rounded-full px-1' : 'px-1'} key={k}>{d} </span>
                            )
                        })} 
                       
                    </div>
                </div>
                <div className="flex flex-col">
                    <h4 className="text-left"> <b>Top 3 tasks</b></h4>
                    <ul>
                        {
                            top.map((t, k) => (<li className="bg-gray-300 p-1" key={k}>({k}):{t}</li>))
                        }
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h4 className="text-left"> <b>To Do</b></h4>
                    <ul>
                        {
                            list.map((t, k) => (<li className="bg-gray-300 p-1" key={k}>({k}):{t}</li>))
                        }
                    </ul>
                </div>

                <div className="grid grid-cols-1 bg-stone-300 divide-y mt-2">
                    <div className="flex flex-row p-2 justify-between">
                        <span>Achievement of The day: </span>
                        <textarea 
                            className="rounded"
                            rows={2}
                            value={achievment}
                            onChange={e => setAchievment(e.target.value)}
                        >
                            </textarea>
                    </div>
                    <div className="flex flex-row p-2 justify-between">
                    <span>Rate your day: </span>
                        <input 
                            type="number"
                            min="1"
                            max="10"
                            value={rate}
                            onChange={e =>  setRate(parseInt(e.target.value))}
                        />
                    </div>
                </div>
            </div>
    )
}

export default Live;