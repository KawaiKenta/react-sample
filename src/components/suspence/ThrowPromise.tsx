// 変数は外側でない再評価時にリセットされてしまう
let flag = false;

const ThrowPromise = () => {
    if (flag) {
        return <p>ロード完了</p>;
    }

    throw new Promise((resolve, reject) => {
        setTimeout(() => {
            flag = true;
            resolve("Success!");
        }, 3000);
    });
}

export default ThrowPromise;