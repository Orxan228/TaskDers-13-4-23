const countries = ['Finland', 'Sweden', 'England', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 9 },
  { product: 'mango', price: 56 },
  { product: 'potato', price: '' },
  { product: 'avocado', price: 3 },
  { product: 'coffee', price: 1 },
  { product: 'tea', price: '' },
]
// Task 1
// countries.forEach(element => {
//     console.log(element);
// });

// Task 2
// function capitalizeWords(arr) {
//     return arr.map(word => {
//       const upper = word.toUpperCase();
//       return upper;
//     });
//   }
//   console.log(capitalizeWords(countries));

// const items =countries.map(item => item.length)
// console.log(items);

// Task 3
// arr1 = [];
// numbers.forEach(element =>{
//     arr1[element]= numbers[element]*numbers[element]
// })
// console.log(arr1);

// Task4
// const items =products.filter(item => item.price !="")
// console.log(items); 


// Task5
// const items =countries.filter(item => item.includes("land"))
// console.log(items); 


// Task 6
// const items =countries.filter(item => item.length == 6)
// console.log(items); 


// Task 7
// const items =countries.filter(item => item.length >= 6)
// console.log(items); 


// Task 8
// const items =countries.filter(item => item.startsWith("E"))
// console.log(items);

// Task 9
// const firstnum = 0;
// const sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   firstnum
// );
// console.log(sum);

// Task 10
// numbers.forEach

// Task 11
// const arr= [1, 2, 2]
// const sum = arr.reduce((accumulator, currentValue) =>
// {
//     return accumulator+currentValue*currentValue
// }
// );
// console.log(sum);

// Task 12
// const word =  "hey where have you been"
// function splitLenght(word) {
//     const arr = (word.split(` `).map(item=>(item+"-"+item.length)));
//     return arr;
// }
// console.log(splitLenght(word));

// Task 13
// const nums =  [1,2,3,4,5]
// function invert(nums) {
//     const arr = (nums.map(item=>(item=item*-1)));
//     return arr;
// }
// console.log(invert(nums));