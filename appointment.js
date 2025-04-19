document.addEventListener("DOMContentLoaded", () => {
    loadAppointments(); // Load stored appointments on page load
});

function bookAppointment() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let details = document.getElementById("details").value;

    if (!name || !email || !date || !time) {
        alert("Please fill all required fields!");
        return;
    }

    let appointment = { name, email, date, time, details };
    saveAppointment(appointment);
    displayAppointments();

    // Hide booking box & show appointments
    document.getElementById("bookingBox").style.display = "none";
    document.getElementById("appointments").style.display = "block";
}

// Store appointments in localStorage
function saveAppointment(appointment) {
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));
}

// Display appointments from localStorage
function displayAppointments() {
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    let appointmentList = document.getElementById("appointmentList");
    appointmentList.innerHTML = ""; // Clear previous content

    appointments.forEach(appointment => {
        let appointmentCard = `
            <div class="appointment-card">
                <h3>${appointment.name}</h3>
                <p><strong>Email:</strong> ${appointment.email}</p>
                <p><strong>Date:</strong> ${appointment.date}</p>
                <p><strong>Time:</strong> ${appointment.time}</p>
                <p><strong>Details:</strong> ${appointment.details || "No additional details"}</p>
            </div>
        `;
        appointmentList.innerHTML += appointmentCard;
    });
}

// Show booking form again
function showBookingForm() {
    document.getElementById("bookingBox").style.display = "block";
}
function homeForm() {
    window.open('index.html');
}
// Keep appointments when going home
function goHome() {
    alert("Redirecting to Home Page!");
    displayAppointments();
    document.getElementById("bookingBox").style.display = "none";
}
document.getElementById("existingHomeButton").addEventListener("click", function() {
    window.location.href = "index.html";
});