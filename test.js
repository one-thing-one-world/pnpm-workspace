const fn = (a) => (b) => (c) => a * b * c
console.log(fn(1)(2)(3))

const maxFn = (a) => (b) => a > b ? a : b
const multipleThree = (a) => (b) => (c) => a * b * c