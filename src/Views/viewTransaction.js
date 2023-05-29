const myArray = ["100001010010", "013344874738", "283883739873"];
const existing = ["Hussein H", "Zeyad Z", "Layla LL"];
const emails = ["hhh@gmail", "zz@yahoo.com", "lolo@gmail.com"];
const names = ["hussein hany", "zeyad zeyad", "layla layaly"];
const accounts = [129029383928, 3789232987, 93847823787];
const trans1 = { ID: "19202", Date: "1/1/2023", Type: "credit", Credit: 100, Debit: 0, Balance: 10000, Desc: "Transfer" };
const trans2 = { ID: "19212", Date: "10/11/2022", Type: "debit", Credit: 0, Debit: 250, Balance: 10250, Desc: "Bill Payment" };
const trans3 = { ID: "19222", Date: "1/5/2023", Type: "credit", Credit: 9990, Debit: 0, Balance: 10, Desc: "Transfer" }
const myTransactions = [trans1, trans2, trans3];
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

        table.hide();
    }
    else {
        for (let i = 0; i < myArray.length; i++) {
            if (selectedValue === myArray[i]) {
                for (let k = 0; k < myTransactions.length; k++) {
                    var current = myTransactions[k];
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
                   

                } break;
            }

        }
    }
}
