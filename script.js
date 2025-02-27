function countdown() {
  const date = Math.floor(Date.now() / 1000);
  const futur = 1760492597;
  const diff = futur - date;

  const days = Math.floor(diff / (60 * 60 * 24));
  const hours = Math.floor((diff / (60 * 60)) % 24);
  const minutes = Math.floor((diff / 60) % 60);
  const seconds = Math.floor(diff % 60);

  setInterval(countdown, 1000);

  document.getElementById("time").innerText =
    `${days}j ${hours} : ${minutes} : ${seconds}`
}

countdown();