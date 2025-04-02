const navigations = document.querySelectorAll('a[href*="#"]')

for (let nav of navigations) {
    nav.addEventListener("click", function(e) {
        e.preventDefault();
        const blockID = nav.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}


const burger = document.querySelector('.main__burger');
const menuNavTouch = document.querySelector('.main__nav-touch');

if (burger){
    burger.addEventListener("click", function(e) {
        burger.classList.toggle('_active');
        menuNavTouch.classList.toggle('_active');
    });
    menuNavTouch.addEventListener("click", function(e) {
        burger.classList.remove('_active');
        menuNavTouch.classList.remove('_active');
    });
}