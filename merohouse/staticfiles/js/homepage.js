function openClose(openButtonId, closeButtonId, containerId, showClass) {
    let openButton = document.getElementById(openButtonId)
    let closeButton = document.getElementById(closeButtonId)
    let container = document.getElementById(containerId)

    if (openButton && container) {
        openButton.addEventListener('click', () => container.classList.toggle(showClass))
        closeButton.addEventListener('click', () => container.classList.toggle(showClass))
    }
}

openClose('main-nav-menu', 'close-menu-container', 'main-link-container', 'show')