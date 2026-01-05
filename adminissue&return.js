const db = {
  get(k) { try { return JSON.parse(localStorage.getItem(k)) } catch (e) { return null } },
  set(k, v) { localStorage.setItem(k, JSON.stringify(v)) },
  init() {
    if (!this.get('loans')) this.set('loans', []);
    if (!this.get('books')) this.set('books', []);
    if (!this.get('students')) this.set('students', []);
  }
};

db.init();

function renderLoans() {
  const loansTableBody = document.querySelector('#loansTable tbody');
  const loans = db.get('loans') || [];
  loansTableBody.innerHTML = '';
  loans.forEach((l, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${l.student}</td>
      <td>${l.book}</td>
      <td>${l.status}</td>
      <td>
      ${l.status === "Issued"
        ? `<button class='btn success' onclick='returnLoan(${i})'>Return</button>`
        : ''}

        <button class='btn danger' onclick='deleteLoan(${i})'>Delete</button>
      </td>`;
    loansTableBody.appendChild(tr);
  });
}

document.getElementById('addLoan')?.addEventListener('click', () => {
  const student = document.getElementById('loanStudent').value.trim();
  const book = document.getElementById('loanBook').value.trim();
  if (!student || !book) return alert("Fill both fields");

  const loans = db.get('loans') || [];
  const books = db.get('books') || [];
  const students = db.get('students') || [];

  const bookObj = books.find(b => b.title === book);
  const studentObj = students.find(s => s.name === student);

  if (!bookObj) return alert("Book not found");
  if (!studentObj) return alert("Student not found");
  if (bookObj.status === "Borrowed") return alert("Book already issued");

  // Update book & student
  bookObj.status = "Borrowed";
  bookObj.issuedTo = student;
  studentObj.booksBorrowed = (studentObj.booksBorrowed || 0) + 1;

  // ✅ ADD LOAN (CORRECT WAY)
  loans.push({
    student: student,
    book: book,
    status: "Issued",
    issueDate: new Date().toLocaleDateString(),
    returnDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()
  });

  // 🔗 AUTO-UPDATE STUDENT RESERVATION
const reservations = JSON.parse(localStorage.getItem("studentReservations")) || [];

reservations.forEach(r => {
  if (
    r.student.toLowerCase() === student.toLowerCase() &&
    r.book.toLowerCase() === book.toLowerCase()
  ) {
    r.status = "Issued";
  }
});

localStorage.setItem("studentReservations", JSON.stringify(reservations));


  // Save everything
  db.set('books', books);
  db.set('students', students);
  db.set('loans', loans);

  renderLoans();
  window.dispatchEvent(new Event("storage"));

  document.getElementById('loanStudent').value = '';
  document.getElementById('loanBook').value = '';
});



window.returnLoan = (i) => {
  const loans = db.get('loans') || [];
  const books = db.get('books') || [];
  const students = db.get('students') || [];

  const loan = loans[i];
  loan.status = "Returned";

  // 🔗 UPDATE RESERVATION ON RETURN
const reservations = JSON.parse(localStorage.getItem("studentReservations")) || [];

reservations.forEach(r => {
  if (
    r.student.toLowerCase() === loan.student.toLowerCase() &&
    r.book.toLowerCase() === loan.book.toLowerCase()
  ) {
    r.status = "Returned";
  }
});

localStorage.setItem("studentReservations", JSON.stringify(reservations));


  const bookObj = books.find(b => b.title === loan.book);
  const studentObj = students.find(s => s.name === loan.student);

  if (bookObj) {
    bookObj.status = "Available";
    bookObj.issuedTo = "";
  }

  if (studentObj) {
    studentObj.booksBorrowed = Math.max(0, (studentObj.booksBorrowed || 1) - 1);
  }

  db.set('books', books);
  db.set('students', students);
  db.set('loans', loans);
  renderLoans();
  window.dispatchEvent(new Event("storage"));
}



window.deleteLoan = (i) => {
  const loans = db.get('loans') || [];
  const books = db.get('books') || [];
  const students = db.get('students') || [];

  const loan = loans[i];

  const bookObj = books.find(b => b.title === loan.book);
  const studentObj = students.find(s => s.name === loan.student);

  if (bookObj) {
    bookObj.status = "Available";
    bookObj.issuedTo = "";
  }

  if (studentObj) {
    studentObj.booksBorrowed = Math.max(0, (studentObj.booksBorrowed || 1) - 1);
  }

  loans.splice(i, 1);

  db.set('books', books);
  db.set('students', students);
  db.set('loans', loans);

  renderLoans();
  window.dispatchEvent(new Event("storage"));
};

// 🔁 Render existing loans when page loads
document.addEventListener("DOMContentLoaded", () => {
  renderLoans();
});


