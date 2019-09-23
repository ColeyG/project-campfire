const gameCanvas = document.querySelector('#game');

function resize() {
  if (window.innerHeight * 1.7778 > window.innerWidth) {
    const gameSizeCoefficent = window.innerWidth / 1920;
    gameCanvas.style.transform = `scale(${gameSizeCoefficent})`;
    gameCanvas.style.marginTop = `${(window.innerHeight - gameCanvas.offsetHeight * gameSizeCoefficent) / 2}px`;
    gameCanvas.style.marginLeft = '0px';
    gameCanvas.setAttribute('game-size-coefficient', gameSizeCoefficent);
  } else {
    const gameSizeCoefficent = window.innerHeight / 1080;
    gameCanvas.style.transform = `scale(${gameSizeCoefficent})`;
    gameCanvas.style.marginLeft = `${(window.innerWidth - gameCanvas.offsetWidth * gameSizeCoefficent) / 2}px`;
    gameCanvas.style.marginTop = '0px';
    gameCanvas.setAttribute('game-size-coefficient', gameSizeCoefficent);
  }
}

window.addEventListener('resize', resize);

resize();
