$(document).ready(function() {
  // Getting values to our form and inputs
  var loginForm = $("form.login");
  var providedEmail = $("input#email-verify"); // admin email: mpl@gmail.com
  var providedPassword = $("input#password-verify"); //admin password: 12345

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    console.log("clicked")
    console.log(providedEmail.val(), providedPassword.val())

    var userData = {
      email: providedEmail.val().trim(),
      password: providedPassword.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(function() {
        window.location.replace("/manager");
        // If there's an error, log the error
      })
      .fail(function(err) {
        console.log(err);
        alert("Login credentials are incorrect.")
      });
  }
});
