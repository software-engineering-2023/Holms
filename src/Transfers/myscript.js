const myArray1 = ["100001010010", "013344874738", "283883739873"];
const currencies = ["EGP", "USD", "EGP"];

const balances = ["200000", "300", "10"];

const select1O = document.getElementById("mySelectSource");
const select2O = document.getElementById("mySelectDest");


for (let i = 0; i < myArray1.length; i++) {
    const option = document.createElement("option");
    option.text = myArray1[i];
    option.value = myArray1[i];
    select1O.add(option);
    const option2 = option.cloneNode(true);
    select2O.add(option2);

}


function checkCurrency() {

    const selectedValueSource = select1O.value;
    const selectedValueDest = select2O.value;
    if (selectedValueDest === selectedValueSource) {
        alert("Cannot choose the same account as source and destination");
    } else {
        var sourceCurrency;
        var destCurrency;

        for (let i = 0; i < myArray1.length; i++) {
            if (myArray1[i] === selectedValueSource) {
                sourceCurrency = currencies[i];

            }
            if (myArray1[i] === selectedValueDest) {
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
    const selectedValueSource = select1O.value;
    const selectedValueDest = select2O.value;
    const label1 = document.getElementById("balanceSource");
    const label2 = document.getElementById("balanceDest");
    for (let i = 0; i < myArray1.length; i++) {
        if (myArray1[i] === selectedValueSource) {
            label1.textContent = balances[i].concat(" ", currencies[i]);

        }
        if (myArray1[i] === selectedValueDest) {
            label2.textContent=balances[i].concat(" ", currencies[i]);
        }
    }
}


