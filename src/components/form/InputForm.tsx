const InputForm = () => {
    return (
        <>
            <form>
                <input type="email" />
                <input type="search" />
                <input type="tel" />
                <input type="text" />
                <input type="number"></input>
                <input type="password"></input>
                <input type="range" min={0} max={100} defaultValue={50} step={1}/>
                <input type="time"></input>
                <input type="color"></input>
                <input type="month"></input>
                <input type="week" />
                <input type="date" />
                <input type="datetime-local" name="datetime"/>
            </form>
        </>
    )
}   

export default InputForm;