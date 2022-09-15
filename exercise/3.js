// 情况1：p.then(onfulfilled,onrejected)，已知实例 p 的状态和值，也不会立即将 onfulfilled|onrejected 执行，而是创建异步微任务
// p.then(onfulfilled,onrejected) 先进入 WebAPI 中等待，发现实例状态变更，则将 onfulfilled|onrejected 挪到 EventQueue 中排队等待
const p = new Promise(resolve => {
    resolve(10)
})

console.log(p)

p.then(value => {
    console.log('成功：', value)
})

console.log(1)
