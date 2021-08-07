function avg(data) {
  const count = data.size
  let totalPrice = 0
  data.products.forEach(product => {
    totalPrice += product.price
  })
  return totalPrice / count
}

console.log(avg({
  size: 3,
  products: [
    {
      name: "Product 1",
      price: 100
    },
    {
      name: "Product 2",
      price: 700
    },
    {
      name: "Product 3",
      price: 250
    }
  ]
}))