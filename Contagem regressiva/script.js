// 1. Data personalizada do evento
const eventDate = new Date("2025-06-25T12:00:00").getTime();
const totalDuration = eventDate - Date.now();

const countdownElement = document.getElementById("countdown");
const messageElement = document.getElementById("message");
const progressBar = document.getElementById("progress-bar");
const sound = document.getElementById("sound");

function pad(value) {
  return value < 10 ? "0" + value : value;
}

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance <= 0) {
    clearInterval(timer);
    countdownElement.innerHTML = "00d 00h 00m 00s";
    messageElement.innerHTML = "🎉 Parabéns SENAI-SP! O evento começou! 🎉";
    sound.play();
    progressBar.style.width = "100%";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // 2. Exibir tudo numa linha com zeros à esquerda
  countdownElement.innerHTML = `${pad(days)}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;

  // 5. Atualizar barra de progresso
  const elapsed = totalDuration - distance;
  const progressPercent = (elapsed / totalDuration) * 100;
  progressBar.style.width = progressPercent + "%";

}, 1000);
