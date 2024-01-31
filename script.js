function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "flex"
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "none"
}


// window.addEventListener('scroll', () => {
//     const elementToAnimate = document.querySelector('.about-commit-image');
//     const isScrolledIntoView = elementToAnimate.getBoundingClientRect().top >= 0;

//     if (isScrolledIntoView) {
//         elementToAnimate.classList.add('animation1');
//     }
// });