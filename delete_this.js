let a = 'Mayo';
let b = 'cream';

//[b, a] = [a, b];
[a, b] = [b, a];
//[disgusting, delicious] = [delicious, disgusting]

console.log(a);
console.log(b);

// ERASE BELOW
const options = {
  refreshTime: 200
}

const { refreshTime = 750, waitTime = 1000 } = options;
// console.log(refreshTime);
// console.log(waitTime);

const teaOrder = {
  variety : 'oolong',
  teaName: 'winter sprout',
  origin: 'taiwan',
  price : 12.99,
  hasCaffeine: true,
  quantity: 3
};

const order1 = {
  variety : 'green',
  teaName: 'silver needle',
  origin: 'taiwan',
  price : 12.99,
  hasCaffeine: true,
};

const { price, quantity, ...others } = teaOrder;

const { brewTemp: temp = 175 } = teaOrder;

const { teaName: tea } = teaOrder;

// function checkout(tea) {
//   const { quantity = 1, price } = tea;
//   return quantity * price;
// }

const checkout = ({ quantity, price }) => quantity * price;

let total = checkout(teaOrder);
console.log(total);

const students = [
  { name: 'Drake', gpa: 4.6 },
  { name: 'Ant', gpa: 3.6 },
  { name: 'Joe', gpa: 2.6 },
  { name: 'Larry', gpa: 4.0 },
];

const [topStudent, ...others1] = students;

console.log(others1);

const olympicResults = ['Tam', 'Jess', 'Vio'];

const awardMedals = ([gold, silver, bronze]) => ({ gold, silver, bronze });
console.log(awardMedals(olympicResults));

const { Versions: [{ runtime: originalRuntime }, { runtime: directorsCutRuntime }] } = movie; 