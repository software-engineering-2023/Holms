const myArray = ["100001010010", "013344874738", "283883739873"];
const existing = ["Hussein H", "Zeyad Z", "Layla LL"];
const emails = ["hhh@gmail", "zz@yahoo.com", "lolo@gmail.com"];
const names = ["hussein hany", "zeyad zeyad", "layla layaly"];
const accounts = [129029383928, 3789232987, 93847823787];

const select = document.getElementById("mySelectSource");

for (let i = 0; i < myArray.length; i++) {
    const option = document.createElement("option");
    option.text = myArray[i];
    option.value = myArray[i];
    select.add(option);

}
function updateTable(){
    const selectedValue= select.value;
    var table = document.getElementById("myTable");
    var tbody = table.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
    for (let i=0;i<myArray.length;i++){
        if (selectedValue === ""){
              
 
        }
        if(selectedValue === myArray[i]){

        }
    }
}