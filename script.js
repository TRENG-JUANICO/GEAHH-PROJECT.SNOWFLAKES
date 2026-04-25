function createSnow() {
  const snowContainer = document.getElementById("snow-container");

  for (let i = 0; i < 20; i++) {
    let snow = document.createElement("div");
    snow.classList.add("snowflake");
    snow.innerHTML = "❄";

    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = (Math.random() * 3 + 2) + "s";
    snow.style.fontSize = (Math.random() * 10 + 10) + "px";

    snowContainer.appendChild(snow);

    setTimeout(() => {
      snow.remove();
    }, 5000);
  }
}