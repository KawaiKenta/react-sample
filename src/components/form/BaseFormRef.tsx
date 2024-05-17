import { useRef } from "react"

const BaseFormRef = () => {
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const show = () => {
        console.log(`Email: ${email.current?.value} Password:${password.current?.value}`);
    }
    return (
        <>
            <form>
                <div>
                    <label htmlFor="email">メールアドレス</label>
                    <input type="email" name="email" ref={email} placeholder="xxx@gmail.com" />
                </div>
                <div>
                    <label htmlFor="password">パスワード</label>
                    <input type="password" name="password" ref={password} placeholder="password" />
                </div>
                <div>
                    <button type="button" onClick={show}>ログイン</button>
                    {/* こちらが普通 */}
                    {/* <button type="submit">ログイン</button> */}
                </div>
            </form>
        </>
    )
}

export default BaseFormRef