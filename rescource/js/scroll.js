import get from './selectElement.js';

let base = window.location.pathname;


//progress 
const nav = get('.navbar');
const skillSec = get('.skill');
const progSpan = document.querySelectorAll('.progressSpan')
const navHeight = nav.getBoundingClientRect().height;
let progressPos = skillSec.offsetTop - navHeight;

function ProgressBar() {
    if ((window.scrollY + 350) >= progressPos) {
        progSpan.forEach((item) => {
            item.style.width = item.getAttribute('data-target') + '%';
            item.textContent = item.getAttribute('data-target') + '%';
        })

    }
}
const scrollWindow = () => {

    //preloader
    const preloader = get('.preloader');
    window.addEventListener('load', () => {
        preloader.classList.add('hide-preloader');
        ProgressBar();
    });
    //scroll
    window.addEventListener('scroll', () => {
        const pageYOffset = window.pageYOffset;
        const navHeight = nav.getBoundingClientRect().height;
        if (pageYOffset > navHeight) {
            nav.classList.add('fixed-nav');
        } else {
            nav.classList.remove('fixed-nav');
        }
        ProgressBar();
    });
    //animate element
    const scrollLink = document.querySelectorAll('.scroll-link');
    scrollLink.forEach((link) => {
        link.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('href').slice(1);
            const element = document.getElementById(id);
            const navHeight = nav.getBoundingClientRect().height;
            let pos;
            if (nav.classList.contains('fixed-nav')) {
                pos = element.offsetTop - navHeight;
            } else {
                pos = element.offsetTop - navHeight * 2;
            }
            window.scrollTo({
                left: 0,
                top: pos,
            });

        });
    });
}
export default scrollWindow;