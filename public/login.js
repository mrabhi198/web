const loginForm = document.getElementsByClassName("login-form")[0];

loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();
  
    const formData = {
      username: this.elements.username.value,
      password: this.elements.password.value,
    };
    console.log(formData);
  
    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      // Display the message in an alert
      console.log(data);
      alert(data.message);
      if (data.message === "Login successful!") location.href = "index.html";
    } catch (err) {
      console.log(err);
    }
});

  // google
function onGoogleLogin(googleUser) {
    var profile = googleUser.getBasicProfile();
    var username = profile.getName();
    var email = profile.getEmail();
    // Send username and email to your server for authentication
    // Example: You can use AJAX to send data to your server
    console.log(username, email);
}