// **bug** il messaggio non viene renderizzato
export function gameMessage(message) {
  const messageElement = document.querySelector(".message");

  if (messageElement) {
    messageElement.textContent = message;
  }
}
