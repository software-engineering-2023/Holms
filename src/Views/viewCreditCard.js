const myArray = ["100001010010", "013344874738", "283883739873", "All"];
// Your existing code

const Header = ["Transaction ID", "Transaction Date", "Transaction Type", "Credited Amount", "Debited Amount", "Subsequent Balance of Account", "Description"];
// Your existing code

const select = document.getElementById("mySelectSource");

for (let i = 0; i < myArray.length; i++) {
  const option = document.createElement("option");
  option.text = myArray[i];
  option.value = myArray[i];
  select.add(option);
}

function updateTable() {
  const selectedValue = select.value;
  var table = document.getElementById("myTable");

  table.innerHTML = "";

  if (selectedValue === "") {
    table.style.display = "none";
  } else {
    for (let i = 0; i < myArray.length; i++) {
      if (selectedValue === myArray[i]) {
        var header = table.insertRow();
        for (let m = 0; m < Header.length; m++) {
          var cell = header.insertCell();
          cell.innerHTML = Header[m];
        }

        var transactions = [];

        // Add the relevant transactions array based on the selectedValue
        if (selectedValue === "100001010010") {
          transactions = myTransactions;
        } else if (selectedValue === "013344874738") {
          transactions = myTransactions2;
        } else if (selectedValue === "283883739873") {
          transactions = myTransactions3;
        } else if (selectedValue === "All") {
          transactions = myTransactions.concat(myTransactions2, myTransactions3);
        }

        for (let k = 0; k < transactions.length; k++) {
          var current = transactions[k];
          var row = table.insertRow();
          var cell1 = row.insertCell();
          cell1.innerHTML = current.ID;
          var cell2 = row.insertCell();
          cell2.innerHTML = current.Date;
          var cell3 = row.insertCell();
          cell3.innerHTML = current.Type;
          var cell4 = row.insertCell();
          cell4.innerHTML = current.Credit;
          var cell5 = row.insertCell();
          cell5.innerHTML = current.Debit;
          var cell6 = row.insertCell();
          cell6.innerHTML = current.Balance;
          var cell7 = row.insertCell();
          cell7.innerHTML = current.Desc;
        }
        break;
      } else {
        table.style.display = "none";
      }
    }
    table.style.display = "table";
  }
}
