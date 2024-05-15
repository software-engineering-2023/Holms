function fetchClients() {
    fetch('http://localhost:3000/clients') // Replace '/api/clients' with your actual API endpoint
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
            console.log(data.data)
          displayClients(data.data.clients); // Call function to display data
        } else {
          console.error(data.message); // Handle errors
        }
      })
      .catch(error => console.error(error));
}
fetchClients()

function displayClients(clients) {
  const tableBody = document.getElementById('clientTableBody'); // Replace with your table body ID
  // tableBody.innerHTML = ''; // Clear existing content

  clients.forEach(client => {
    const tableRow = document.createElement('tr');

    const pic = document.createElement('img');
    pic.src = client.gender ==="female"?"../assets/woman.png":"../assets/man.png"
    pic.id="profileImage"
    // Create table cells (tds) for each client property you want to display
    const nameCell = document.createElement('td');
    nameCell.textContent = client.name; // Replace 'name' with your actual client property

    const emailCell = document.createElement('td');
    emailCell.textContent = client.email; // Replace 'email' with your actual client property

    const numberCell = document.createElement('td');
    numberCell.appendChild(pic)
    
    const usernameCell = document.createElement('td');
    usernameCell.textContent = client.username;

    const dateCell = document.createElement('td');
    dateCell.textContent = new Date(client.joinedSince).toLocaleDateString('en-us', {  year:"numeric", month:"short", day:"numeric"}) ;

    const manageCell = document.createElement('td');
    const manageButton = document.createElement('button');
    manageButton.textContent = "Manage";
    
    manageButton.addEventListener('click', () => {
      // Redirect to details page with client ID
      window.location.href = `./userManagement.html?clientId=${client._id}`; // Adjust URL as needed
    });
    manageCell.appendChild(manageButton);

    // Add cells to the table row
    tableRow.appendChild(numberCell);
    tableRow.appendChild(nameCell);
    tableRow.appendChild(usernameCell);
    tableRow.appendChild(emailCell);
    tableRow.appendChild(dateCell);
    tableRow.appendChild(manageCell);
    

    // Add the table row to the table body
    tableBody.appendChild(tableRow);
  });
}