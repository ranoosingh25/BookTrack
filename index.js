/***********************
  CAROUSEL LOGIC
************************/
const carouselBooks = [
  { title: "Digital Library", img: "p2.jpg" },
  { title: "Operating Systems", img: "p3.jpg" },
  { title: "Database Systems", img: "p4.jpg" },
  { title: "Computer Networks", img: "p5.jpg" }
];

let current = 0;
const imgEl = document.getElementById("carousel-img");
const titleEl = document.getElementById("carousel-title");

if (imgEl && titleEl) {
  setInterval(() => {
    current = (current + 1) % carouselBooks.length;
    imgEl.src = carouselBooks[current].img;
    titleEl.textContent = carouselBooks[current].title;
  }, 3000);
}

/***********************
  PREVIEW BOOKS (PUBLIC)
************************/
const previewBooks = document.getElementById("previewBooks");
const libraryBooks = JSON.parse(localStorage.getItem("books")) || [];

if (previewBooks) {
  previewBooks.innerHTML = "";

  libraryBooks.slice(0, 6).forEach(book => {
    previewBooks.innerHTML += `
      <div class="book-card">
        <img src="${book.cover || 'default.png'}" alt="${book.title}">
        <h4>${book.title}</h4>
        <p>${book.author}</p>
        <span>${book.status}</span>
      </div>
    `;
  });
}

/***********************
  VIEW MORE (LOGIN GATE)
************************/
const viewMoreBtn = document.getElementById("viewMoreBtn");

if (viewMoreBtn) {
  viewMoreBtn.addEventListener("click", () => {
    const role = localStorage.getItem("role");

    if (!role) {
      alert("Please login to view full catalog");
      window.location.href = "login.html";
    } else {
      window.location.href = "books.html";
    }
  });
}

document.getElementById("searchBtn").addEventListener("click", () => {
    const query = document.getElementById("globalSearch").value.trim();

    if (!query) {
      alert("Please enter a book name or department");
      return;
    }

    // Redirect to books page with search query
    window.location.href = `books.html?search=${encodeURIComponent(query)}`;
  });

  // Optional: Enter key support
  document.getElementById("globalSearch").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      document.getElementById("searchBtn").click();
    }
  });