const fn = async () => {
    console.log(1)
    return 10
}

(async function () {
    const result = await fn()
    console.log(2, result)
})()

/*
* 遇到 await
*   会立即执行其后面代码，看返回的 Promise 实例（如果不是 Promise 实例也会转变为 Promise 实例）是否成功
*   会把当前上下文中，await 下面的代码当作异步微任务处理
*       进入到 WebAPI 中监听：只有后面实例的状态成功，才可以执行
*       可执行则进入到 EventQueue 中排队等待执行
* */
