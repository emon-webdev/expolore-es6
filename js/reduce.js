const numbers = [4, 14, 5, 6, 23, 46]

// const total = numbers.reduce((previous, current => previous + current), 0)
// console.log(total);



const sum = numbers.reduce((p, c) => p + c, 0)
console.log(sum);


const products = [
    { id: 1, name: "lenovo", price: 6500 },
    { id: 2, name: "macbook", price: 16500 },
    { id: 3, name: "iphone", price: 5500 }
]

const names= products.map(product => product.name)
console.log(names);