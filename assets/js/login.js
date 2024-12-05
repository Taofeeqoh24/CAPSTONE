document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('l-email').value;
    const password = document.getElementById('l-password').value;

    const response = await fetch('/auth/login', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    console.log("Response received:", data);

    if (response.ok) {
        alert('Login Successful!');
        console.log('Redirecting to /tasks');
        //redirect
        window.location.href ='/tasks';
    } else {
        alert(data.error);
    }
});
