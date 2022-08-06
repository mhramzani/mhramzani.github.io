import get from './selectElement.js';
const mouseHovering = () => {
    const hoveringElement = get('.hovering');
    const nav = get('nav');
    const main = get('main');

    function HoveringFunction(e) {
        if (e.target.tagName === "BUTTON" || e.target.tagName === "A" || e.target.tagName === "I") {
            if (e.target.classList.contains('my-icon')) {
                hoveringElement.setAttribute("style", "border-width: 7px; width:0px;height:0px; border-color:#6cc644;");

            } else {
                hoveringElement.setAttribute("style", "border-width: 5px; width:25px;height:25px;border-color:#F35D69;");
            }
        } else {
            hoveringElement.setAttribute("style", "border-width: 7px; width:0px;height:0px; border-color:#6cc644;");
        }
        var x = e.clientX + window.scrollX;
        var y = e.clientY + window.scrollY;
        if (x < 10) {
            x = 10;
        }

        hoveringElement.style.transform = `translate(${x}px, ${y}px)`;
        hoveringElement.style.opacity = 1;
    }

    function HoverOut() {
        hoveringElement.style.opacity = 0;
    }
    main.addEventListener('mousemove', HoveringFunction);
    nav.addEventListener('mousemove', HoveringFunction);
    main.addEventListener('mouseout', HoverOut);
    nav.addEventListener('mouseout', HoverOut);
}
export default mouseHovering;