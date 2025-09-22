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

 