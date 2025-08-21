let availableBooks = [
    { id: 1, title: "HTML & CSS Basics", author: "John Doe" },
    { id: 2, title: "JavaScript for Beginners", author: "Jane Smith" },
    { id: 3, title: "Python Crash Course", author: "Eric Matthes" }
];

let borrowedBooks = [];
let loanHistory = [];

function showSection(id) {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if (id === "available-books") renderAvailableBooks();
    if (id === "borrowed-books") renderBorrowedBooks();
    if (id === "loan-history") renderLoanHistory();
    if (id === "profile") renderProfile();
}

function renderAvailableBooks() {
    const container = document.getElementById('availableBooksList');
    container.innerHTML = '';
    availableBooks.forEach(book => {
        let div = document.createElement('div');
        div.className = 'book-card';
        div.innerHTML = `
            <span><b>${book.title}</b> by ${book.author}</span>
            <button onclick="borrowBook(${book.id})">Borrow</button>
        `;
        container.appendChild(div);
    });
}

function renderBorrowedBooks() {
    const searchTerm = document.getElementById('borrowedSearch').value.toLowerCase();
    const container = document.getElementById('borrowedBooksList');
    container.innerHTML = '';
    borrowedBooks
        .filter(book => book.title.toLowerCase().includes(searchTerm))
        .forEach(book => {
            let div = document.createElement('div');
            div.className = 'book-card';
            div.innerHTML = `
                <span><b>${book.title}</b> by ${book.author}</span>
                <button onclick="returnBook(${book.id})">Return</button>
            `;
            container.appendChild(div);
        });
}

function renderLoanHistory() {
    const container = document.getElementById('loanHistoryList');
    container.innerHTML = '';
    loanHistory.forEach(book => {
        let div = document.createElement('div');
        div.className = 'book-card';
        div.innerHTML = <span><b>${book.title}</b> by ${book.author}</span>;
        container.appendChild(div);
    });
}

function renderProfile() {
    document.getElementById('profileDetails').innerHTML = `
        <p><b>Name:</b> Student Name</p>
        <p><b>Email:</b> student@example.com</p>
    `;
}

function borrowBook(id) {
    const book = availableBooks.find(b => b.id === id);
    if (book) {
        borrowedBooks.push(book);
        loanHistory.push(book);
        availableBooks = availableBooks.filter(b => b.id !== id);
        renderAvailableBooks();
    }
}

function returnBook(id) {
    const book = borrowedBooks.find(b => b.id === id);
    if (book) {
        availableBooks.push(book);
        borrowedBooks = borrowedBooks.filter(b => b.id !== id);
        renderBorrowedBooks();
    }
}

document.getElementById('borrowedSearch').addEventListener('input', renderBorrowedBooks);

showSection('available-books');