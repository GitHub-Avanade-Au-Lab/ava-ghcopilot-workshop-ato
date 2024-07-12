document.querySelector("form").addEventListener("submit", function (event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get form values
  var developername = document.getElementById("developername").value;
  var developeremail = document.getElementById("developeremail").value;
  var developerpassword = document.getElementById("developerpassword").value;

  // Validate form values
  if (!validateUsername(developername)) {
    alert("Invalid username");
    return;
  }

  if (!validateEmail(developeremail)) {
    alert("Invalid email");
    return;
  }

  if (!validatePassword(developerpassword)) {
    alert("Invalid password");
    return;
  }

  // Display form values
  document.querySelector("form").style.display = "none";
  var formValuesDiv = document.getElementById("formValues");
  formValuesDiv.textContent = `
          Welcome!
          Developer:  ${developername}
          Your registered email is ${developeremail}
          and your password Length is ${developerpassword.length}
      `;

  // If validation passes, you can submit the form manually
  // event.target.submit();
  alert("Form submitted successfully!");
});
