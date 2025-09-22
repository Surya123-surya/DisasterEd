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