// Function to set the value of the hidden field to the current date and time
function setCurrentDateTime() {
    var currentDate = new Date();
    var formattedDateTime = currentDate.toISOString(); // Convert date to ISO string format
    document.querySelector('#currentDateTime').value = formattedDateTime;
}

// Call the function when the page loads
window.onload = setCurrentDateTime;