document.addEventListener('DOMContentLoaded', () => {
    const nameModal = document.getElementById('nameModal');
    const nameInput = document.getElementById('userName');
    const nameSubmitBtn = document.getElementById('nameSubmitBtn');
    const mainContent = document.getElementById('mainContent');
    const greetingText = document.getElementById('greetingText');

    // Handle name submission
    nameSubmitBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();

        if (name) {
            // Display personalized greeting at the top of the shadow box
            greetingText.textContent = `Hi ${name}, You are one step to having your dream realtionship. let's get you fixed!!`;

            // Hide modal and show main content
            nameModal.style.display = 'none';
            mainContent.style.display = 'block';
        } else {
            alert('Please enter your name!');
        }
    });
});

