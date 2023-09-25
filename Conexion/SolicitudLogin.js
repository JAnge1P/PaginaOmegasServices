// login.js
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usuario, password })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => console.error('Error:', error));
});
