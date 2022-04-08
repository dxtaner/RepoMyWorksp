// // bir işlemin sonucunu temsil eden nesnelerdir.

// const promise = new Promise((resolve,reject)=>{
//     resolve("Veriler alındı..");
//     reject("Baglantı hatasi ..")
// })

// // console.log(promise);

// promise
//     .then(value =>{
//         console.log(value)
//     }).catch(error =>{
//         console.log(error);
//     })

const books = [
    { name: "Kitap 1", author: "Yazar 1" },
    { name: "Kitap 2", author: "Yazar 2" },
    { name: "Kitap 3", author: "Yazar 3" },
];

const listBooks = () => {
    books.map((book) => {
        console.log(book.name+" "+book.author);
    });
};

const addBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        // reject('BIR HATA OLUSTU');
    });

    return promise1;
};

addBook({ name: "Kitap 8", author: "Yazar 44" })
    .then(() => {
        console.log("YENI LISTE");
        listBooks();
    })
    .catch((error) => {
        console.log(error);
    });

listBooks();