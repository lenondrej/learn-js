const warrior = {}
warrior.name = 'Hattori'
warrior.occupation = 'Assasin'

console.log(warrior)
console.log(typeof warrior)

class Ninja{
    constructor(name){
        this.name = name
        this.surname = 'Ninja'
    }
}

const ninja = new Ninja("Albert")
console.log(ninja)

// Controlling access to objects
class Member {
    constructor(name, surname, id){
        this.name = name;
        this.surname = surname;
        this.id = id;
    }

    set setName(_name){
        this.name = _name
    }

    get getName(){
      return this.name
    }

    get fullName(){
        return `The fullname is: ${this.name} ${this.surname}`
    }

   
}

const jozko = new Member('Jozko', 'Mrkvicka', 33)

console.log(jozko)
console.log(jozko.getName)
jozko.setName = 'Jozinko'
console.log(jozko.getName)
console.log(jozko.fullName)
