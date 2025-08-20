// class Burung {
//     terbang() {
//         console.log("cuit cuit");
//     }
// }

// class Ayam extends Burung {
//     bersuara() {
//         console.log("cukurukuk");
//     }
// }

// class Bebek extends Burung {
//     bersuara() {
//         console.log("kwek kwek");
//     }
// }

// const daftarBurung = [new Ayam ("jago"), new Bebek("jago")];

// daftarBurung.forEach(burung => {
//     burung.bersuara(); // polymorphism
// });

                                // STATIC PROPERTIES & METHOD
// class Matematika {
//     static pi = 3.14;
//     static luasLingkaran(r) {
//         return this.pi * r * r;
//     }
// }

// console.log(Matematika.pi);
// console.log(Matematika.luasLingkaran(7));

                                // GETTER & SETTER
// class Mahasiswa {
//     #nama;

//     constructor(nama) {
//         this.#nama = nama;
//     }

//     get nama() {
//         return this.#nama;
//     }

//     set nama(value) {
//         if (value.length < 3) {
//             console.log("Nama terlalu pendek");
//             return;
//         }
//         this.#nama = value;
//     }
// }

// const mhs1 = new Mahasiswa("Budi");
// console.log(mhs1.nama);

// mhs1.nama = "Budi";
// mhs1.nama = "sutrisno";
// console.log(mhs1.nama);