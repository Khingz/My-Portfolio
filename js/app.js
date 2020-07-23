//particle js
particlesJS.load('particles-js', 'particles.json', () => {
    console.log('particles.json loaded...');
})

//AOS animation 
AOS.init({
    // offset: 40,
    duration: 1000
});

//image hover effect
new hoverEffect({
    parent: document.querySelector('.img'),
    intensity: 0.2,
    image1: '../assets/img/main-2.png',
    image2: '../assets/img/hover-black.jpg',
    displacementImage: '../assets/img/trans.png',
    imagesRatio: 1
});


//scroll-top add nav
const scrollFunction = () => {
    let addBorder = document.querySelector('#header');
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        addBorder.classList.add('nav-black-border');
    } else {
        addBorder.classList.remove('nav-black-border');
    }
}
window.onscroll = scrollFunction

//toggling hamburger menu
// const toggleIcon = document.querySelector('#ham-icon');
// toggleIcon.addEventListener('click', () => {
//     const menuBox = document.querySelector('ul#ham-nav-items');
//     if(menuBox.classList.contains('hide')) {
//         menuBox.classList.remove('hide');
//         toggleIcon.classList = 'fa fa-times';
//     }else {
//         menuBox.classList.add('hide');
//         toggleIcon.classList = 'fa fa-align-right';
//     }
// })