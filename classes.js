// Classes
class BankAccount {
    constructor(balance, accountHolder, accountNumber){
        this.balance = balance;
        this.accHolder = accountHolder;
        this.accNumber = accountNumber;
    }

    deposit(amount){
        return this.balance + amount
    }
   
    withdraw(amount){
        this.balance = 0;

        return this.balance - amount
    }
}

const bank = new BankAccount(100, 'Ondrej', 3)
console.log(bank)
console.log(bank.balance)
console.log(bank.deposit(500))
console.log(bank.balance)




class A {
    constructor(param) {
        this.param = param;
    }

    get property(){
        return this.param + 'Ahoj'
    }
}

// Debilny priklad
const yey = new A('prdko')
console.log(yey.param)
console.log(yey.property)

yey.param = 'Juuuuuuuu'

console.log(yey.param)
console.log(yey.property)


// Class fields -- public and private
// Class field is something that is not in contructor ... it is a proberty of Class itself
// static make it not exposed to any other instances of a class (it belongs to the class)
// Private properties do not allow acces from outside '#' prefix
// Private methods -- '#' symbol e.g. #privateMethod(){}

