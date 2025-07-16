document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent form from submitting

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

  message.textContent = "✅ Registration Successful!";
  message.style.color = "green";
});

// Optional: Password strength checker
document.getElementById("password").addEventListener("input", function () {
  const strengthMsg = document.getElementById("strengthMessage");
  const pass = this.value;
  if (pass.length === 0) {
    strengthMsg.textContent = "";
  } else if (pass.length < 6) {
    strengthMsg.textContent = "Weak password";
    strengthMsg.style.color = "red";
  } else if (pass.match(/[A-Z]/) && pass.match(/[0-9]/)) {
    strengthMsg.textContent = "Strong password";
    strengthMsg.style.color = "green";
  } else {
    strengthMsg.textContent = "Medium password";
    strengthMsg.style.color = "orange";
  }
});
