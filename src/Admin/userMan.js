
  function addBranch() {
    var branchName = document.getElementById("branchName").value;
    var branchAddress = document.getElementById("branchAddress").value;
    var branchPhone = document.getElementById("branchPhone").value;
    alert("Adding branch: " + branchName + "\nAddress: " + branchAddress + "\nPhone: " + branchPhone);
  }

  function removeBranch() {
    var branchName = document.getElementById("branchName").value;
    alert("Removing branch: " + branchName);
  }

  function addUser() {
    var username = document.getElementById("username").value;
    var userEmail = document.getElementById("userEmail").value;
    var userRole = document.getElementById("userRole").value;
    var userAddress = document.getElementById("userAddress").value;

    if (username.trim() === '' || userEmail.trim() === '' || userRole.trim() === '' || userAddress.trim() === '') {
      alert("Please fill in all fields.");
    } else {
      alert("Adding user: " + username + "\nEmail: " + userEmail + "\nRole: " + userRole + "\nAddress: " + userAddress);
    }
  }

  function removeUser() {
    var username = document.getElementById("username").value;

    if (username.trim() === '') {
      alert("Please enter the username.");
    } else {
      alert("Removing user: " + username);
    }
  }

  function unblockUser() {
    var username = document.getElementById("username").value;

    if (username.trim() === '') {
      alert("Please enter the username.");
    } else {
      alert("Unblocking user: " + username);
    }
  }

  function blockUser() {
    var username = document.getElementById("username").value;

    if (username.trim() === '') {
      alert("Please enter the username.");
    } else {
      alert("Blocking user: " + username);
    }
  }
  async function fetchClientDetails() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const clientId = urlSearchParams.get('clientId');
    
    
    // Fetch data using the client ID (e.g., using fetch API or a library like Axios)
    const response = await fetch(`http://localhost:3000/clients/${clientId}`); // Adjust API endpoint
    const clientData = await response.json();
    const client = clientData.data.currClient;
    const infoContainer = document.getElementById("transfer");
    const fullInfo = document.getElementById("transfer4")
    // Create client image element
    const pic = document.createElement('img');
    pic.src = client.gender === "female" ? "../assets/woman.png" : "../assets/man.png";
    pic.id = "client-image";

    
    // Create client detail elements
    const nameCell = createDetailElement('Name', client.name);
    nameCell.id= "name"
    const fullName = document.getElementById('nameInfo');
    fullName.textContent =  client.name;
    const email = document.getElementById('emailInfo');
    email.textContent =  client.email;
    const mobile = document.getElementById('mobileInfo');
    mobile.textContent =  client.mobileNumber;
    const address = document.getElementById('addressInfo');
    address.textContent =  client.address;
    const status = document.getElementById('statusInfo');
    status.textContent =  client.status;

    const usernameCell = createDetailElement('Username', client.username);
    const dateCell = createDetailElement('Joined Since', new Date(client.joinedSince).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" }));

    const response2 = await fetch(`http://localhost:3000/clients/${clientId}/myAccounts`); // Adjust API endpoint
    const accountData = await response2.json();
    const accounts = accountData.data.accounts;

    const response3 = await fetch(`http://localhost:3000/clients/${clientId}/myLoans`); // Adjust API endpoint
    const loanData = await response3.json();
    const loans = loanData.data.loans;
    
    var total=await displayAccounts(accounts);
    var due = await displayLoans(loans);
    // Create manage button
    const manageButton = document.createElement('button');
    manageButton.className = "manage-button";
    manageButton.id = "manage-btn";
    manageButton.textContent = client.status == "unblocked"?"Block":"Unblock";
    manageButton.style.backgroundColor = client.status == "unblocked"?"red":"green"
    // manageButton.addEventListener('click', () => {
    //     // Redirect to details page with client ID
    //     window.location.href = `./userManagement.html?clientId=${client._id}`; // Adjust URL as needed
    // });

    // Append elements to info container
    infoContainer.appendChild(pic);
    infoContainer.appendChild(nameCell);
    // fullInfo.appendChild(emailCell);
    infoContainer.appendChild(usernameCell);
    // fullInfo.appendChild(dateCell);
    infoContainer.appendChild(manageButton);
    var ctx = document.getElementById('myDoughnutChart').getContext('2d');


  // Define the data for the chart
  var data = {
    labels: ['Owed', 'Have'],
    datasets: [{
      data: [due, total],
      backgroundColor: ['#ff6384', '#36a2eb']
    }]
  };

  // Define options for the chart
  var options = {
    responsive: true,
    maintainAspectRatio: false
  };

  // Create the doughnut chart
  var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
  });
}

function createDetailElement(label, value) {
    const detailRow = document.createElement('div');
    detailRow.classList.add('detail-row');

    // const labelElement = document.createElement('div');
    // labelElement.classList.add('detail-label');
    // labelElement.textContent = label + ':';

    const valueElement = document.createElement('div');
    valueElement.classList.add('detail-value');
    valueElement.textContent = value;

    // detailRow.appendChild(labelElement);
    detailRow.appendChild(valueElement);

    return detailRow;
}

async function displayAccounts(accounts) {
  const tableBody = document.getElementById('accountTableBody'); // Replace with your table body ID
  // tableBody.innerHTML = ''; // Clear existing content
  var totalBalance=0;
  
  await accounts.forEach(account => {

    const tableRow = document.createElement('tr');
    console.log(account.accountNumber)
    
    
    const accNumCell = document.createElement('td');
    accNumCell.textContent = account.accountNumber; // Replace 'name' with your actual client property
    const statusCell = document.createElement('td');
    statusCell.textContent = account.status; // Replace 'name' with your actual client property
    
    totalBalance += account.balance;

   
    tableRow.appendChild(accNumCell);
    tableRow.appendChild(statusCell);
 
    tableBody.appendChild(tableRow);
  });
  return totalBalance;
}
async function displayLoans(loans) {
  const tableBody = document.getElementById('loanTableBody'); // Replace with your table body ID
  // tableBody.innerHTML = ''; // Clear existing content
  
  // const progress = document.getElementById("pbar");
  // var totalBalance = 0;
  // progress.style.width = accounts[0].balance + 50 +"%";
  // progress.innerText= 
  var dueAmount=0;
  await loans.forEach(loan => {

    const tableRow = document.createElement('tr');
    // console.log(loan.loanPurpose)
    
    dueAmount+=loan.dueAmount;
    const typeCell = document.createElement('td');
    typeCell.textContent = loan.loanPurpose; // Replace 'name' with your actual client property
    const statusCell = document.createElement('td');
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress');
    
    progressBar.innerHTML = `
    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: ${((loan.loanedAmount-loan.dueAmount)/loan.loanedAmount)*100}%" aria-valuenow="${loan.dueAmount/loan.loanedAmount}" aria-valuemin="0" aria-valuemax="100"
    data-toggle="tooltip" data-placement="bottom" title="${loan.dueAmount}/${loan.loanedAmount}">${((loan.loanedAmount-loan.dueAmount)/loan.loanedAmount)*100}% </div>
    `;

// Append the progress bar to the <td> element
    statusCell.appendChild(progressBar);


   
    tableRow.appendChild(typeCell);
    tableRow.appendChild(statusCell);
 
    tableBody.appendChild(tableRow);
  });
  return dueAmount;
}

    fetchClientDetails();
