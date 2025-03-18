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

function showSlide(n) {
    let slides = document.querySelector(".slides");
    let totalSlides = slides.children.length;
    
    if (n >= totalSlides) {
        index = 0;
    } else if (n < 0) {
        index = totalSlides - 1;
    } else {
        index = n;
    }

    let offset = -index * 100 + "%";
    slides.style.transform = "translateX(" + offset + ")";
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

// Auto-slide setiap 5 detik
setInterval(() => {
    nextSlide();
}, 5000);
