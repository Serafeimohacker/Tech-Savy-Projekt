(function () {
  const today = new Date();
  const isValentines =
    today.getMonth() === 1 && today.getDate() === 14;

  if (!isValentines) return;

  // Create hearts container
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = "0";
  container.style.left = "0";
  container.style.width = "100%";
  container.style.height = "100%";
  container.style.pointerEvents = "none";
  container.style.overflow = "hidden";
  container.style.zIndex = "9999";
  document.body.appendChild(container);

  function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animation = `floatUp ${Math.random() * 3 + 4}s linear`;
    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);
  }

  setInterval(createHeart, 300);

  // Add animation style
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes floatUp {
      0% {
        transform: translateY(100vh);
        opacity: 1;
      }
      100% {
        transform: translateY(-10vh);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
})();
