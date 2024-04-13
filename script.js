const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    const moreInfo = project.querySelector('.more-info');
    project.addEventListener('click', () => {
        moreInfo.classList.toggle('show-info');
    });
});
