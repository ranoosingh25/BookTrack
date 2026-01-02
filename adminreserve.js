function notifyReservationUpdate() {
  window.dispatchEvent(new Event("reservationUpdated"));
}


document.addEventListener("DOMContentLoaded", () => {
  const adminTable = document.querySelector("#adminTable tbody");

  let reservations = JSON.parse(localStorage.getItem("studentReservations")) || [];

  function renderReservations() {
    adminTable.innerHTML = "";
    reservations.forEach((res, index) => {
      let today = new Date().toISOString().split("T")[0];
      let status = (today > res.returnDate) ? "Completed" : "Active";

      adminTable.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${res.student}</td>
          <td>${res.book}</td>
          <td>${res.pickupDate}</td>
          <td>${res.pickupTime}</td>
          <td>${res.returnDate}</td>
          <td><span class="status ${status.toLowerCase()}">${status}</span></td>
          <td>
            <button class="btn-delete" onclick="deleteReservation(${index})">
              Delete
            </button>
          </td>
        </tr>
      `;
    });
  }

  window.deleteReservation = function(index) {
    reservations.splice(index, 1);
    localStorage.setItem("studentReservations", JSON.stringify(reservations));
    notifyReservationUpdate();
    renderReservations();
  };

  renderReservations();
});

window.addEventListener("storage", () => {
  reservations = JSON.parse(localStorage.getItem("studentReservations")) || [];
  renderReservations();
});

window.addEventListener("reservationUpdated", renderReservations);
