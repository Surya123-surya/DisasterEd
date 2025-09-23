const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();


//use EJS as search engine
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../assets/login.html"));
});

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../assets/signup.html"));
});





const port=5000;
app.listen(port,()=>{
    console.log(`Server is running on port:${port}`);
})

function scrollToHome() {
    const targetElement = document.getElementById('target-home');
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
function scrollToAboutus() {
    const targetElement = document.getElementById('target-aboutus');
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
function scrollToDisaster() {
    const targetElement = document.getElementById('target-disaster');
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
function scrollToContactus() {
    const targetElement = document.getElementById('target-contactus');
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }