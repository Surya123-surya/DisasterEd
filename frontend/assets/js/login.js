// Default credentials
const credentials = {
    Student: {
        username: "student1",
        password: "studentpass"
    },
    Adminstrator: {
        username: "admin1",
        password: "adminpass"
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const userTypeSelect = document.querySelector(".user");

    // Add a message area for feedback
    let msg = document.createElement("div");
    msg.style.color = "red";
    msg.style.marginTop = "10px";
    form.appendChild(msg);

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const userType = userTypeSelect.value;
        const username = form.username.value.trim();
        const password = form.password.value;

        if (userType === "none") {
            msg.textContent = "Please select a user type.";
            return;
        }

        const validCreds = credentials[userType];
        if (validCreds && username === validCreds.username && password === validCreds.password) {
            msg.style.color = "#000000ff";
            msg.textContent = "Login successful! Redirecting...";
            setTimeout(() => {
                if (userType === "Student") {
                    window.location.href = "student.html";
                } else if (userType === "Adminstrator") {
                    window.location.href = "admin.html";
                }
            }, 1000);
        } else {
            msg.style.color = "red";
            msg.textContent = "Invalid username or password.";
        }
    });

    // Optionally, show default credentials for demo
    let demoInfo = document.createElement("div");
    demoInfo.style.marginTop = "20px";
    demoInfo.style.fontSize = "0.95rem";
    demoInfo.style.background = "#8e9c78";
    demoInfo.style.padding = "10px";
    demoInfo.style.borderRadius = "6px";
    demoInfo.innerHTML = `
        <strong>Demo Credentials:</strong><br>
        <b>Student</b> - Username: <code>student1</code>, Password: <code>studentpass</code><br>
        <b>Adminstrator</b> - Username: <code>admin1</code>, Password: <code>adminpass</code>
    `;
    document.querySelector(".container").appendChild(demoInfo);
});