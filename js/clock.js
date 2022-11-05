const clock = document.querySelector('#clock'); // Clock section
const currentDates = clock.querySelector('.date-display'); // Date display 
const currentTime = clock.querySelector('.time-display'); // Time display

function getClock() {
    const currentDate = new Date(); // get today info
    const getYears = String(currentDate.getFullYear());
    const getMonths = String(currentDate.getMonth() + 1).padStart(2, "0");
    const getDates = String(currentDate.getDate()).padStart(2, "0");
    const getHours = String(currentDate.getHours()).padStart(2, "0");
    const getMinutes = String(currentDate.getMinutes()).padStart(2, "0");
    const getSeconds = String(currentDate.getSeconds()).padStart(2, "0");

    currentDates.innerText = `${getYears}.${getMonths}.${getDates}`
    currentTime.innerHTML = `<span>${getHours}</span><span>${getMinutes}</span><span>${getSeconds}</span>`;
    //console.log(getHours);
}

//getClock();
setInterval(getClock, 1000); 