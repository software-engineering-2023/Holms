const myArrayD = ["100001010010", "013344874738", "283883739873"];
const banksD= ["CIB","QNB","HSBC"];
const existingD = ["Hussein H", "Zeyad Z", "Layla LL"];
const emailsD = ["hhh@gmail", "zz@yahoo.com", "lolo@gmail.com"];
const namesD = ["hussein hany", "zeyad zeyad", "layla layaly"];
const accountsD = [129029383928, 3789232987, 93847823787];
const balancesD=[20000,1000000,500];
const select2D = document.getElementById("mySelectDestDomestic");
const select3D = document.getElementById("mySelectExisitingDomestic");


for (let j = 0; j < existingD.length; j++) {
    const option1 = document.createElement("option");
    option1.text = existingD[j];
    option1.value = existingD[j];
    select3D.add(option1);
}
for (let i = 0; i < myArrayD.length; i++) {
    const option = document.createElement("option");
    option.text = myArrayD[i];
    option.value = myArrayD[i];
    
    select2D.add(option);

}
function autofill() {
    const dropdown = document.getElementById("mySelectExisitingDomestic");
    const textbox1 = document.getElementById("paccount");
    const textbox2 = document.getElementById("pname");
    const textbox3 = document.getElementById("pemail");
    const textbox4 = document.getElementById("pbank");
    const selectedValueexistingD = select3D.value;
    for (let k = 0; k < existingD.length; k++) {
        if (selectedValueexistingD === existingD[k]) {
            textbox1.value = accountsD[k];
            textbox2.value = namesD[k];
            textbox3.value = emailsD[k];
            textbox4.value = banksD[k];
            break;
        }

    }
}