// script.js

// Function to handle form submission
function handleSearchSubmit(event) {
  event.preventDefault(); // Prevent form submission
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.textContent = searchInput.value; // Update the city name with the input value
}

// Add event listener to the form
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
