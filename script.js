document.addEventListener('DOMContentLoaded', function () {
  const signUpForm = document.getElementById('sign-up-form');
  const greeting = document.getElementById('greeting');
  const relationshipStatusDisplay = document.getElementById(
    'relationship-status-display'
  );
  const dashboard = document.querySelector('.dashboard');
  const signUpPage = document.querySelector('.sign-up');
  const categories = document.querySelectorAll('.section');
  let seletedCategory = null;
  let selectedCategoryName = null;
  const API_ENDPOINT = 'https://content-api-xrvt.onrender.com/api/content/';
  const getAdvicebtn = document.getElementById('get-advice');

  categories.forEach((category) => {
    category.addEventListener('click', function () {
      if (seletedCategory) {
        seletedCategory.classList.remove('selected');
      }
      seletedCategory = category;
      seletedCategory.classList.add('selected');
      selectedCategoryName = category.id;
      console.log(seletedCategory.id, 'In script');
      console.log(selectedCategoryName, 'In script');
    });
  });

  // Sign up form submission logic
  signUpForm.addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission (page reload)

    const name = document.getElementById('name').value;
    const relationshipStatus = document.getElementById(
      'relationship-status'
    ).value;

    if (name && relationshipStatus) {
      // Set greeting and status on the dashboard
      greeting.textContent = `Hi, ${name}!`;
      relationshipStatusDisplay.textContent = `You are currently: ${
        relationshipStatus.charAt(0).toUpperCase() + relationshipStatus.slice(1)
      }`;

      // Switch from sign-up form to dashboard
      signUpPage.style.display = 'none';
      dashboard.style.display = 'block';
    } else {
      alert('Error signing up. Please try again!');
    }
  });

  // Handle Get Advice button click
  getAdvicebtn.addEventListener('click', function () {
    // Fetch advice from the API
    this.innerText = 'Loading....';
    fetch(`${API_ENDPOINT}${selectedCategoryName}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'Once fetchedd');

        document.getElementById('advise-display').textContent = data;
      })
      .catch((error) => {
        console.error('Error fetching advice:', error);
      })
      .finally(() => {
        this.innerText = 'Get Advice';
      });
  });
});
