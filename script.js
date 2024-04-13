const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    const moreInfo = project.querySelector('.more-info');
    project.addEventListener('click', () => {
        moreInfo.classList.toggle('show-info');
    });
});

const projectDescriptions = document.querySelectorAll('.project-text');

projectDescriptions.forEach(projectText => {
    const shortDescription = projectText.querySelector('.short-description');
    const moreInfo = projectText.querySelector('.more-info-hidden');
    const readMoreBtn = projectText.querySelector('.read-more');

    readMoreBtn.addEventListener('click', () => {
        shortDescription.classList.toggle('hidden');
        moreInfo.classList.toggle('hidden');  
        readMoreBtn.textContent = readMoreBtn.textContent === 'Read More' ? 'Read Less' : 'Read More';
    });
});