document.addEventListener('DOMContentLoaded', function (e) {
    const menuBtn = document.querySelector(".menu-btn");
    const leftSlide = document.querySelector('.left-slide');
    menuBtn.addEventListener('click', function () {
        leftSlide.classList.toggle('show');
    })
})