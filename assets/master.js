const oneDay = 24 * 60 * 60 * 1000;
const onehours = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

const getNewyear = () => {
  const currentDate = new Date().getTime();
  const newyearDate = new Date("1 jan 2025").getTime();
  const diffrenceDate = newyearDate - currentDate;
  const days = Math.floor(diffrenceDate / oneDay);
  const hours = Math.floor((diffrenceDate % oneDay) / onehours);
  const minute = Math.floor((diffrenceDate % onehours) / oneMinute);
  const second = Math.floor((diffrenceDate % oneMinute) / 1000);
  const items = [days, hours, minute, second];
  const times = document.querySelectorAll(".time");
  times.forEach((time, index) => {
    time.innerHTML = formatted(items[index]);
  });

  if (diffrenceDate <= 0) {
    console.log("title");
    const title = document.querySelector(".title");
    const parentTime = document.querySelector(".parentTime");
    parentTime.style.display = "none";
    title.innerHTML = "😍Happy NewYear😍";
    clearInterval(newYear);
  }
};

function formatted(time) {
  if (time < 10) {
    return `0${time}`;
  } else {
    return time;
  }
}

const newYear = setInterval(getNewyear, 1000);
