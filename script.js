const books = [
    {
        title: 
        image:
        quote:
    },
    {
        title: 
        image: 
        quote: 
    },
    {
        title: 
        image: 
        quote:
    }
];

function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = "";

    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <img src="${book.image}" alt="Cover Buku">
            <div>
                <strong>${book.title}</strong>
                <p>${book.quote}</p>
            </div>
        `;
        bookList.appendChild(bookItem);
    });
}

function searchBook() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchValue));
    
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = "";

    filteredBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <img src="${book.image}" alt="Cover Buku">
            <div>
                <strong>${book.title}</strong>
                <p>${book.quote}</p>
            </div>
        `;
        bookList.appendChild(bookItem);
    });
}

// Tampilkan buku saat halaman dimuat
window.onload = displayBooks;

let index = 0;


