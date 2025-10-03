document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    const users = {
        "Sitti Mariam": {
            password: "Jolo",
            redirect: "maamjo.html"
        },
        "mr.reyes": {
            password: "mathwiz",
            redirect: "mr_reyes.html"
        },
        "ms.chen": {
            password: "scienceart",
            redirect: "ms_chen.html"
        },
        "mr.santos": {
            password: "historybuff",
            redirect: "mr_santos.html"
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
                errorMessage.textContent = "Oops! Wrong password. Please try again.";
            }
        } else {
            errorMessage.textContent = "Oops! We couldn't find that username.";
        }
    });
});