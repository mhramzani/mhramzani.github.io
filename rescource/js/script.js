import get from './selectElement.js';
import scrollWindow from './scroll.js';
import reactive from './reactiveElement.js';
import mouseHovering from './mouseHovering.js';
import calcDate from './calcDate.js';
import theme from './changeTheme.js';

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
//change theme
theme();