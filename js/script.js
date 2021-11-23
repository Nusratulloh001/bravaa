var burger =  document.querySelector('.burger');
var links = document.querySelectorAll('.nav_links');

burger.addEventListener('click', function () {
    burger.classList.toggle('toggle')
    for (let i = 0; i < links.length; i++) {
        links[i].classList.toggle('nl');
    }
})