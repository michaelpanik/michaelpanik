const menuToggle = document.querySelector('button.menu-toggle')
const body = document.body

menuToggle.addEventListener('click', function() {
    if (body.classList.contains('mobile-nav_active')) {
        body.classList.remove('mobile-nav_active')
        this.setAttribute('aria-expanded', 'true')
    } else {
        body.classList.add('mobile-nav_active')
        this.setAttribute('aria-expanded', 'false')
    }
})

const tooltipList = document.querySelectorAll('.tooltip')

tooltipList.forEach(function(el) {
    const tooltip = document.createElement('span')
    tooltip.classList.add('tooltipBubble')
    
    var att = document.createAttribute("aria-role")
    att.value = "tooltip"
    tooltip.setAttributeNode(att)
    
    tooltip.innerHTML = el.dataset.tooltip
    
    el.appendChild(tooltip)
})