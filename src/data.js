import faker from 'faker';

const products = [
  {
    title: 'Air pods',
    description: 'Ear buds for use with apple products',
    price: 150,
    qty: 10,
    image: "https://images.unsplash.com/photo-1592921870789-04563d55041c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    title: 'iPhone',
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    qty: Math.floor(Math.random() * 11),
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    title: 'iPad',
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    qty: Math.floor(Math.random() * 11),
    image: "https://images.unsplash.com/photo-1557825835-70d97c4aa567?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    title: 'Macbook Pro',
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    qty: Math.floor(Math.random() * 11),
    image: faker.image.business()
  },
  {
    title: 'Apple Pencil',
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    qty: Math.floor(Math.random() * 11),
    image: faker.image.business()
  },
]

export default products;