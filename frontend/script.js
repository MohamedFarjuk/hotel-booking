document.getElementById("bookingForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const message = document.getElementById("message");

    try {
        const response = await fetch("http://localhost:5000/api/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, checkin, checkout })
        });

        const data = await response.json();
        if (response.ok) {
            message.textContent = "Booking successful!";
            message.style.color = "green";
        } else {
            message.textContent = data.msg;
            message.style.color = "red";
        }
    } catch (error) {
        message.textContent = "welcome to shaika Hotel";
        message.style.color = "red";
    }
});
