// SOAL 1 SISTEM PERPUSTAKAAN
// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }
//     info() {
//         console.log(`${this.title} oleh ${this.author}` );
//     }
// }

// class Ebook extends Book {
//     #fileSize = 0;

//     constructor(title, author, fileSize) {
//         super(title, author);
//         this.fileSize = fileSize;
//     }

//     info() {
//         console.log(`${this.title} oleh ${this.author} ukuran file: ${this.fileSize}MB`);
//     }
// }

// const buku = new Book("Laskar pelangi", "Andrea Hirata");
// buku.info();

// const ebook = new Ebook("Laskar pelangi", "Andrea Hirata", "30");
// ebook.info();

// SOAL 2 SISTEM RESERVASI HOTEL
// class HotelRoom {
//     #isBooked = false;

//     bookRoom(){
//         this.#isBooked = true;

//     }

//     checkStatus() {
//         console.log(`Kamar hotel ${this.#isBooked ? "sudah dipesan" : "tersedia"}`);
//     }
// }

// const hotel = new HotelRoom();
// hotel.bookRoom();
// hotel.checkStatus();

// SOAL 3 SISTEM E-COMMERCE
// class Product {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Cart {
//     constructor() {
//         this.items = [];
//     }

//     addItem(product) {
//         this.items.push(product);
//     }

//     getTotal() {
//         return this.items.reduce((total, item) => total + item.price, 0);
//     }
// }

// const cart = new Cart();

// const product1 = new Product("Baju", 10000);
// const product2 = new Product("Celana", 5000);

// cart.addItem(product1);
// cart.addItem(product2);

// const total = cart.getTotal();
// console.log(`Total harga: ${total}`);

// SOAL 4 SISTEM TIKET KONSER
// class ConcertTicket {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// class OnlineTicket extends ConcertTicket {
//     constructor(name, price, discount) {
//         super(name, price);
//         this.discount = discount;
//     }

//     getDiscountedPrice() {
//         return this.price * (1 - this.discount);
//     }
// }

// const ticket1 = new ConcertTicket("Metallica", 100000);
// const ticket2 = new OnlineTicket("Metallica", 100000, 0.1);

// console.log(ticket1.price);
// console.log(ticket2.getDiscountedPrice());

// SOAL 5 ENERGI HEWAN
// class Animal {
//     #energy;

//     constructor(name, energy = 50) {
//         this.name = name;
//         this.#energy = energy; // energy 0-100
//     }

//     getEnergy() {
//         return this.#energy;
//     }

//     eat(amount) {
//         this.#energy += amount;
//         if (this.#energy > 100) this.#energy = 100;
//     }

//     sleep(time) {
//         this.#energy += time * 2; // energi bertambah 2x waktu tidur
//         if (this.#energy > 100) this.#energy = 100;
//     }
// }

// class Dog extends Animal {
//     eat(amount) {
//         // override: energi bertambah 1.5 kali lebih cepat
//         super.eat(amount * 1.5);
//     }
// }

// const dog = new Dog("Husky", 50);
// console.log("Energi awal:", dog.getEnergy());

// dog.eat(10);
// console.log("Energi setelah makan:", dog.getEnergy());

// dog.sleep(5);
// console.log("Energi setelah tidur:", dog.getEnergy());

// SOAL 6 REKENING DENGAN PEMBATASAN PENARIKAN
// class Account {
//     #balance;

//     constructor(initialBalance = 0) {
//         this.#balance = initialBalance;
//     }

//     // Getter untuk mendapatkan balance
//     getBalance() {
//         return this.#balance;
//     }

//     // Method deposit
//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//             console.log(`Deposited: ${amount}`);
//         } else {
//             console.log("Amount must be positive.");
//         }
//     }

//     // Method withdraw
//     withdraw(amount) {
//         if (amount > 0 && amount <= this.#balance) {
//             this.#balance -= amount;
//             console.log(`Withdrew: ${amount}`);
//         } else {
//             console.log("Insufficient funds or invalid amount.");
//         }
//     }
// }

