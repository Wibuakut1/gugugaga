document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const question = document.getElementById("question").value;
  const nickname = document.getElementById("nickname").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;

  const message = `Berhasil dikirim! 
Nickname: ${nickname}
Tanggal: ${date}`;

  document.getElementById("message").textContent = message;

  // Reset form
  this.reset();
});
