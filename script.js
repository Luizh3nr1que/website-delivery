const ButtonMobile = document.querySelector('.MenuMobile');
const menuMobile = document.querySelector('.menuMobile');
const MenuIcon = document.querySelector('.MenuMobile');

ButtonMobile.addEventListener('click', () => {
    if (menuMobile.style.display == 'none') {
        MenuIcon.setAttribute('name', 'close-outline');
        menuMobile.classList.remove('animationClose');
        menuMobile.classList.add('animationOpen');
        menuMobile.style.display = 'block';
    } else {
        MenuIcon.setAttribute('name', 'menu-outline');
        menuMobile.classList.remove('animationOpen');
        menuMobile.classList.add('animationClose');
        setTimeout(() => {
            menuMobile.style.display = 'none';
        }, 300)
    }
});



const linksA = document.querySelectorAll('.link');

linksA.forEach(linksA => {
    linksA.addEventListener('click', () => {
        MenuIcon.setAttribute('name', 'menu-outline');
        menuMobile.classList.remove('animationOpen');
        menuMobile.classList.add('animationClose');
        setTimeout(() => {
            menuMobile.style.display = 'none';
        }, 300);
    })
})



const imgs = document.querySelectorAll('img');

imgs.forEach(img => {
    img.draggable = false;
})