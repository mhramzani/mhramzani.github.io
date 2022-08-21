import get from './selectElement.js';
import scrollWindow from './scroll.js';
import reactive from './reactiveElement.js';
import mouseHovering from './mouseHovering.js';
import calcDate from './calcDate.js';
const shareBtn = get('.share');

var shareData = {
        title: 'لینک صفحه ی معرفی محمدحسین رمضانی',
        text: 'همه چیز در مورد محمدحسین رمضانی',
        url: ''
    }
    //sticky nav & smooth scroll
scrollWindow();
//reactive intro image
reactive();
//mouse hover
mouseHovering();
//date
calcDate();
//share 

shareBtn.addEventListener('click', () => { navigator.share(shareData) });
const topWave = get('.top-wave');
const bottomWave = get('.bottom-wave')
const footerWave = get('.top-footer')
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        topWave.setAttribute("style", "background-image: url(https://mhramzani.github.io/rescource/css/img/midWave-01-light.png);");
        bottomWave.setAttribute("style", "background-image: url(https://mhramzani.github.io/rescource/css/img/bottomwave-light.png);");
        footerWave.setAttribute("style", "background-image: url(https://mhramzani.github.io/rescource/css/img/footer-light.png);");

        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        topWave.setAttribute("style", "background-image: url(https://mhramzani.github.io/rescource/css/img/midWave-01.png);");
        bottomWave.setAttribute("style", "background-image: url(https://mhramzani.github.io/rescource/css/img/bottomwave.png);");
        footerWave.setAttribute("style", "background-image: url(https://mhramzani.github.io/rescource/css/img/footer.png);");
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);