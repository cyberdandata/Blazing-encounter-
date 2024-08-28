

// scripts.js

document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // Get the values from the form fields
    const ceo_amount = document.getElementById('ceo_amount').value;
    const finance_amount = document.getElementById('finance_amount').value;
    const ec_amount = document.getElementById('ec_amount').value;
    const ministry_amount = document.getElementById('ministry_amount').value;
    const administrator_amount = document.getElementById('administrator_amount').value;
    const mission_amount = document.getElementById('mission_amount').value;
    const release_date = document.getElementById('release-date').value;

    // Create a record object
    const record = {
        ceo_amount,
        finance_amount,
        ec_amount,
        ministry_amount,
        administrator_amount,
        mission_amount,
        release_date
    };

    // Save the record to local storage
    let records = JSON.parse(localStorage.getItem('records')) || [];
    records.push(record);
    localStorage.setItem('records', JSON.stringify(records));

    // Clear the form fields
    document.getElementById('dataForm').reset();

    // Display the records in the table
    displayRecords();
});
