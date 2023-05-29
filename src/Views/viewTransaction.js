const myArray = ["100001010010", "013344874738", "283883739873","All"];

const accounts = [129029383928, 3789232987, 93847823787];
const trans1 = { ID: "19202", Date: "1/1/2023", Type: "Credit", Credit: 100, Debit: 0, Balance: 10000, Desc: "Transfer" };
const trans2 = { ID: "19212", Date: "10/11/2022", Type: "Debit", Credit: 0, Debit: 250, Balance: 10250, Desc: "Bill Payment" };
const trans3 = { ID: "19222", Date: "1/5/2023", Type: "Credit", Credit: 9990, Debit: 0, Balance: 10, Desc: "Transfer" };

const trans4 = { ID: "20202", Date: "1/1/2023", Type: "Credit", Credit: 100, Debit: 0, Balance: 10000, Desc: "Transfer" };
const trans5 = { ID: "29212", Date: "10/11/2022", Type: "Debit", Credit: 0, Debit: 250, Balance: 10250, Desc: "Bill Payment" };
const trans6 = { ID: "20222", Date: "1/5/2023", Type: "Debit", Credit: 9990, Debit: 0, Balance: 10, Desc: "Transfer" };

const trans7 = { ID: "21202", Date: "1/1/2021", Type: "Credit", Credit: 100, Debit: 0, Balance: 10000, Desc: "Transfer" };
const trans8 = { ID: "21212", Date: "1/5/2023", Type: "Credit", Credit: 0, Debit: 250, Balance: 10250, Desc: "Bill Payment" };
const trans9 = { ID: "21222", Date: "1/5/2023", Type: "Credit", Credit: 9990, Debit: 0, Balance: 10, Desc: "Transfer" };

const Header=["Transaction ID","Transaction Date","Transaction Type","Credited Amount","Debited Amount","Subsequent Balance of Account","Description"];
const myTransactions = [trans1, trans2, trans3];
const myTransactions2 = [trans4, trans5, trans6];
const myTransactions3 = [trans7, trans8, trans9];
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
                var header=table.insertRow();
                for (let m=0;m<Header.length;m++){
                    var cell = header.insertCell();
                    cell.innerHTML= Header[m];
                }var transactions = [];

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
            }else{
                table.hide();
            }

        }
    }
}
