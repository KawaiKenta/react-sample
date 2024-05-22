const IfRender = () => {
    const contact = {
        first: "John",
        last: "Doe",
        notes: "hello world",
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
            {isFormValid && <button type="submit">Submit</button>}
        </>
    )
}

export default IfRender;