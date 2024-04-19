

const myArray = ["100001010010", "013344874738", "283883739873"];
const banks= ["CIB","QNB","HSBC"];
const existing = ["Hussein H", "Zeyad Z", "Layla LL"];
const emails = ["hhh@gmail", "zz@yahoo.com", "lolo@gmail.com"];
const names = ["hussein hany", "zeyad zeyad", "layla layaly"];
const accounts = [129029383928, 3789232987, 93847823787];
const iban = [63636,828282,15265262];
const select2 = document.getElementById("mySelectDestInternational");
const select3 = document.getElementById("mySelectExisitingInternational");


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
    const dropdown = document.getElementById("mySelectExisitingInternational");
    const textbox1 = document.getElementById("paccount");
    const textbox2 = document.getElementById("pname");
    const textbox3 = document.getElementById("pemail");
    const textbox4 = document.getElementById("pbank");
    const textbox5 = document.getElementById("pIBAN");
    const selectedValueExisting = select3.value;
    for (let k = 0; k < existing.length; k++) {
        if (selectedValueExisting === existing[k]) {
            textbox1.value = accounts[k];
            textbox2.value = names[k];
            textbox3.value = emails[k];
            textbox4.value = banks[k];
            textbox5.value = iban[k];
            break;
        }

    }
} document.getElementById("mybutton").addEventListener("click", function() {
    var paccountValue = document.getElementById("paccount").value;
    var pIBANValue = document.getElementById("pIBAN").value;
    var pbankValue = document.getElementById("pbank").value;
    var pnameValue = document.getElementById("pname").value;
    var pemailValue = document.getElementById("pemail").value;
    var amountValue = document.getElementById("amount").value;
    var dateValue = document.getElementById("date").value;
    
    if (paccountValue && pIBANValue && pbankValue && pnameValue && pemailValue && amountValue && dateValue) {
        alert("Successful: All fields are filled correctly!");
    } else {
        alert("Error: Please fill in all the fields!");
    }
});