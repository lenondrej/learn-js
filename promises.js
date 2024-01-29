// promises, generators and async js

function* greetings(name){
    yield "Ahoj" + name + name,
    yield* newGreetings(name)
    yield "Cau" + name,
    yield "Dobry den" + name
}

function* newGreetings(name){
    yield 'New Ahoj' + name,
    yield 'New Cau' + name
}

const getGreeting = greetings('Ondrej')

console.log(getGreeting.next("Tralala"))
console.log(getGreeting.next())
console.log(getGreeting.next())
console.log(getGreeting.next())
console.log(getGreeting.next())
console.log(getGreeting.next())
console.log(getGreeting.next())
console.log(getGreeting.next())




/**
 * IDs
 */

function* IdGenerator(){
    let id = 0;
    while(true){
        yield ++id
    }
}

const getId = IdGenerator()
console.log(getId.next().value)
console.log(getId.next().value)
console.log(getId.next().value)
console.log(getId.next().value)
console.log(getId.next().value)
console.log(getId.next().value)
console.log(getId.next().value)
console.log(getId.next().value)

/**
 * Promises
 */
const mojPromis = new Promise((res, rej) => {
    const randomNumber = Math.floor(Math.random()*6)
    console.log('Random number is ' + randomNumber)
   if (randomNumber > 2){
    res('Promis resolved')
   } else
    rej('Promis rejected')
})

mojPromis.then(val => console.log(val)).catch(err => console.log(err))

