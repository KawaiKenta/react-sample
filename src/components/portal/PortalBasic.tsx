import { useState } from "react"
import { createPortal } from "react-dom";

const PortalBasic = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(s => !s);
    return (
        <form>
        <button type="button" onClick={handleClick}>開く</button>
        { show && createPortal(
            <div>
                <p>Portalで生成されたダイアログ</p>
                <button type="button" onClick={handleClick}>閉じる</button>
            </div>,
            document.getElementById('dialog')!
        )}
        </form>
    )
}

export default PortalBasic