setTimeout(() => {
    console.log(1)
}, 20)

console.log(2)

setTimeout(() => {
    console.log(3)
}, 10)

console.log(4)

for (let i = 0; i < 90000000; i++) {
    // do something 80ms 左右
}

console.log(5)

setTimeout(() => {
    console.log(6)
}, 8)

console.log(7)

setTimeout(() => {
    console.log(8)
}, 15)

console.log(9)

// 执行结果 2 4 5 7 9 3 1 6 8
