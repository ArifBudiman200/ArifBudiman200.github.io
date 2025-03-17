document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Mengambil nilai input
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const message = document.getElementById('message');

  // Reset pesan
  message.textContent = '';

  // Validasi kecocokan kata sandi
  if (password !== confirmPassword) {
    message.textContent = 'Kata sandi tidak cocok!';
    return;
  }

  // Simulasikan proses pendaftaran
  // Karena GitHub Pages tidak mendukung backend, data hanya disimpan di Local Storage
  const userData = { username, email, password };
  localStorage.setItem('user', JSON.stringify(userData));

  message.style.color = 'green';
  message.textContent = 'Pendaftaran berhasil!';

  // Reset form setelah pendaftaran
  document.getElementById('signupForm').reset();
});
