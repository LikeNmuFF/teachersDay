document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    const users = {
        "Sitti Mariam": {
            password: "Jolo",
            redirect: "maamjo.html"
        },
        "Alhamid": {
            password: "Fernandez",
            redirect: "siral.html"
        },
        "Abramar": {
            password: "Alawiya",
            redirect: "siralawiya.html"
        },
        "Matheen": {
            password: "Tabid",
            redirect: "maammath.html"
        }
    };

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const enteredUsername = document.getElementById('username').value;
        const enteredPassword = document.getElementById('password').value;

        // Check if username exists
        if (users[enteredUsername]) {
            // Check if password matches
            if (users[enteredUsername].password === enteredPassword) {
                
                // *** NEW CODE: Set the flag for a successful login ***
                localStorage.setItem('isLoggedIn', 'true'); 
                
                // Redirect to the teacher's page
                window.location.href = users[enteredUsername].redirect;
            } else {
                errorMessage.textContent = "Oops! Invalid Username or Password.";
            }
        } else {
            errorMessage.textContent = "Oops! Invalid Username or Password.";
        }
    });
});

