import { useState } from "react"
import Changer from "./Changer";

const Counter = ({init}: {init: number}) => {
    const [count, setCount] = useState(init);
    const update = (step: number) => setCount(c => c + step);
    const reset = () => setCount(0);
    return (
        <>
            Now Value: {count}
            <Changer step={1} onUpdate={update}></Changer>
            <Changer step={5} onUpdate={update}></Changer>
            <Changer step={-1} onUpdate={update}></Changer>
            <Changer step={0} onUpdate={reset}></Changer>
        </>
    )
}

export default Counter;