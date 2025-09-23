 document.addEventListener('DOMContentLoaded', function() {
                                    const lessonContainers = document.querySelectorAll('.lesson-container');
                                    lessonContainers.forEach(container => {
                                        const button = container.querySelector('.button-header');
                                        const content = container.querySelector('.lesson-content');
                                        content.style.display = 'none';
                                        button.addEventListener('click', function() {
                                            if (content.style.display === 'none') {
                                                content.style.display = 'block';
                                            } else {
                                                content.style.display = 'none';
                                            }
                                        });
                                    });
                                });

 document.querySelectorAll('form[id="earthquake-quiz"]').forEach((form, idx) => {
                const correctAnswers = [
                    // Lesson 1 Quiz
                    { q1: "hypocenter", q2: "richter", q3: "preparedness" },
                    // Lesson 2 Quiz
                    { q1: "giant-pieces", q2: "crack", q3: "plate-boundaries" },
                    // Lesson 3 Quiz
                    { q1: "earthquake-waves", q2: "p-wave", q3: "surface-waves" },
                    // Lesson 4 Quiz
                    { q1: "energy", q2: "richter", q3: "felt" }
                ];
                form.querySelector('#submit-quiz').addEventListener('click', function() {
                    let score = 0;
                    let feedbacks = form.querySelectorAll('.quiz-feedback');
                    feedbacks.forEach(fb => { fb.style.display = 'none'; });
                    let resultDiv = form.querySelector('#quiz-result');
                    resultDiv.innerHTML = '';
                    let answers = correctAnswers[idx];
                    Object.keys(answers).forEach((q, i) => {
                        let selected = form.querySelector(`input[name="${q}"]:checked`);
                        let feedback = form.querySelector(`#${q}-feedback`);
                        if (selected) {
                            if (selected.value === answers[q]) {
                                feedback.style.color = 'green';
                                feedback.textContent = 'Correct!';
                                score++;
                            } else {
                                feedback.style.color = 'red';
                                feedback.textContent = 'Incorrect!';
                            }
                            feedback.style.display = 'block';
                        } else {
                            feedback.style.color = 'red';
                            feedback.textContent = 'Please select an answer.';
                            feedback.style.display = 'block';
                        }
                    });
                    resultDiv.innerHTML = `You got ${score}/3 correct.`;
                });
            });



           document.addEventListener('DOMContentLoaded', function () {
            const tabButtons = document.querySelectorAll('.tab-btn');
            const tabPanes = {
                modules: document.getElementById('module1-tab'),
                alerts: document.getElementById('module2-tab'),
                drills: document.getElementById('quiz-tab')
            };

            tabButtons.forEach(btn => {
                btn.addEventListener('click', function () {
                    // Remove active from all buttons
                    tabButtons.forEach(b => b.classList.remove('active'));
                    // Hide all panes
                    Object.values(tabPanes).forEach(pane => pane.classList.remove('active'));
                    // Activate clicked button and pane
                    btn.classList.add('active');
                    const tabKey = btn.getAttribute('data-tab');
                    if (tabPanes[tabKey]) {
                        tabPanes[tabKey].classList.add('active');
                    }
                });
            });
        });
        
        


                 document.addEventListener('DOMContentLoaded', function() {
                            const module1SubmitBtn = document.getElementById('module1-submit-btn');
                            const module1Feedback = document.getElementById('module1-submit-feedback');
                            const progressNumber = document.querySelector('.progress-number');
                            const progressFill = document.querySelector('.progress-fill');
                            const avgScore = document.querySelectorAll('.progress-card')[1].querySelector('.progress-number');
                            const avgNote = document.querySelectorAll('.progress-card')[1].querySelector('.progress-note');
                            

                            module1SubmitBtn.addEventListener('click', function() {
                                // Check if all quizzes in module 1 are completed
                                let allCompleted = true;
                                let totalScore = 0;
                                let quizForms = document.querySelectorAll('#module1-tab form[id^="earthquake-quiz"]');
                                quizForms.forEach(form => {
                                    let correct = 0;
                                    let questions = form.querySelectorAll('.quiz-question');
                                    questions.forEach((q, idx) => {
                                        let radios = q.querySelectorAll('input[type="radio"]');
                                        let answered = false;
                                        radios.forEach(radio => {
                                            if (radio.checked) {
                                                answered = true;
                                                // Check correct answers for each quiz
                                                if (
                                                    (idx === 0 && radio.value === "hypocenter") ||
                                                    (idx === 1 && radio.value === "richter") ||
                                                    (idx === 2 && radio.value === "preparedness")
                                                ) correct++;
                                                if (
                                                    form.parentElement.previousElementSibling &&
                                                    form.parentElement.previousElementSibling.querySelector('.lesson-name').textContent.includes('Lesson 2')
                                                ) {
                                                    if (
                                                        (idx === 0 && radio.value === "giant-pieces") ||
                                                        (idx === 1 && radio.value === "crack") ||
                                                        (idx === 2 && radio.value === "plate-boundaries")
                                                    ) correct++;
                                                }
                                                if (
                                                    form.parentElement.previousElementSibling &&
                                                    form.parentElement.previousElementSibling.querySelector('.lesson-name').textContent.includes('Lesson 3')
                                                ) {
                                                    if (
                                                        (idx === 0 && radio.value === "earthquake-waves") ||
                                                        (idx === 1 && radio.value === "p-wave") ||
                                                        (idx === 2 && radio.value === "surface-waves")
                                                    ) correct++;
                                                }
                                                if (
                                                    form.parentElement.previousElementSibling &&
                                                    form.parentElement.previousElementSibling.querySelector('.lesson-name').textContent.includes('Lesson 4')
                                                ) {
                                                    if (
                                                        (idx === 0 && radio.value === "energy") ||
                                                        (idx === 1 && radio.value === "richter") ||
                                                        (idx === 2 && radio.value === "felt")
                                                    ) correct++;
                                                }
                                            }
                                        });
                                        if (!answered) allCompleted = false;
                                    });
                                    totalScore += correct;
                                });

                                if (!allCompleted) {
                                    module1Feedback.style.color = "red";
                                    module1Feedback.textContent = "Please complete all quiz questions before submitting the module.";
                                    return;
                                }

                                // Update progress bar and average score
                                progressNumber.textContent = "1/2";
                                progressFill.style.width = "50%";
                                avgScore.textContent = "95%";
                                avgNote.textContent = "Excellent work!";
                                module1Feedback.style.color = "green";
                                module1Feedback.textContent = "Module 1 completed! Progress updated and average score set to 95%.";
                            });
                        });

 

                        function scrollToProfile() {
                            const targetElement = document.getElementById('target-profile');
                            if (targetElement) {
                              targetElement.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                              });
                            }
                          }
                        
                        function scrollToDashboard() {
                            const targetElement = document.getElementById('target-dashboard');
                            if (targetElement) {
                              targetElement.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                              });
                            }
                          }
                        

