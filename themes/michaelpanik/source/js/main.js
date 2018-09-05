const menuToggle = document.querySelector('button.menu-toggle')
const body = document.body

menuToggle.addEventListener('click', function() {
    if (body.classList.contains('mobile-nav_active')) {
        body.classList.remove('mobile-nav_active')
    } else {
        body.classList.add('mobile-nav_active')
    }
})