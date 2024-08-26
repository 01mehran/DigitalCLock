function Timer() {
  const currentTime = new Date();

  const getHours = currentTime.getHours();

  const getMinute = currentTime.getMinutes();

  const getSecond = currentTime.getSeconds();

  const hours = getHours < 10 ? "0" + getHours : getHours;
  const minute = getMinute < 10 ? "0" + getMinute : getMinute;
  const second = getSecond < 10 ? "0" + getSecond : getSecond;

  const output = document.querySelector("#time");
  output.innerHTML = `${hours} <span>:</span> ${minute} <span>:</span> ${second} `;
}

setInterval(Timer, 1000);
