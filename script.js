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

let slideIndex = 0;

function showSlide(n) {
    const slides = document.querySelectorAll(".slide");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    const slider = document.querySelector(".slider");
    slider.style.transform = translateX(${-slideIndex * 100}%);
}

function moveSlide(step) {
    slideIndex += step;
    showSlide(slideIndex);
}

// Auto-slide setiap 5 detik
setInterval(() => moveSlide(1), 4000);
