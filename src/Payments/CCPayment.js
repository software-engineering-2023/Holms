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

  var partial = document.getElementById("partialDiv");

  if (paymentType === "partial") {
    partial.style.display = "block";
  } else {
    partial.style.display = "none";
  }
}

function handlePayment() {
  var amountField = document.getElementById("amount");
  var accountField = document.getElementById("account");
  var paymentTypeField = document.getElementById("PaymentType");
  var errorMessage = document.getElementById("errorMessage");
  var amount = amountField.value;
  var account = accountField.value;
  var chosenAccount = myArrayIN.indexOf(account);
  var enoughMoney = moneyIN[chosenAccount] >= amount ? true : false;
  var paymentType = paymentTypeField.value;
  var option = {
    animation: true,
    delay: 2000,
  };
  if (paymentType === "partial" && amount.trim() == "") {
    // You can add additional logic or submit the form here
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "Please fill in all required fields.";
  } else if (!enoughMoney) {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "Insufficient Balance";
  } else {
    var toastHTMLElement = document.getElementById("EpicToast");

    var toastElement = new bootstrap.Toast(toastHTMLElement, option);

    toastElement.show();
    toastHTMLElement.scrollIntoView({ behavior: "smooth" });
    errorMessage.style.display = "none";
    setTimeout(function () {
      // Redirect to the desired page
      window.location.href = "../DashBoards/ClientDash.html";
    }, 1500);
  }
}
