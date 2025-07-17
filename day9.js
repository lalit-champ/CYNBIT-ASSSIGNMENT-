document.getElementById("registrationForm").addEventListener("submit", function(e) {

     
       let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let branch = document.getElementById("branch").value.trim();
  let year = document.getElementById("year").value.trim();
  let password = document.getElementById("password").value;

   let message = document.getElementById("message");

  if (!name || !email || !branch || !year || !password) {
    message.textContent = "❌ All fields are required!";
    message.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    message.textContent = "❌ Invalid email format!";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "❌ Password must be at least 6 characters!";
    message.style.color = "red";
    return;
  }
  let gender = document.querySelector('input[name="gender"]:checked');

if (!gender) {
  message.textContent = "❌ Please select a gender!";
  message.style.color = "red";
  return;
}

  message.textContent = "✅ Registration Successful!";
  message.style.color = "green";
});