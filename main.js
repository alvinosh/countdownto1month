let andate = new Date("Dec 22, 2021").getTime();

// Run myfunc every second
let myfunc = () => {
  let now = new Date().getTime();
  let timeleft = andate - now;

  // Calculating the days, hours, minutes and seconds left
  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24;
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  // Result is output to the specific element
  document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
  document.getElementById("mins").innerHTML = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("secs").innerHTML = seconds < 10 ? "0" + seconds : seconds;

  // Display the message when countdown is over
  if (timeleft < 0) {
    clearInterval(myfunc);
    document.querySelectorAll(".countdown").forEach(function (el) {
      el.style.display = "none";
    });

    document.querySelector("#end").style.display = "block";
  }
};

myfunc();
setInterval(myfunc, 1000);
