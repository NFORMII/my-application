document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.getElementById("sign-up-form");
    const greeting = document.getElementById("greeting");
    const relationshipStatusDisplay = document.getElementById("relationship-status-display");
    const dashboard = document.querySelector(".dashboard");
    const signUpPage = document.querySelector(".sign-up");

    // Sign up form submission logic
    signUpForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent the default form submission (page reload)

        const name = document.getElementById("name").value;
        const relationshipStatus = document.getElementById("relationship-status").value;

        // Send POST request to back-end
        // const response = await fetch("http://localhost:3000/signup", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ name, relationshipStatus }),
        // });

        // const data = await response.json();

        if (name && relationshipStatus) {
            // Set greeting and status on the dashboard
            greeting.textContent = `Hi, ${name}!`;
            relationshipStatusDisplay.textContent = `You are currently: ${relationshipStatus.charAt(0).toUpperCase() + relationshipStatus.slice(1)}`;

            // Switch from sign-up form to dashboard
            signUpPage.style.display = "none";
            dashboard.style.display = "block";
        } else {
            alert('Error signing up. Please try again!');
        }
    });

    // Handle Get Advice button click
    document.getElementById("get-advice").addEventListener("click", function () {
        alert("Get customized advice functionality will go here!");
    });
});
