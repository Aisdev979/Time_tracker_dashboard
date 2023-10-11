// button
const dailyTime = document.querySelector("#daily");
const weeklyTime = document.querySelector("#weekly");
const monthlyTime = document.querySelector("#monthly");

// current-daily, weekly, monthly
const currentTime = document.querySelector("#current");
const currentTime1 = document.querySelector("#current1");
const currentTime2 = document.querySelector("#current2");
const currentTime3 = document.querySelector("#current3");
const currentTime4 = document.querySelector("#current4");
const currentTime5 = document.querySelector("#current5");

// previous-daily, weekly, monthly
const previousTime = document.querySelector("#previous");
const previousTime1 = document.querySelector("#previous1");
const previousTime2 = document.querySelector("#previous2");
const previousTime3 = document.querySelector("#previous3");
const previousTime4 = document.querySelector("#previous4");
const previousTime5 = document.querySelector("#previous5");

const promise = fetch("data.json");
promise.then((res) => {
    return res.json();
}).then((data) => {
    const [work, play, study, execise, social, selfCare] = data;
    dailyTime.addEventListener('click', () => {
        // current
        currentTime.textContent = `${work.timeframes.daily.current}hrs`;
        currentTime1.textContent = `${play.timeframes.daily.current}hrs`;
        currentTime2.textContent = `${study.timeframes.daily.current}hrs`;
        currentTime3.textContent = `${execise.timeframes.daily.current}hrs`;
        currentTime4.textContent = `${social.timeframes.daily.current}hrs`;
        currentTime5.textContent = `${selfCare.timeframes.daily.current}hrs`;

        // pervious
        previousTime.textContent = `Yesterday - ${work.timeframes.daily.previous}hrs`;
        previousTime1.textContent = `Yesterday - ${play.timeframes.daily.previous}hrs`;
        previousTime2.textContent = `Yesterday - ${study.timeframes.daily.previous}hrs`;
        previousTime3.textContent = `Yesterday - ${execise.timeframes.daily.previous}hrs`;
        previousTime4.textContent = `Yesterday - ${social.timeframes.daily.previous}hrs`;
        previousTime5.textContent = `Yesterday - ${selfCare.timeframes.daily.previous}hrs`;
    });
    weeklyTime.addEventListener('click', () => {
        // current
        currentTime.textContent = `${work.timeframes.weekly.current}hrs`;
        currentTime1.textContent = `${play.timeframes.weekly.current}hrs`;
        currentTime2.textContent = `${study.timeframes.weekly.current}hrs`;
        currentTime3.textContent = `${execise.timeframes.weekly.current}hrs`;
        currentTime4.textContent = `${social.timeframes.weekly.current}hrs`;
        currentTime5.textContent = `${selfCare.timeframes.weekly.current}hrs`;

        // pervious
        previousTime.textContent = `Last Week - ${work.timeframes.weekly.previous}hrs`;
        previousTime1.textContent = `Last Week - ${play.timeframes.weekly.previous}hrs`;
        previousTime2.textContent = `Last Week - ${study.timeframes.weekly.previous}hrs`;
        previousTime3.textContent = `Last Week - ${execise.timeframes.weekly.previous}hrs`;
        previousTime4.textContent = `Last Week - ${social.timeframes.weekly.previous}hrs`;
        previousTime5.textContent = `Last Week - ${selfCare.timeframes.weekly.previous}hrs`;
    });
    monthlyTime.addEventListener('click', () => {
        // current
        currentTime.textContent = `${work.timeframes.monthly.current}hrs`;
        currentTime1.textContent = `${play.timeframes.monthly.current}hrs`;
        currentTime2.textContent = `${study.timeframes.monthly.current}hrs`;
        currentTime3.textContent = `${execise.timeframes.monthly.current}hrs`;
        currentTime4.textContent = `${social.timeframes.monthly.current}hrs`;
        currentTime5.textContent = `${selfCare.timeframes.monthly.current}hrs`;

        // pervious
        previousTime.textContent = `Last Month - ${work.timeframes.monthly.previous}hrs`;
        previousTime1.textContent = `Last Month - ${play.timeframes.monthly.previous}hrs`;
        previousTime2.textContent = `Last Month - ${study.timeframes.monthly.previous}hrs`;
        previousTime3.textContent = `Last Month - ${execise.timeframes.monthly.previous}hrs`;
        previousTime4.textContent = `Last Month - ${social.timeframes.monthly.previous}hrs`;
        previousTime5.textContent = `Last Month - ${selfCare.timeframes.monthly.previous}hrs`;
    });
}).catch((error) => {
    console.log(error);
})