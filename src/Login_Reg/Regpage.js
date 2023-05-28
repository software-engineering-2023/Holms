
function register() {
  // Retrieve input values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var account = document.getElementById("account").value;
  var nationalid = document.getElementById("nationalid").value;

  // Check if phone number, bank account, and national ID have the correct number of digits
  if (phone.length === 11 && account.length === 10 && nationalid.length === 14) {
    alert("Registration Complete!");
    window.location.href = "Login.html";
  } else {
    alert("Invalid Registration data. Please try again.");
  }
}

function redirectToLogin() {
  var redirectLocation = "Login.html";
  redirectTo(redirectLocation);
}

function redirectTo(url) {
  // Redirect to a different URL
  window.location.replace(url);
}


    function redirectToLogin() {
      var redirectLocation = "Login.html";
      redirectTo(redirectLocation);
    }

    function redirectTo(url) {
      // Redirect to a different URL
      window.location.replace(url);
    }

