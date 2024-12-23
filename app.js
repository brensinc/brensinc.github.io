const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        project.classList.toggle('active');
    });
});