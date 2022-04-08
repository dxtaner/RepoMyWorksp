// function getData(data) {
//     return new Promise((resolve, reject) => { // promise dönüyor.
//         console.log("Veriler alinmaya çalışılıyor...");

//         if (data) {
//             resolve("Verilen alındı");
//         } else {
//             reject("Veriler alınamadı");
//         }
//     });
// }

// function cleanData(receivedData) { // promise dönüyor.
//     return new Promise((resolve, reject) => {
//         console.log("Veriler düzenleniyor..");

//         if (receivedData) {
//             resolve("Verilen düzenlendi");
//         } else {
//             reject("Veriler düzenlenemedi");
//         }
//     });
// }

// // getData(true)
// //     .then(result =>{
// //         console.log(result);
// //         return cleanData(true)
// //     }).then(result => {
// //         console.log(result);
// //     })
// //     .catch(error => {
// //         console.log(error);
// //     })

// //  Async Await
// async function processData() {
//     try {// Hata yakalamak için try - bloğu kullanılıyor.catch 
//         const receivedData = await getData(false); // await verilerin tamamıyla alındığından emin oluyor
//         console.log(receivedData);
//         const cleanedData = await cleanData(false);
//         console.log(cleanedData); // await verilerin temizlendiğinden emin oluyor
//     } catch (error) {
//         console.log(error);
//     }
// }

// processData();

const books = [
    { name: "Kitap 1", author: "Yazar 1" },
    { name: "Kitap 2", author: "Yazar 2" },
    { name: "Kitap 3", author: "Yazar 3" },
];

const listBooks = () => {
    books.map((book) => {
        console.log(book.name);
    });
};

const addBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve(books);
        //reject('BIR HATA OLUSTU');
    });

    return promise1;
};

async function showBooks() {
    try {
        await addBook({ name: "Kitap 8", author: "Yazar 8" });
        listBooks();
    } catch (error) {
        console.log(error);
    }
}

showBooks();
