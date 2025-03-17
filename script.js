document.addEventListener("DOMContentLoaded", function() {
    fetch("books.json")
    .then(response => response.json())
    .then(data => {
        const bookList = document.getElementById("book-list");
        bookList.innerHTML = data.map(book => `
            <div class="book">
                <img src="${book.cover}" alt="${book.title}">
                <div class="book-title">${book.title}</div>
                <p>${book.author}</p>
            </div>
        `).join("");
    });
});
      .catch(error => console.error("Error loading books:", error));
});

function searchBook() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let books = document.querySelectorAll(".book");

    books.forEach(book => {
        let title = book.querySelector(".book-title").textContent.toLowerCase();
        book.style.display = title.includes(input) ? "block" : "none";
    });
}
