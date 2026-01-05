const db = {
  get(k) {
    try { return JSON.parse(localStorage.getItem(k)) } 
    catch (e) { return [] }
  }
};

document.getElementById("viewBooksBtn").addEventListener("click", loadMyBooks);

function loadMyBooks() {
  const name = document.getElementById("studentName").value.trim();
  if (!name) {
    alert("Please enter your name");
    return;
  }

  const loans = JSON.parse(localStorage.getItem("loans")) || [];

  const myLoans = loans.filter(
    l => l.student.toLowerCase() === name.toLowerCase()
  );

  const issuedBooks = myLoans.filter(l => l.status === "Issued");
  const returnedBooks = myLoans.filter(l => l.status === "Returned");

  populateTable("issuedTable", issuedBooks);
  populateTable("returnedTable", returnedBooks);
}


function populateTable(tableId, books) {
  const tbody = document.querySelector(`#${tableId} tbody`);
  tbody.innerHTML = "";

  if (books.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3">No records found.</td></tr>`;
    return;
  }

  books.forEach(book => {
    tbody.innerHTML += `
      <tr>
        <td>${book.book}</td>
        <td>${book.issueDate || "-"}</td>
        <td>${book.returnDate || "-"}</td>
      </tr>
    `;
  });
}
