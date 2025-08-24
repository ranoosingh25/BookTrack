const borrowedBooks = [
    { title: "Introduction to Algorithms", author: "Thomas H. Cormen", borrow: "2025-08-01", due: "2025-08-15", status: "On Time" },
    { title: "Computer Networks", author: "Andrew S. Tanenbaum", borrow: "2025-07-20", due: "2025-08-05", status: "Overdue" },
    { title: "Clean Code", author: "Robert C. Martin", borrow: "2025-08-10", due: "2025-08-17", status: "Due Soon" }
];

function populateBorrowedBooks() {
    const tableBody = document.querySelector("#borrowedTable tbody");
    tableBody.innerHTML = "";
    borrowedBooks.forEach(book => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.borrow}</td>
            <td>${book.due}</td>
            <td><span class="status ${getStatusClass(book.status)}">${book.status}</span></td>
        `;
        tableBody.appendChild(row);
    });
}

function getStatusClass(status) {
    if (status === "On Time") return "on-time";
    if (status === "Due Soon") return "due-soon";
    if (status === "Overdue") return "overdue";
}

function searchBooks() {
    alert("Search feature coming soon!");
}

function refreshPage() {
    location.reload();
}

populateBorrowedBooks();
