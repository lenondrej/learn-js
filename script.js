obj = {
  "name": "Lenon",
  "position": "head of this fucking world"
}

str = JSON.stringify(obj.position)
console.log(str)

// const ahoj = 5;
// ahoj=7;

// add event listener
// addBtn.addEventListener('click', someFunctionName);

// parseInt the same is to use '+' sign
let stringNumber = '10';
console.log(parseInt(stringNumber));
console.log(+stringNumber);

// similar is converting nuber to string by using .toString()

let number = 1000;
console.log(typeof number.toString());

// ** *** *** **** ***** ******* *************


function dosth (a, b, ...rest){
  console.log(arguments[2])
  console.log(...rest)
  return console.log(`${a} ~ ${b}`)
}



// dosth('first', 'second', 'third', 'forth')

// (function skulk(name){
//     console.log(name)
// })('Hattori')



(function(){ console.log('prd')})()

const prom = new Promise((res, rej) =>{
  console.log('inside a promise')
  
   rej('oooopsie')
}).then(pram => console.log(pram)).catch(err => console.log(err))


const _cisla = [1, 2, 3]
const cisla2 = [7, 9, 10]

_cisla.concat(cisla2).forEach(cislo => console.log(cislo + cislo))

const names = ["Janko", "Marienka", "Jezibaba"]

const joined = names.join('\n')

console.log(joined)

const rozdelene = joined.split('\n')

console.log(rozdelene.join(' boobs '))

_cisla.push(8, 9, 190, 2)
const booom = _cisla.slice(0, 6)
console.log(booom)

const alph = ["c", "g", "j", "k", "a", "b", "f"]

console.log(alph.sort())

const filtered = cisla2.filter(x => x>8)
console.log(filtered)

const people = [
  {
      name: 'Anton',
      surname: 'Sauron'
  },
  {
      name: 'Jahodo',
      surname: 'Melody'
  }
]

const addNewname = (name) => {
  const isNameThere = people.some(ppl => ppl.name === name)

  !isNameThere ? people.push({name: name, surname: undefined}) : console.log(`${name} is already here`)
}

addNewname('patizon')
console.log(people)

const mapped = _cisla.map(n => { return `som funkcia, zavolana som bola        ${n}`})
console.log(mapped)
const meno = '        meno moje'
console.log(meno.trim())
console.log(meno.length)
console.log(meno.trim().length)

console.log(_cisla.every(x => x > 2))
console.log(cisla2.every(x => x > 2))

const _numbers = [1, 2, 3, 4, 5, 100]

const _sum = _numbers.reduce((prev, next) => {
  return prev + next
})

console.log(_sum)


// Functional programming

const add = (x) => (y) => x + y;
const add2 = add(2);

console.log(add2(4));

// Partial Application

// const fetch = require("node-fetch");

// const getFromAPI = (baseURL) => (endpoint) => (cb) =>
//   fetch(`${baseURL}${endpoint}`)
//     .then((res) => res.json())
//     .then((data) => cb(data))
//     .catch((err) => {
//       console.error(err.message);
//     });

// const getGithub = getFromAPI("https://api.github.com");

// const getGithubUsers = getGithub("/users");
// const getGithubRepos = getGithub("/respositories");

// getGithubUsers((data) => {
//   console.log(data.map((user) => user.login));
// });

// getGithubUsers((data) => {
//   console.log(data.map((user) => user.avatar_url));
// });

// Pointfree programming
const array = [1, 2, 3];
const double = (x) => x * 2;

console.log(array.map(double));


const ludia = {
  meno: 'Ondrej',
  schopnost: 'sef',
  ["okuliare"]: true
}

console.log(ludia["okuliare"])

console.log('jujky juj %s this is bad', 'shit')

const foo = undefined

console.assert(foo, 'Foo is not defined')

console.time('tralala')


console.timeEnd('tralala')

// Create an array from node list -- use Array.from()




/**
* REDUCE
*/

const data = [15, 10]

const reducer = function(accumulator, item) {
  return accumulator + item
}

const initialValue = 10

const total = data.reduce(reducer, initialValue)

const totalOneLine = data.reduce((acc, item) => acc + item, 10)

