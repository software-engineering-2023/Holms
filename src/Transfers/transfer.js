
const myArray = ["100001010010", "013344874738", "283883739873"];
const existing = ["Hussein H", "Zeyad Z", "Layla LL"];
const emails = ["hhh@gmail", "zz@yahoo.com", "lolo@gmail.com"];
const names = ["hussein hany", "zeyad zeyad", "layla layaly"];
const accounts = [129029383928, 3789232987, 93847823787];

const select2 = document.getElementById("mySelectDest");
const select3 = document.getElementById("mySelectExisiting");

for (let j = 0; j < existing.length; j++) {
    const option1 = document.createElement("option");
    option1.text = existing[j];
    option1.value = existing[j];
    select3.add(option1);
}
for (let i = 0; i < myArray.length; i++) {
    const option = document.createElement("option");
    option.text = myArray[i];
    option.value = myArray[i];
    select2.add(option);
}

function autofill() {
    const dropdown = document.getElementById("mySelectExisiting");
    const textbox1 = document.getElementById("paccount");
    const textbox2 = document.getElementById("pname");
    const textbox3 = document.getElementById("pemail");
    const selectedValueExisting = select3.value;
    for (let k = 0; k < existing.length; k++) {
        if (selectedValueExisting === existing[k]) {
            textbox1.value = accounts[k];
            textbox2.value = names[k];
            textbox3.value = emails[k];
            break;
        }
    }
}

document.getElementById("mybutton").addEventListener("click", function() {
    var paccountValue = document.getElementById("paccount").value;
    var pnameValue = document.getElementById("pname").value;
    var pemailValue = document.getElementById("pemail").value;
    var amountValue = document.getElementById("amount").value;
    var dateValue = document.getElementById("date").value;

    if (paccountValue && pnameValue && pemailValue && amountValue && dateValue) {
        var validPayee = false;
        for (let i = 0; i < existing.length; i++) {
            if (pnameValue === existing[i] && pemailValue === emails[i] && paccountValue === accounts[i].toString()) {
                validPayee = true;
                break;
            }
        }
        if (validPayee) {
            alert("Successful: All fields are filled correctly!");
        } else {
            alert("Error: Invalid payee details!");
        }
    } else {
        alert("Error: Please fill in all the fields!");
    }
});
