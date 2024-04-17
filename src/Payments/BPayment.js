const myArrayIN = ["100001010010", "013344874738", "283883739873"];
const moneyIN = [10000, 133, 28];
const selectAccount = document.getElementById("account");
for (let i = 0; i < myArrayIN.length; i++) {
  const option = document.createElement("option");
  option.text = myArrayIN[i];
  option.value = myArrayIN[i];
  selectAccount.add(option);
}
function toggleAmountField() {
  var paymentType = document.getElementById("PaymentType").value;
  var amountField = document.getElementById("nameThird");
  var thirdParty = document.getElementById("third-party");
  var internal = document.getElementById("internal");

  if (paymentType === "thirdParty") {
    thirdParty.style.display = "block";
    amountField.style.display = "block";
    internal.style.display = "none";
  } else {
    thirdParty.style.display = "none";
    amountField.style.display = "none";
    internal.style.display = "block";
  }
}

function pay() {
  var amount = document.getElementById("amount").value;
  var account = document.getElementById("account").value;
  var paymentType = document.getElementById("PaymentType").value;
  var nameThird = document.getElementById("nameThird").value;
  var errorMessage = document.getElementById("errorMessage");
  var chosenAccount =myArrayIN.indexOf(account);
  var enoughMoney = moneyIN[chosenAccount] >= amount ? true : false;
  

  var option = {
    animation: true,
    delay: 3500,
  };
  if (amount && account && paymentType) {
    if (paymentType.toLowerCase() == "internal" && !enoughMoney) {
        errorMessage.style.display = "block";
      errorMessage.innerHTML="Insufficient balance";

    }
    else{
    var toastHTMLElement = document.getElementById("EpicToast");

    var toastElement = new bootstrap.Toast(toastHTMLElement, option);

    toastElement.show();
    toastHTMLElement.scrollIntoView({ behavior: "smooth" });
    errorMessage.style.display = "none";
    setTimeout(function () {
      // Redirect to the desired page
      window.location.href = "../DashBoards/ClientDash.html";
    }, 2500);}
  } else {
    // alert("");
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "Please fill in all required fields.";
  }
}
function toggleNotificationList() {
  var notificationList = document.getElementById("notificationList");
  notificationList.style.display =
    notificationList.style.display === "none" ? "block" : "none";
}
function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
}
function toggleSublist(sublistId) {
  var sublist = document.getElementById(sublistId + "Sublist");
  sublist.classList.toggle("active"); // Toggle the 'active' class to show/hide the sublist
}

