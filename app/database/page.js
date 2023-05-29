// export const products = [
//   {
//     id: 1,
//     type: 'fruit',
//     name: 'orange',
//     taste: 'sweet',
//   },
//   {
//     id: 2,
//     type: 'vegetables',
//     name: 'carrot',
//     taste: 'crunchy',
//   },
//   { id: 3, type: 'meat', name: 'chicken', taste: 'soft' },
//   {
//     id: 4,
//     type: 'livestock',
//     name: 'Marilyn',
//     taste: 'not meant to eat',
//   },
// ];

// export function getProductById(id) {
//   return products.find((product) => product.id === id);
// }

export const vegetables = [
  {
    id: 1,
    type: 'vegetable',
    name: 'potato',
    price: 1.29,
  },
  {
    id: 2,
    type: 'vegetable',
    name: 'carrot',
    price: 1.59,
  },
  {
    id: 3,
    type: 'vegetable',
    name: 'tomato',
    price: 2.29,
  },
  {
    id: 4,
    type: 'vegetable',
    name: 'sweet potato',
    price: 2.79,
  },
  {
    id: 5,
    type: 'vegetable',
    name: 'zucchini',
    price: 1.39,
  },
  {
    id: 6,
    type: 'vegetable',
    name: 'cucumber',
    price: 0.99,
  },
];

export function getVegetableById(id) {
  return vegetables.find((vegetable) => vegetable.id === id);
}

export const fruits = [
  { id: 7, type: 'fruit', name: 'apple', price: 1.19 },
  { id: 8, type: 'fruit', name: 'pear', price: 2.19 },
  { id: 9, type: 'fruit', name: 'apricot', price: 5.29 },
  { id: 10, type: 'fruit', name: 'plum', price: 3.69 },
  { id: 11, type: 'fruit', name: 'cherry', price: 4.89 },
  { id: 7, type: 'fruit', name: 'strawberry', price: 7.49 },
];
export function getFruitById(id) {
  return fruits.find((fruit) => fruit.id === id);
}
