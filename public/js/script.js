document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-content');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const project = button.closest('.project');
            const longform = project.querySelector('.longform');

            longform.classList.toggle('hidden');
            button.textContent = button.textContent === 'Read More' ? 'Read Less' : 'Read More';
        });
    });
});