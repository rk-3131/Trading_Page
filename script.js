// Function to display the current date
function displayCurrentDate() {
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    document.getElementById('currentDate').textContent = dateString;
}

// Function to update entryEditable based on input values
function updateEntryEditable() {
    const target = parseFloat(document.getElementById('target').value) || 0;
    const entry = parseFloat(document.getElementById('entryPoint').value) || 0;
    const average1 = parseFloat(document.getElementById('average1').value) || 0;
    const average2 = parseFloat(document.getElementById('average2').value) || 0;

    const absSum = Math.abs(entry - target) + Math.abs(average1 - target) + Math.abs(average2 - target);
    document.getElementById('entryEditable').value = absSum.toFixed(2); // Update entryEditable field
}

// Function to calculate profit or loss and display it below the Calculate button
function calculateProfitLoss() {
    // Calculate the required value
    const target = parseFloat(document.getElementById('target').value) || 0;
    const average1 = parseFloat(document.getElementById('average1').value) || 0;
    const average2 = parseFloat(document.getElementById('average2').value) || 0;
    const stoploss = parseFloat(document.getElementById('stoploss').value) || 0;

    const absSum = Math.abs(average1 - target) + Math.abs(average2 - target) + Math.abs(stoploss - target);

    // Display the result below the Calculate button
    const profitLossDiv = document.getElementById('profitLoss');
    profitLossDiv.textContent = `Calculated Value: ${absSum.toFixed(2)}`;
}

// Call the function to display the date when the page loads
window.onload = displayCurrentDate;

// Attach event listeners to input fields to update entryEditable dynamically
document.getElementById('target').addEventListener('input', updateEntryEditable);
document.getElementById('entryPoint').addEventListener('input', updateEntryEditable);
document.getElementById('average1').addEventListener('input', updateEntryEditable);
document.getElementById('average2').addEventListener('input', updateEntryEditable);
document.getElementById('stoploss').addEventListener('input', updateEntryEditable);
