///registration logic
document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = {
        username: document.querySelector('input[name="username"]').value.trim(),
        email: document.querySelector('input[name="email"]').value.trim(),
        password: document.querySelector('input[name="password"]').value.trim(),
      };
    
      if (!formData.username || !formData.email || !formData.password) {
        alert('All fields are required.');
        return;
      }

    //send data to a server
    try {
        const response = await fetch('/auth/register', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        // console.log(result)

        if (response.ok) {
            alert('New user created!');
            //redirect
            window.location.href = '/login';
        } else {
            alert(data.error || 'Registration failed.');
          }
    } catch (error) {
        console.error('Error:', error.message);
        alert('Registration failed.');
    }
});

