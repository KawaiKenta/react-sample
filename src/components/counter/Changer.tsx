const Changer = ({ step, onUpdate }: { step: number, onUpdate: (step: number) => void}) => {
    const handleClick = () => onUpdate(step);
    return(
        <>
            <button onClick={handleClick}>{step}</button>
        </>
    );
}

export default Changer;