// class Animal {
//     speak() {
//         console.log("Animal rawr");
//     }
// }

// class Cat extends Animal {
//     speak() {
//         console.log("Cat mew mew");
//     }
// }

// const cat = new Cat();
// cat.speak();


// konvensi
// class BankAccount {
//     constructor() {
//         this.balance = 0;
//     }

//     deposit(amount) {
//         this._balance += amount;
//     }

//     showBalance() {
//         console.log(`Saldo saat ini: ${this._balance}`);
//     }
// }

// const akun = new BankAccount();
// akun.deposit(500000);
// akun.showBalance();

// akun._balance = 8888888;
// akun.showBalance();

// class SecureAccount {
//     #balance = 0;

//     deposit(amount) {
//         this.#balance += amount;
//     }

//     showBalance() {
//         console.log(`Saldo saat ini: ${this.#balance}`);
//     }
// }

// const akun = new SecureAccount();
// akun.deposit(500);
// // akun.#balance = 9999;
// akun.showBalance();

// class Message {
//     send() {
//         console.log("Welcome homee");
//     }
// }

// class Email extends Message {
//     send() {
//         console.log("For Mr Greedy");
//     }
// }

// class SMS extends Message {
//     send() {
//         console.log("SMS sent");
//     }
// }

// const sms = new SMS();
// const email = new Email();
// const message = new Message();
// sms.send();
// email.send();
// message.send();

class User {
    #password = 0
    constructor(password) {
        this.#password = password;
    }

    checkPassword(password) {
        if (password === this.#password) {
            console.log("Password benar");
        } else {
            console.log("Password salah");
        }
    }
}

const user = new User(1234);
user.checkPassword(1234);