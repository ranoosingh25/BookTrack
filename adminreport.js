function generateReports(){
  const books = JSON.parse(localStorage.getItem('books') || '[]');
  const students = JSON.parse(localStorage.getItem('students') || '[]');
  const loans = JSON.parse(localStorage.getItem('loans') || '[]');

  const reportDiv = document.getElementById('reportContent');
  reportDiv.innerHTML = `
    <p><strong>Total Books:</strong> ${books.length}</p>
    <p><strong>Total Students:</strong> ${students.length}</p>
    <p><strong>Total Loans:</strong> ${loans.length}</p>
    <p><strong>Issued Loans:</strong> ${loans.filter(l=>l.status==="Issued").length}</p>
    <p><strong>Returned Loans:</strong> ${loans.filter(l=>l.status==="Returned").length}</p>
  `;
}

generateReports();
