const menuToggle = document.querySelector('button.menu-toggle')
const navMenu = document.querySelector('nav.site-navigation')

menuToggle.addEventListener('click', function() {
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active')
    } else {
        navMenu.classList.add('active')
    }
})