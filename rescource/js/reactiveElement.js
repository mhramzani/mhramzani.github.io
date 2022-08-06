const reactive = () => {
    const reactiveElement = document.querySelector('.Reactive-element');
    const reactiveParent = document.querySelector('.reactive-parent')
        //reactive event when mouse hover on element
    reactiveParent.addEventListener('mousemove', (e) => {

        let rect = reactiveParent.getBoundingClientRect();
        //get half width and height of element
        const halfWidth = rect.width / 2;
        const halfHeight = rect.height / 2;
        //calculate where mouse hover on element
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        //calculate max width to reactive elemenet 
        let maxWidth = window.innerWidth / 28
            // transform X to right (index of Move element to right)
        let tempX = ((window.innerWidth + 600) / x);
        //condition to prevent for overflow element
        if (tempX <= -window.innerWidth || tempX > maxWidth) {
            tempX = maxWidth;
        }
        //transform Y to bottom (index of Move element to bottom)
        let tempY = (2300 / y);
        //condition to prevent for overflow element
        if (tempY >= 50 || tempY <= -window.innerWidth) {
            tempY = 50;
        }
        // transform X to left (index of Move element to left)
        let TempXLeft = -(x / (window.innerWidth / 2)) * (x / 56);
        if (TempXLeft <= -maxWidth) {
            TempXLeft = -maxWidth;
        }
        //transform Y to top (index of Move element to top)
        let TempYDown = (tempY / 0.1) - 100

        //Check the area where the mouse is located
        if (x < halfWidth) {
            if (y < halfHeight) {
                reactiveElement.style.transform = `perspective(200px) translateX(${tempX}px) translateY(${tempY}px)`;
            } else if (y > halfHeight) {
                reactiveElement.style.transform = `perspective(200px) translateX(${tempX}px) translateY(${TempYDown}px)`;
            }
        } else {
            if (y < halfHeight) {
                reactiveElement.style.transform = `perspective(200px) translateX(${TempXLeft}px) translateY(${tempY}px)`;
            } else if (y > halfHeight) {
                reactiveElement.style.transform = `perspective(200px) translateX(${TempXLeft}px) translateY(${TempYDown}px)`;
            }
        }



    });
    //reset element
    reactiveElement.addEventListener('mouseout', () => {
        reactiveElement.style.transform = `perspective(200px) translateX(0px) translateY(0px)`;
    })
}
export default reactive;