let book = {
  title: titleInput.value,
  author: authorInput.value,
  category: categorySelect.value,
  imageUrl: "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg"
};


const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");
const sortAZ = document.getElementById("sortAZ");
const sortZA = document.getElementById("sortZA");
const filterCategory = document.getElementById("filterCategory");
bookForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const category = document.getElementById("category").value;

    const book = {
        title,
        author,
        category,
        imageUrl: imgURL
    };

    books.push(book);
    renderBooks(books);

    bookForm.reset();
});
function renderBooks(data) {
    bookList.innerHTML = "";

    data.forEach((book, index) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${book.imageUrl}" />
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Category: ${book.category}</p>
            <button class="delete-btn" onclick="deleteBook(${index})">Delete</button>
        `;

        bookList.appendChild(card);
    });
}
function deleteBook(index) {
    books.splice(index, 1);
    applyFilter();
}
sortAZ.addEventListener("click", () => {
    books.sort((a, b) => a.title.localeCompare(b.title));
    applyFilter();
});
sortZA.addEventListener("click", () => {
    books.sort((a, b) => b.title.localeCompare(a.title));
    applyFilter();
});
filterCategory.addEventListener("change", function () {
    applyFilter();
});

function applyFilter() {
    const value = filterCategory.value;

    if (value === "All") {
        renderBooks(books);
    } else {
        const filtered = books.filter(b => b.category === value);
        renderBooks(filtered);
    }
}
