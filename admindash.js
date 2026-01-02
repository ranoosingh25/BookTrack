

// Local Storage Database
const db = {
  get(k) { try { return JSON.parse(localStorage.getItem(k)) } catch (e) { return null } },
  set(k, v) { localStorage.setItem(k, JSON.stringify(v)) },
  init() {
    if (!this.get('books')) this.set('books', []);
    if (!this.get('students')) this.set('students', []);
    if (!this.get('loans')) this.set('loans', []);
  }
};

// Render Books
function renderBooks() {
  const booksTableBody = document.querySelector('#booksTable tbody');
  if (!booksTableBody) return; // not on this page
  const books = db.get('books') || [];
  booksTableBody.innerHTML = '';
  books.forEach((b, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${b.title}</td><td>${b.author}</td><td>${b.copies}</td>
    <td>
      <button class='btn success' onclick='editBook(${i})'>Edit</button>
      <button class='btn danger' onclick='deleteBook(${i})'>Delete</button>
    </td>`;
    booksTableBody.appendChild(tr);
  });
}


function renderDashboardBooks() {
  const tbody = document.getElementById("dashboardBooksTable");
  if (!tbody) return;

  const books = JSON.parse(localStorage.getItem("books")) || [];
  tbody.innerHTML = "";

  books.forEach((book, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.status}</td>
      <td>${book.issuedTo || "-"}</td>
     
    `;

    tbody.appendChild(tr);
  });
}


function renderDashboardStudents() {
  const tbody = document.getElementById("dashboardStudentsTable");
  if (!tbody) return;

  const students = db.get("students") || [];
  tbody.innerHTML = "";

  students.forEach((s, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${s.name}</td>
      <td>${s.department}</td>
      <td>${s.borrowed || 0}</td>
      <td>${s.due || 0}</td>
     
    `;
    tbody.appendChild(tr);
  });
}


function deleteDashboardBook(index) {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  books.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(books));

  renderDashboardBooks();
  updateDashboardCards();
}

function updateDashboardCards() {
  const books = JSON.parse(localStorage.getItem("books")) || [];

  document.getElementById("totalBooks").innerText = books.length;
  document.getElementById("availableBooks").innerText =
    books.filter(b => b.status === "Available").length;
  document.getElementById("borrowedBooks").innerText =
    books.filter(b => b.status === "Borrowed").length;
}



function renderDashboardLoans() {
  const tbody = document.getElementById("dashboardLoans");
  if (!tbody) return;

  const loans = db.get("loans") || [];
  tbody.innerHTML = "";

  loans.forEach(l => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${l.student}</td>
      <td>${l.book}</td>
      <td>${l.status}</td>
    `;
    tbody.appendChild(tr);
  });
}

renderDashboardLoans();



function renderDashboardReservations() {
  const tbody = document.querySelector("#dashboardReservationTable tbody");
  if (!tbody) return;

  const reservations = JSON.parse(localStorage.getItem("studentReservations")) || [];
  tbody.innerHTML = "";

  reservations.forEach((r, i) => {
    const today = new Date().toISOString().split("T")[0];
    const status = today > r.returnDate ? "Completed" : "Active";

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${r.student}</td>
      <td>${r.book}</td>
      <td>${r.pickupDate}</td>
      <td>${status}</td>
      
    `;
    tbody.appendChild(tr);
  });
}

function deleteDashboardReservation(index) {
  const reservations = JSON.parse(localStorage.getItem("studentReservations")) || [];
  reservations.splice(index, 1);
  localStorage.setItem("studentReservations", JSON.stringify(reservations));
  renderDashboardReservations();
}

renderDashboardReservations();




// Render Students
function renderStudents() {
  const studentsTableBody = document.querySelector('#studentsTable tbody');
  if (!studentsTableBody) return;
  const students = db.get('students') || [];
  studentsTableBody.innerHTML = '';
  students.forEach((s, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${s.name}</td><td>${s.email}</td><td>${s.department}</td><td>${s.year}</td>
    <td>
      <button class='btn success' onclick='editStudent(${i})'>Edit</button>
      <button class='btn danger' onclick='deleteStudent(${i})'>Delete</button>
    </td>`;
    studentsTableBody.appendChild(tr);
  });
}

// Add Book
document.getElementById('addBook')?.addEventListener('click', () => {
  db.init();
  const title = document.getElementById('bookTitle').value.trim();
  const author = document.getElementById('bookAuthor').value.trim();
  const copies = parseInt(document.getElementById('bookCopies').value);
  if (!title || !author || isNaN(copies)) { alert('Fill all book fields'); return; }
  const books = db.get('books') || [];
  books.push({
    title,
    author,
    copies,
    status: "Available"
  });
  db.set('books', books);
  renderBooks();
  updateDashboardCards();
  document.getElementById('bookTitle').value = '';
  document.getElementById('bookAuthor').value = '';
  document.getElementById('bookCopies').value = '';
});

// Add Student
document.getElementById('addStudent')?.addEventListener('click', () => {
  const name = document.getElementById('studentName').value.trim();
  const email = document.getElementById('studentEmail').value.trim();
  const department = document.getElementById('studentDepartment').value.trim();
  const year = document.getElementById('studentYear').value.trim();
  if (!name || !email || !department || !year) return alert('Fill all student fields');
  const students = db.get('students'); students.push({ name, email, department, year }); db.set('students', students);

  renderStudents();
  document.getElementById('studentName').value = '';
  document.getElementById('studentEmail').value = '';
  document.getElementById('studentDepartment').value = '';
  document.getElementById('studentYear').value = '';
});

// Delete & Edit Books
window.deleteBook = (i) => {
  const books = db.get('books'); books.splice(i, 1); db.set('books', books); renderBooks();
}
window.editBook = (i) => {
  const books = db.get('books'); const b = books[i];
  const title = prompt('Title:', b.title); if (!title) return;
  const author = prompt('Author:', b.author); if (!author) return;
  const copies = parseInt(prompt('Copies:', b.copies)); if (isNaN(copies)) return;
  books[i] = {
    ...books[i],
    title,
    author,
    copies
  };
  db.set('books', books);
  renderBooks();
  renderDashboardBooks();
  updateDashboardCards();
}

// Delete & Edit Students
window.deleteStudent = (i) => {
  const students = db.get('students'); students.splice(i, 1); db.set('students', students); renderStudents();
}
window.editStudent = (i) => {
  const students = db.get('students'); const s = students[i];
  const name = prompt('Name:', s.name); if (!name) return;
  const email = prompt('Email:', s.email); if (!email) return;
  const department = prompt('Department:', s.department); if (!department) return;
  const year = prompt('Year:', s.year); if (!year) return;
  students[i] = { name, email, department, year }; db.set('students', students); renderStudents();
}

// Init
db.init();
renderBooks();
renderStudents();

document.addEventListener("DOMContentLoaded", () => {
  renderDashboardBooks();
  renderDashboardStudents();
  renderDashboardLoans();
  updateDashboardCards();
});


window.addEventListener("storage", () => {
  location.reload();
});
renderDashboardReservations();



