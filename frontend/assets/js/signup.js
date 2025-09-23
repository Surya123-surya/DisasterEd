
//to change the input roll no into the college name
document.addEventListener("DOMContentLoaded", function() {
    var userSelect = document.querySelector('select.user');
    var inputs = document.querySelectorAll('input[type="text"]');
    var rollNoInput = null;

    // Find the input with placeholder "Enter Roll No"
    inputs.forEach(function(input) {
        if(input.placeholder === "Roll Number") {
            rollNoInput = input;
        }
    });

    if (userSelect && rollNoInput) {
        userSelect.addEventListener("change", function() {
            var selected = userSelect.options[userSelect.selectedIndex].text;
            if (selected === "Adminstrator") {
                rollNoInput.placeholder = "College name";
            } else {
                rollNoInput.placeholder = "Roll Number";
            }
        });
    }
});




document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form[action="/signup"]');
    const userSelect = document.querySelector('select.user');
    const nameInput = document.getElementById('name');
    const usernameInputs = document.querySelectorAll('input[name="username"]');
    const emailInput = document.getElementById('mail');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get selected user type
        const userType = userSelect.value;

        // Get values from the form
        const name = nameInput.value.trim();
        // There are two username fields, pick the first one (Roll Number)
        const rollNumber = usernameInputs[0].value.trim();
        // The second username field (College Id)
        const collegeId = usernameInputs[1].value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;

        // Simple validation based on user type
        let valid = true;
        let errorMsg = "";

        if (userType === "none") {
            valid = false;
            errorMsg = "Please select a user type.";
        } else if (userType === "Student") {
            if (!rollNumber) {
                valid = false;
                errorMsg = "Please enter your Roll Number.";
            }
        } else if (userType === "Adminstrator") {
            if (!collegeId) {
                valid = false;
                errorMsg = "Please enter your College Id.";
            }
        }

        if (!name || !email || !password) {
            valid = false;
            errorMsg = "Please fill all required fields.";
        }

        if (!valid) {
            alert(errorMsg);
            return;
        }

        // If validation passes, redirect to student.html
        // (In real app, you would send data to server and check credentials)
        window.location.href = "./student.html";
    });
});