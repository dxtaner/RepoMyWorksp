const blogs = [
    { name: 'Taner ',  nickName: 'tan' },
    { name: 'Erkan',  nickName: 'eksi' },
    { name: 'Samir',  nickName: 'yarım' },
]

const printList = () => {
    blogs.map(value => {
        console.log(value)
    })
}

const addNewBlogItem = {name: 'Hasn', nickName: 'haso'};

const updateList = (value) => {
    return new Promise((resolve, reject) => {
        if (value !== null && value !== '') {
            blogs.push(value);
            resolve('Yeni Post başarıyla listeye eklendi.');
        }
        else {
            reject('Eklenemiyor!!!');
        }
    })
}

async function blogList() {
    try {
        if (addNewBlogItem !== null) {
            await updateList(addNewBlogItem)
                .then(value => {console.log(value)})
                .catch(error => {console.log(error)});;
                printList()
                console.log(`Güncel Liste = ${blogs.length}'adettir.`);
        } else {
            await updateList(addNewBlogItem)
                .then(value => {console.log(value)})
                .catch(error => {console.log(error)});;
                printList();
                console.log(`Güncel listedeki elemanlar = ${blogs.length} ' tanedir.`);
        }
    } catch { console.log('Bir hata oluştu!') };

}

blogList();