// class SavingsAccount extends Account {
//     withdraw(amount) {
//         if (amount > this.getBalance() * 0.5) {
//             throw new Error("Penarikan melebihi 50% dari saldo.");
//         }
//         super.withdraw(amount);
//     }
// }

// // contoh penggunaan
// const savings = new SavingsAccount(100);
// console.log("Saldo awal:", savings.getBalance());

// savings.deposit(50);
// savings.withdraw(10);
// savings.withdraw(20);

// console.log("Saldo akhir:", savings.getBalance());

// SOAL 7 KECEPATAN KENDARAAN
// class Vehicle {
//     #speed;

//     constructor() {
//         this.#speed = 0;
//     }

//     getSpeed() {
//         return this.#speed;
//     }

//     // Method untuk mempercepat kendaraan
//     accelerate(amount) {
//         this.#speed += amount;
//         if (this.#speed > 180) {
//             this.#speed = 180;
//         }
//         console.log(`Kecepatan saat ini: ${this.#speed} km/jam`);
//     }

//     // Method untuk mengerem kendaraan
//     brake(amount) {
//         this.#speed -= amount;
//         if (this.#speed < 0) {
//             this.#speed = 0;
//         }
//         console.log(`Kecepatan setelah pengereman: ${this.#speed} km/jam`);
//     }
// }

// class Car extends Vehicle {
//     constructor() {
//         super();
//     }

//     accelerate(amount) {
//         console.log("Car accelerating");
//         super.accelerate(amount);
//     }
// }

// const car = new Car();
// console.log("Kecepatan awal:", car.getSpeed());

// car.accelerate(50);
// car.accelerate(100);
// car.accelerate(50);
// car.brake(30);

// SOAL 8 MANAJEMEN KARYAWAN REMOTE
// class Employee {
//     #workingHours;

//     constructor() {
//         this.#workingHours = 0;
//     }

//     logHours(hours) {
//         this.#workingHours += hours;
//         console.log(`Total jam kerja: ${this.#workingHours} jam`);
//     }

//     getWorkingHours() {
//         return this.#workingHours;
//     }
// }

// class RemoteEmployee extends Employee {
//     constructor() {
//         super();
//     }

//     logHours(hours) {
//         if (this.getWorkingHours() + hours > 8) {
//             console.log("Exceeded daily work limit");
//         } else {
//             super.logHours(hours);
//         }
//     }
// }

// // Contoh penggunaan:
// const remoteEmp = new RemoteEmployee();
// remoteEmp.logHours(5);
// remoteEmp.logHours(4);
// remoteEmp.logHours(2);

// console.log(`Total jam kerja remote : ${remoteEmp.getWorkingHours()} jam`);

// SOAL 9 PESAWAT DAN JET
// class Airplane {
//     #altitude;
//     constructor() {
//         this.#altitude = 0;
//     }

//     ascend(meters) {
//         this.#altitude += meters;
//         if (this.#altitude > 12000) {
//             this.#altitude = 12000;
//         }
//         console.log(`Ketinggian saat ini: ${this.#altitude} meter`);
//     }

//     descend(meters) {
//         this.#altitude -= meters;
//         if (this.#altitude < 0) {
//             this.#altitude = 0;
//         }
//         console.log(`Ketinggian setelah turun: ${this.#altitude} meter`);
//     }

//     getAltitude() {
//         return this.#altitude;
//     }
// }

// class Jet extends Airplane {
//     constructor() {
//         super();
//     }

//     ascend(meters) {
//         const doubledMeters = meters * 2;
//         console.log(`Jet ascending with ${doubledMeters} meters`);
//         super.ascend(doubledMeters);
//     }
// }

// const jet = new Jet();

// jet.ascend(3000);
// jet.ascend(5000);
// jet.descend(2000);
// console.log(`Ketinggian akhir jet: ${jet.getAltitude()} meter`);

