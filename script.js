const books = [
    {
        title: "The 5 Second Rule: Transform your Life, Work, and Confidence with Everyday Courage",
        image: "https://via.placeholder.com/50",
        quote: "You often feel tired, not because you've done too much, but because you've done too little of what sparks a light in you. — Anonymous"
    },
    {
        title: "Learning Web Design: A Beginner’s Guide to HTML, CSS, JavaScript, and Web Graphics",
        image: "https://via.placeholder.com/50",
        quote: "You often feel tired, not because you've done too much, but because you've done too little of what sparks a light in you. — Anonymous"
    },
    {
        title: "Webster's Word Power Better English Grammar. Improve Your Written and Spoken English",
        image: "https://via.placeholder.com/50",
        quote: "Everything in the universe is within you. Ask all from yourself. — Rumi"
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
