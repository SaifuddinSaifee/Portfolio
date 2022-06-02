const newYear = "1 Jan 2023";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");

function countDown() {
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();
    const timeRem = Math.floor((newYearsDate - currentDate) / 1000);
    const days = timeRem / 86400;
    const hours = Math.floor(timeRem % 86400) / 3600;
    const mins = (Math.floor(timeRem % 86400) % 3600) / 60;
    const secs = (Math.floor((timeRem % 86400) % 3600) % 60) % 60;
    // const mins = (hours)*60;

    // console.log(
    //     days + " days " + hours + " hrs " + mins + " mins " + seconds + " secs"
    // );
    console.log(
        Math.floor(days) +
            " " +
            Math.floor(hours) +
            " " +
            Math.floor(mins) +
            " " +
            secs
    );

    daysEl.innerHTML = format(Math.floor(days));
    hoursEl.innerHTML = format(Math.floor(hours));
    minsEl.innerHTML = format(Math.floor(mins));
    secsEl.innerHTML = format(Math.floor(secs));
}

function format (time) {
    if (time < 10) {
        return ("0" + time);
    }
    return time;
}

setInterval(countDown, 1000);
