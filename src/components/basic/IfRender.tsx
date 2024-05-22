const IfRender = () => {
    const contact = {
        first: "John",
        last: "Doe",
        notes: "hello world",
    } satisfies {
        first: undefined | string,
        last: string,
        notes: undefined | string,
    };
    
    const isFormValid = false;
    return (
        <>
            {/* 条件付きレンダリング */}
            {contact.first || contact.last ? (
                <>
                {contact.first} {contact.last}
                </>
            ) : (
                <i>No Name</i>
            )}
            {contact.notes ? <p>{contact.notes}</p> : null}
            {/* 左辺がtrueなら右も判定される(true), falseならパスする */}
            {isFormValid && <button type="submit">Submit</button>}
        </>
    )
}

export default IfRender;