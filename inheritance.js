
// class Animal {
//     constructor (name) {
//     this.name = name 
//     }
//     eat () {
//         console.log(`${this.name} sedang makan`);
//     }  
// }

// class Cat extends Animal {
//     constructor (name, color) {
//         super(name);
//         this.color = color;
//     }   
//     meow () {
//         console.log(`${this.name} si kucing ${this.color} sedang meow`);
//     }
// }

// const kucing = new Cat("Tom", "hitam");
// kucing.eat();
// kucing.meow();


// class Animal {
//     constructor (name) {
//     this.name = name 
//     }
//     eat () {
//         console.log(`${this.name} sedang makan`);
//     }  
// }

// class Dog extends Animal {
//     constructor (name, color) {
//         super(name);
//         this.color = color;
//     }   
//     bark () {
//         console.log(`${this.name} si anjing ${this.color} sedang menggonggong`);
//     }
// }

// class Bird extends Animal {
//     fly () {
//         console.log(`${this.name} sedang terbang`);
//     }
// }

// const anjing = new Dog("Black", "Putih");
// const bird = new Bird("Parrot", "Hijau");
// anjing.eat();
// anjing.bark();
// bird.fly(); 

class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    introduce() {
        console.log(`${this.name} posisi ${this.position} gaji ${this.salary}.`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    lead() {
        console.log(`${this.name} Menjabat di ${this.department}.`);
    }
}
const employee = new Employee("Jon", "Manager", "Rp 1.000");
const manager = new Manager("Jon","Perminyakan");
employee.introduce();
manager.lead();
