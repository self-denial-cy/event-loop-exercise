// 情况2：如果还不知道实例 p 的状态，则先把 onfulfilled|onrejected 存储起来（理解为：进入 WebAPI 中去监听），只有实例的状态变更后，才可以挪到 EventQueue 中去等待执行
const p = new Promise(resolve => {
    setTimeout(() => {
        resolve(10)
        console.log(p, 2)
    }, 1000)
})

console.log(p)

p.then(value => {
    console.log('成功：', value)
})

console.log(1)
