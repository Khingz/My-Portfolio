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
const nav = () => {
    const hamIcon = document.querySelector('#ham-icon');
    const linkUl = document.querySelector('.main-links');
    const linkli = document.querySelectorAll('.main-links li')
    hamIcon.addEventListener('click', () => {
        linkUl.classList.toggle('nav-active');
        if(linkUl.classList.contains('nav-active')) {
            hamIcon.className = 'fa fa-times';
        } else {
            hamIcon.className = 'fa fa-align-right';
        }

        //animating the nav for mobile
        linkli.forEach((linkanime, index) => {
            if(linkanime.style.animation) {
                linkanime.style.animation = ''
            } else {
                linkanime.style.animation = `burger-nav 1s forwards ${index/2}s`
            }
        })

    })

    //hide nav mobile view when a link is clicked
    linkli.forEach(link => {
        link.addEventListener('click', () => {
            linkUl.classList.toggle('nav-active');

             //animating the nav for mobile when link is clicked
            linkli.forEach((linkanime, index) => {
                if(linkanime.style.animation) {
                    linkanime.style.animation = ''
                } else {
                    linkanime.style.animation = `burger-nav 1s forwards ${index/2}s`
                }
            })
            //controls hamburger icon when monile view link is clicked
            if(linkUl.classList.contains('nav-active')) {
                hamIcon.className = 'fa fa-times';
            } else {
                hamIcon.className = 'fa fa-align-right';
            }
    
        })
    })
}
nav();