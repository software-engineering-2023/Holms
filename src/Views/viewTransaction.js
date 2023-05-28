const myArray = ["100001010010", "013344874738", "283883739873"];
const existing = ["Hussein H", "Zeyad Z", "Layla LL"];
const emails = ["hhh@gmail", "zz@yahoo.com", "lolo@gmail.com"];
const names = ["hussein hany", "zeyad zeyad", "layla layaly"];
const accounts = [129029383928, 3789232987, 93847823787];
const trans1 =  { "19202",  "1/1/2023",  "credit", 100, DebitAmount: 0, Balance: 10000, Description: "Transfer" };
const trans2 = { "19212",  "10/11/2022",  "debit",  0, DebitAmount: 250, Balance: 10250, Description: "Bill Payment" };
const trans3 = { "19222",  "1/5/2023",  "credit",  9990, DebitAmount: 0, Balance: 10, Description: "Transfer" };
const myTransactions = { trans1, trans2, trans3 };
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
    var tbody = table.getElementsByTagName("tbody")[0];
    table.innerHTML = "";
    for (let i = 0; i < myArray.length; i++) {
        if (selectedValue === "") {

            table.hide();
        }
        if (selectedValue === myArray[i]) {
            for (var i = 0; i < myTransactions.length; i++) {
                var row = table.insertRow();
            }for(var j = 0; j < 7; j++) {
                var cell = row.insertCell();
                if (i)
                cell.innerHTML = "Row " + (i+1) + ", Column " + (j+1);
              }
        }

    }


    // Clear the current table
    table.innerHTML = "";

    // Create a new table based on the selected option

    // Create a 2x2 table

    for (var j = 0; j < 2; j++) {
        var cell = row.insertCell();
        cell.innerHTML = "Row " + (i + 1) + ", Column " + (j + 1);
    }
}
break;
        
      case "option2":