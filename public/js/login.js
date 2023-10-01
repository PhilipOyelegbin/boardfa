// login a user
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const userData = {email, password}

  fetch("http://localhost:4000/auth/login", {
    method: "POST",
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  }).then(resp => resp.json())
  .then(data => {
    if(!data.user) {
      alert(`Error: Authorization failed...input the right details`)
    } else {
      sessionStorage.setItem("token", data.user)
      window.location.href = "inventory.html"
      alert(`${data.message}`)
    }
  })
});
