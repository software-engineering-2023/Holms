
const myArrayIN = ["100001010010", "013344874738", "283883739873"];
const existingIN = ["Hussein H", "Zeyad Z", "Layla LL"];
const emailsIN = ["hhh@gmail", "zz@yahoo.com", "lolo@gmail.com"];
const namesIN = ["hussein hany", "zeyad zeyad", "layla layaly"];
const accountsIN = [129029383928, 3789232987, 93847823787];

const select2IN = document.getElementById("mySelectDest");
const select3IN = document.getElementById("mySelectExisiting");

for (let j = 0; j < existingIN.length; j++) {
    const option1 = document.createElement("option");
    option1.text = existingIN[j];
    option1.value = existingIN[j];
    select3IN.add(option1);
}
for (let i = 0; i < myArrayIN.length; i++) {
    const option = document.createElement("option");
    option.text = myArrayIN[i];
    option.value = myArrayIN[i];
    select2IN.add(option);
}

function autofill() {
    const dropdown = document.getElementById("mySelectExisiting");
    const textbox1 = document.getElementById("paccount");
    const textbox2 = document.getElementById("pname");
    const textbox3 = document.getElementById("pemail");
    const selectedValueexistingIN = select3IN.value;
    for (let k = 0; k < existingIN.length; k++) {
        if (selectedValueexistingIN === existingIN[k]) {
            textbox1.value = accountsIN[k];
            textbox2.value = namesIN[k];
            textbox3.value = emailsIN[k];
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
        for (let i = 0; i < existingIN.length; i++) {
            if (pnameValue === existingIN[i] && pemailValue === emailsIN[i] && paccountValue === accountsIN[i].toString()) {
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
