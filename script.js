
    const nameModal = document.getElementById('nameModal');
    const nameInput = document.getElementById('userName');
    const nameSubmitBtn = document.getElementById('nameSubmitBtn');
    const mainContent = document.getElementById('mainContent');
    const greetingText = document.getElementById('greetingText');
    const getAdviceBtnEl = document.getElementById('getAdviceButton')


    // Handle name submission
    nameSubmitBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();

        if (name) {
            // Display personalized greeting at the top of the shadow box
            greetingText.textContent = `Hi ${name}, You are one step to having your dream relationship. let's get you fixed!!`;

            // Hide modal and show main content
            nameModal.style.display = 'none';
            mainContent.style.display = 'block';
        } else {
            alert('Please enter your name!');
        }
    });


 // Function to fetch advice from the Advice Slip API
 getAdviceBtnEl.addEventListener('click', () => {
    adviceBox.textContent = 'Loading....'
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const adviceText = data.slip.advice;
            adviceBox.textContent = adviceText;
            adviceBox.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching advice:', error);
            adviceBox.textContent = 'Failed to load advice. Please try again later.';
            adviceBox.style.display = 'block';
        });
});