//Overall Quiz
   // Correct answers for validation
   const overallQuizAnswers = {
    oq1: "drop-cover-hold",
    oq2: "water",
    oq3: "turn-around",
    oq4: "know-what-to-do",
    oq5: "stay-calm-exit",
    oq6: "seek-shelter",
    oq7: "share-info",
    oq8: "warn-people",
    oq9: "signal-help",
    oq10: "work-together"
};

document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("overall-quiz-submit");
    if (submitBtn) {
        submitBtn.addEventListener("click", function() {
            let allCorrect = true;
            let total = 0;
            let correct = 0;
            // Hide all feedbacks
            for (let i = 1; i <= 10; i++) {
                document.getElementById(`oq${i}-feedback`).style.display = "none";
            }
            // Validate answers
            for (let i = 1; i <= 10; i++) {
                total++;
                const radios = document.getElementsByName(`oq${i}`);
                let answered = false;
                let value = "";
                for (let radio of radios) {
                    if (radio.checked) {
                        answered = true;
                        value = radio.value;
                        break;
                    }
                }
                const feedback = document.getElementById(`oq${i}-feedback`);
                if (!answered) {
                    feedback.style.display = "block";
                    feedback.style.color = "red";
                    feedback.textContent = "Please select an answer.";
                    allCorrect = false;
                } else if (value === overallQuizAnswers[`oq${i}`]) {
                    feedback.style.display = "block";
                    feedback.style.color = "green";
                    feedback.textContent = "Correct!";
                    correct++;
                } else {
                    feedback.style.display = "block";
                    feedback.style.color = "red";
                    feedback.textContent = "Incorrect. The correct answer is: " + getCorrectLabel(`oq${i}`, overallQuizAnswers[`oq${i}`]);
                    allCorrect = false;
                }
            }
            // Show result
            const resultDiv = document.getElementById("overall-quiz-result");
            if (correct === total) {
                resultDiv.style.color = "#4caf50";
                resultDiv.textContent = `All answers correct!`;
                document.getElementById("badge-promotion").style.display = "block";
            } else {
                resultDiv.style.color = "#e53935";
                resultDiv.textContent = `You got ${correct} out of ${total} correct. Please review the incorrect answers and try again.`;
                document.getElementById("badge-promotion").style.display = "none";
            }
        });
    }
});

