
function register() {
  // Retrieve input values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var account = document.getElementById("account").value;
  var nationalid = document.getElementById("nationalid").value;

  // Dummy data for registration
  var dummyData = [
    {
      name: "omar",
      email: "omar@gmail.com",
      phone: "01066800034",
      account: "0112345678",
      nationalid: "1234567890123"
    }
    // Add more dummy data if needed
  ];

  // Check if input matches the dummy data
  if (
    name === dummyData.name &&
    email === dummyData.email &&
    phone === dummyData.phone &&
    account === dummyData.account &&
    nationalid === dummyData.nationalid
  ) {
    alert("Registration Complete!");
    // window.location.href = "Login.html";
    // location.replace("Login.html");
  }
  // If input data doesn't match, display an error message
}

function redirectToLogin() {
  var redirectLocation = "Login.html";
  redirectTo(redirectLocation);
}

function redirectTo(url) {
  // Redirect to a different URL
  window.location.replace(url);
}

