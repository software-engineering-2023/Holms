const myArray = ["100001010010", "013344874738", "283883739873"];
const currencies = ["EGP", "USD", "EGP"];

const balances = ["200000", "300", "10"];

const select1 = document.getElementById("mySelectSource");
const select2 = document.getElementById("mySelectDest");


for (let i = 0; i < myArray.length; i++) {
    const option = document.createElement("option");
    option.text = myArray[i];
    option.value = myArray[i];
    select1.add(option);
    const option2 = option.cloneNode(true);
    select2.add(option2);

}


function checkCurrency() {

    const selectedValueSource = select1.value;
    const selectedValueDest = select2.value;
    if (selectedValueDest === selectedValueSource) {
        alert("Cannot choose the same account as source and destination");
    } else {
        var sourceCurrency;
        var destCurrency;

        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i] === selectedValueSource) {
                sourceCurrency = currencies[i];

            }
            if (myArray[i] === selectedValueDest) {
                destCurrency = currencies[i];
            }
        }
        if (sourceCurrency != destCurrency) {
            alert("Source and destination accounts are not of the same curency");
        }
        else{
            alert("Transfer Successfull!");

        }



    }
} function updateBalance() {
    const selectedValueSource = select1.value;
    const selectedValueDest = select2.value;
    const label1 = document.getElementById("balanceSource");
    const label2 = document.getElementById("balanceDest");
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === selectedValueSource) {
            label1.textContent = balances[i].concat(" ", currencies[i]);

        }
        if (myArray[i] === selectedValueDest) {
            label2.textContent=balances[i].concat(" ", currencies[i]);
        }
    }
}