// Helper to get the label text for the correct answer
function getCorrectLabel(qname, correctValue) {
    const radios = document.getElementsByName(qname);
    for (let radio of radios) {
        if (radio.value === correctValue) {
            // Find the label text
            let label = radio.parentElement;
            if (label && label.textContent) {
                return label.textContent.trim();
            }
        }
    }
    return "";
}                       




         // Emergency numbers data
         const emergencyNumbers = [
            { name: "National Emergency Number", number: "112" },
            { name: "Police", number: "100" },
            { name: "Fire", number: "101" },
            { name: "Ambulance", number: "102" },
            { name: "Disaster Management Services", number: "108" },
            { name: "National Disaster Management Authority (NDMA)", number: "011-26701728" },
            { name: "NDRF (National Disaster Response Force)", number: "011-24363260, 9711077372" },
            { name: "Child Helpline", number: "1098" },
            { name: "Women Helpline", number: "1091" },
            { name: "Railway Enquiry", number: "139" }
        ];

        // Create modal HTML
        function createEmergencyModal() {
            if (document.getElementById('emergency-modal')) return; // Prevent duplicates

            const modal = document.createElement('div');
            modal.id = 'emergency-modal';
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100vw';
            modal.style.height = '100vh';
            modal.style.background = 'rgba(0,0,0,0.4)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = '9999';

            modal.innerHTML = `
                <div style="
                    background: #fff;
                    border-radius: 12px;
                    max-width: 500px;
                    width: 90vw;
                    padding: 2rem 1.5rem 1.5rem 1.5rem;
                    box-shadow: 0 4px 24px rgba(0,0,0,0.18);
                    position: relative;
                    font-family: inherit;
                ">
                    <button id="close-emergency-modal" style="
                        position: absolute;
                        top: 10px;
                        right: 14px;
                        background: none;
                        border: none;
                        font-size: 1.5rem;
                        color: #888;
                        cursor: pointer;
                    " title="Close">&times;</button>
                    <h2 style="margin-top:0; color:#d35400; text-align:center;">Emergency Numbers</h2>
                    <ul style="list-style:none; padding:0; margin:1rem 0 0 0;">
                        ${emergencyNumbers.map(item => `
                            <li style="margin-bottom:1rem; display:flex; justify-content:space-between; align-items:center;">
                                <span style="font-weight:500;">${item.name}</span>
                                <span style="font-family:monospace; color:#2d3436;">${item.number}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
            document.body.appendChild(modal);

            // Close modal on button click or background click
            document.getElementById('close-emergency-modal').onclick = () => {
                modal.remove();
            };
            modal.onclick = (e) => {
                if (e.target === modal) modal.remove();
            };
        }

        // Attach function to global scope for inline onclick
        function showEmergencyModal() {
            createEmergencyModal();
        }
        window.showEmergencyModal = showEmergencyModal; 