console.log('The sum is ', total)
console.log('The sum is ', totalOneLine)


const votes = [
  "angular",
  "angular",
  "react",
  "angular",
  "react",
  "angular",
  "react",
  "ember",
  "vanilla"
]

// *****************************************************************

var initValue = {}
const reducer2 = function(tally, vote){
  if(!tally[vote]){
      tally[vote] = 1
  } else {
      tally[vote] = tally[vote] + 1
  }

  return tally;
}

const result = votes.reduce(reducer2, initValue)
console.log(result)


// *****************************************************************

const persona = {
firstName: "John",
lastName: "Doe",
age: 50,
eyeColor: "blue"
};

console.log('eye color is: ', persona['eyeColor'])
// *****************************************************************

const dataNumbers = [1,2,3, 120, 11000]


let i = 0;

var doubled = dataNumbers.reduce(function(acc, value) {
  i++
  console.log('I run', i, 'times')
  console.log(acc)
  acc.push(value * 2)

  return acc
}, [])

console.log(doubled)

// *****************************************************************


const numbers = [1,2,3,4]
const parne = numbers.reduce(function(acc, value) {
  if(value % 2 === 0) {
      acc.push(value)
  }
  return acc
}, [])

console.log('Parne clisla su tieto: ', parne)


// *****************************************************************


const mena = ['Ondrej', 'Matej', 'Jakub', 'Andrej']

const zdrobinanor = function(acc, value){
  acc.push(`${value}ko`)

  return acc
}

const zdrobene = mena.reduce(zdrobinanor, [])
console.log(zdrobene)


// *****************************************************************


const cisla = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const flattenedData = cisla.reduce(function(acc, value) {
  return acc.concat(value)
}, [])

console.log(flattenedData)


// 888888888888888888888

var input = [
  {
    title: "Batman Begins",
    year: 2005,
    cast: [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes",
      "Gary Oldman",
      "Cillian Murphy"
    ]
  },
  {
    title: "The Dark Knight",
    year: 2008,
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhal",
      "Gary Oldman",
      "Morgan Freeman"
    ]
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    cast: [
      "Christian Bale",
      "Gary Oldman",
      "Tom Hardy",
      "Joseph Gordon-Levitt",
      "Anne Hathaway",
      "Marion Cotillard",
      "Morgan Freeman",
      "Michael Caine"
    ]
  }
];

var stars = input.reduce(function(acc, value) {
  value.cast.forEach(function(star) {
      // console.log(star)
    if (acc.indexOf(star) === -1) { // ak take este nie je v acc
      acc.push(star);
    }
  });

  return acc;
}, []);

console.log(stars)

// ******************************************************************************

var datta = [1, 2, 3, 4, "5"];
var sum = datta.reduceRight(function(acc, value, index) {
  console.log(`Index: ${index}`)
  return acc + value;
}, 0);

console.log("Sum: ", sum)


// ******************************************************************************

function pushSthIntoCollection(sth, collection){
collection.push(sth)
console.log(collection)
}

pushSthIntoCollection('poharik', ['lyzicka', 'nozicek', 'salocka', 'vidlicka'])


// Generator functions

const abeceda = ['A', 'B', 'C']

const iterator = abeceda[Symbol.iterator]()

console.dir(abeceda)
console.log(iterator)
console.log(iterator.next())

for (let value of iterator){
console.log(value)
}


// ******************************************************************************


const reverseIterator = function* (array) {
let i = array.length
while(i > 0) {
  yield array[--i]
}
}

for (let value of reverseIterator(abeceda)){
console.log('iterujem', value)
}

const iter = reverseIterator(abeceda)
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

// ******************************************************************************

const mojIterator = function*(){
yield* 'ondrej'
yield 'je'
yield 'super'
}

const iteratororor = mojIterator()

console.log(iteratororor.next())
console.log(iteratororor.next())
console.log(iteratororor.next())
console.log(iteratororor.next())
console.log(iteratororor.next())
console.log(iteratororor.next())
console.log(iteratororor.next())
console.log(iteratororor.next())
console.log(iteratororor.next())
console.log(iteratororor.next())
console.log(iteratororor.next())
console.log(iteratororor.next())

/// *************

