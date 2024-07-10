document.addEventListener('DOMContentLoaded', () => {
    // Toggle content functionality
    const toggleButtons = document.querySelectorAll('.toggle-content');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const project = button.closest('.project');
            const longform = project.querySelector('.longform');
            if (longform) {
                longform.classList.toggle('hidden');
                button.textContent = button.textContent === 'Read More' ? 'Read Less' : 'Read More';
            }
        });
    });

    // Handle smooth scrolling when landing on a page with a hash
    if (window.location.hash) {
        setTimeout(() => {
            const targetElement = document.querySelector(window.location.hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
});