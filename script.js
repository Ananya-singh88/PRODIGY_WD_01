const navbar = document.getElementById('navbar');
const menuItems = document.querySelectorAll('.menu li a');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        menuItems.forEach(item => {
            item.classList.add('scrolled');
        });
    } else {
        menuItems.forEach(item => {
            item.classList.remove('scrolled');
        });
    }
});


