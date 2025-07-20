const form = document.getElementById('loginForm');
const password = document.getElementById('password');
const msg = document.getElementById('msg');
const rememberMe = document.getElementById('rememberMe');
const strengthMsg = document.getElementById('strengthMessage');

// Password strength logic
password.addEventListener('input', () => {
  const val = password.value;
  let strength = 'Weak';
  if (val.length > 8 && /[A-Z]/.test(val) && /\d/.test(val)) strength = 'Strong';
  else if (val.length > 5) strength = 'Medium';
  strengthMsg.textContent = `Strength: ${strength}`;
});

// Form validation
form.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const pass = password.value;

  if (!email.includes('@') || pass.length < 6) {
    msg.textContent = 'Invalid email or password!';
    msg.style.color = 'red';
    return;
  }

  msg.textContent = 'Login successful!';
  msg.style.color = 'green';

  // Optional: Remember me
  if (rememberMe.checked) {
    localStorage.setItem('email', email);
  }
});