// SOAL 10 SISTEM PARKIR OTOMATIS
// class ParkingSpot {
//     #isOccupied = false

//     occupy() {
//         if (!this.#isOccupied) {
//             this.#isOccupied = true
//             console.log("Spot occupied")
//         } else {
//             console.log("Spot already occupied")
//         }
//     }

//     vacate() {
//         if (this.#isOccupied) {
//             this.#isOccupied = false
//             console.log("Spot vacated")
//         } else {
//             console.log("Spot is already empty")
//         }
//     }
// }

// class ElectricParkingSpot extends ParkingSpot {
//     occupy(isElectric) {
//         if (!isElectric) {
//             console.log("Only electric cars allowed")
//         } else {
//             super.occupy()
//         }
//     }
// }

// const spot1 = new ElectricParkingSpot()
// spot1.occupy(false)
// spot1.occupy(true)
// spot1.vacate()

// SOAL 11 SISTEM LOGIN OTOMATIS
// class User {
//     #password;

//     constructor(password) {
//         this.#password = password;
//     }

//     // Method untuk memeriksa apakah input password benar
//     checkPassword(input) {
//         if (input === this.#password) {
//             console.log("Benar");
//         } else {
//             console.log("Salah");
//         }
//     }
// }

// const user1 = new User("pengguna123")
// user1.checkPassword("pengguna123")
// user1.checkPassword("password")

// SOAL 12 SISTEM KENDARAAN
// class Vehicle {
//     move() {
//         console.log("Kendaraan bergerak");
//     }
// }

// class Car extends Vehicle {
//     move() {
//         console.log("Mobil berjalan di jalan raya");
//     }
// }

// class Boat extends Vehicle {
//     move() {
//         console.log("Perahu berlayar di laut");
//     }
// }

// const vehicle = new Vehicle();
// vehicle.move();

// const car = new Car();
// car.move();

// const boat = new Boat();
// boat.move();

// SOAL 13 SISTEM PESANAN MAKANAN
// class Order {
//     #status = "Pending";

//     get status() {
//         return this.#status;
//     }

//     set status(newStatus) {
//         if (newStatus === "Delivered" || newStatus === "Cancelled") {
//             this.#status = newStatus;
//             console.log(`Status diubah jadi: ${this.#status}`);
//         } else {
//             console.log("Status hanya bisa 'Delivered' atau 'Cancelled'.");
//         }
//     }
// }

// const order = new Order();

// console.log(order.status);

// order.status = "Delivered";
// console.log(order.status);

// order.status = "Shipped";
// console.log(order.status);

// order.status = "Cancelled";
// console.log(order.status);

// SOAL 14 SISTEM PEMBAYARAN
// class Payment {
//     #amount

//     constructor(amount) {
//         this.#amount = amount
//     }

//     getAmount() {
//         return this.#amount
//     }

//     process() {
//         console.log(`Memproses pembayaran sebesar ${this.#amount}`)
//     }
// }

// class CreditCardPayment extends Payment {
//     process() {
//         console.log(`Memproses pembayaran credir card sebesar ${this.getAmount()}`)
//     }
// }

// const pay1 = new Payment(450000)
// pay1.process()

// const pay2 = new CreditCardPayment(850000)
// pay2.process()

// SOAL 15 AKUN PREMIUM BANK
// class Account {
//     #balance = 0;
//     showBalance() {
//         console.log(`Saldo: ${this.#balance}`);
//     }

//     get balance() {
//         return this.#balance;
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//         } else {
//             console.log("Jumlah setoran harus lebih besar dari 0");
//         }
//     }
// }

// class PremiumAccount extends Account {
//     showBalance() {
//         console.log(`Saldo anda adalah: ${this.balance} (Akun Premium)`);
//     }
// }

// const regularAccount = new Account();
// regularAccount.deposit(5000);
// regularAccount.showBalance();

// const premiumAccount = new PremiumAccount();
// premiumAccount.deposit(10000);
// premiumAccount.showBalance();