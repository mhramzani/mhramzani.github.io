import get from './selectElement.js';
const topWave = get('.top-wave');
const bottomWave = get('.bottom-wave')
const footerWave = get('.top-footer')
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const toggle = get('.switch');

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
const theme = () => {
    toggle.style.top = `${window.innerHeight -50}px`
    toggleSwitch.addEventListener('change', switchTheme, false);
}
export default theme;