Promise.resolve(1).then(value => {
    console.log(value)
    return 2
}).then(value => {
    console.log(value)
})

const p1 = Promise.resolve(1)
const p2 = p1.then(value => {
    console.log(value)
    return 2
})
p2.then(value => {
    console.log(value)
})
