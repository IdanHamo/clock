const clock = Array.from(document.getElementsByClassName("container"))[0];
console.log(clock);

function clocky() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  m = check(m);
  s = check(s);

  if (h > 12) {
    h = h - 12;
    clock.innerHTML = `${h}:${m}:${s} PM`;
  } else if (h === 12) {
    clock.innerHTML = `${h}:${m}:${s} PM`;
  } else {
    clock.innerHTML = `${h}:${m}:${s} AM`;
  }

  setTimeout(clocky, 1000);
}
clocky();

function check(number) {
  if (number < 10) {
    number = "0" + number;
  }
  return number;
}
