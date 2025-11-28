let books = [];

const bookImage =
  "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg";
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const categoryInput = document.getElementById("category");

const addBtn = document.getElementById("addBookBtn");
const sortAscBtn = document.getElementById("sortAsc");
const sortDescBtn = document.getElementById("sortDesc");
const filterSelect = document.getElementById("filterCategory");

const container = document.getElementById("booksContainer");


addBtn.addEventListener("click", () => {
  if (titleInput.value.trim() === "" || authorInput.value.trim() === "") {
    alert("Please fill all fields");
    return;
  }

  let book = {
    title: titleInput.value,
    author: authorInput.value,
    category: categoryInput.value,
    imageUrl: bookImage
  };

  books.push(book);
  renderBooks(books);

  titleInput.value = "";
  authorInput.value = "";
  categoryInput.value = "Fiction";
});


sortAscBtn.addEventListener("click", () => {
  books.sort((a, b) => a.title.localeCompare(b.title));
  renderBooks(books);
});

sortDescBtn.addEventListener("click", () => {
  books.sort((a, b) => b.title.localeCompare(a.title));
  renderBooks(books);
});

filterSelect.addEventListener("change", () => {
  let val = filterSelect.value;

  if (val === "All") renderBooks(books);
  else renderBooks(books.filter(book => book.category === val));
});

function renderBooks(data) {
  container.innerHTML = "";

  data.forEach((book, i) => {
    let card = document.createElement("div");
    card.className = "book-card";

    card.innerHTML = `
      <img src="${book.imageUrl}" />
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Category:</strong> ${book.category}</p>
      <button class="deleteBtn">Delete</button>
    `;
    card.querySelector(".deleteBtn").addEventListener("click", () => {
      books.splice(i, 1);
      renderBooks(books);
    });

    container.appendChild(card);
  });
}
