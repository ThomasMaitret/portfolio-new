document.addEventListener("DOMContentLoaded", function () {
  setRandomColors();
});

function setRandomColors() {
  const rgb = [255, 0, 0];

  setInterval(() => {
    rgb[0] = Math.round(Math.random() * 255);
    rgb[1] = Math.round(Math.random() * 255);
    rgb[2] = Math.round(Math.random() * 255);

    const brightness = Math.round(
      (parseInt(rgb[0]) * 299 +
        parseInt(rgb[1]) * 587 +
        parseInt(rgb[2]) * 114) /
        1000
    );
    const textColor = brightness > 125 ? "black" : "white";
    const backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;

    document.documentElement.style.setProperty(`--text-color`, textColor);
    document.documentElement.style.setProperty(`--bg-color`, backgroundColor);
  }, 4000);
}
