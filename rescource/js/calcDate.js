import get from './selectElement.js';
const age = get('.age');
const experience = get('.experience');
const experience2 = get('.experience2');

const footer = get(".my-footer");

function CalculateDate(date, textPlace) {
    const birthday = new Date(date);
    //calculate month difference from current date in time  
    var monthDiffrent = Date.now() - birthday.getTime();

    //convert the calculated difference in date format  
    var age_dt = new Date(monthDiffrent);

    //extract year from date      
    var year = age_dt.getUTCFullYear();

    //now calculate the age of the user  
    var age = Math.abs(year - 1970);
    textPlace.textContent = age;
}

function showFooter() {
    footer.innerHTML = `<div dir="ltr">
    Copyright ${new Date().getFullYear()} by MHR. All Rights Reserved.<br>
    Porfolio is Powered by MHR.</div> `;
}
const calcDate = () => {
    CalculateDate("05/13/1999", age);
    CalculateDate("07/01/2019", experience);
    CalculateDate("07/01/2019", experience2);

    showFooter();
}
export default calcDate;