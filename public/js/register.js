// register a user
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const first_name = document.querySelector("#first_name").value;
  const last_name = document.querySelector("#last_name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const userData = {first_name, last_name, email, password}

  fetch("http://localhost:4000/auth/register", {
    method: "POST",
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  }).then(resp => {
    if(resp.status !== 201) {
      return alert(`Error: ${resp.statusText}`);
    }
    return alert(`Message: ${resp.statusText}`)
  })
});
