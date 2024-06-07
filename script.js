document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        const moreInfo = project.querySelector('.more-info-hidden');
        const readMoreBtn = project.querySelector('.read-more');

        readMoreBtn.addEventListener('click', () => {
            moreInfo.classList.toggle('hidden');  
            readMoreBtn.textContent = readMoreBtn.textContent === 'Read More' ? 'Read Less' : 'Read More';
        });
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
