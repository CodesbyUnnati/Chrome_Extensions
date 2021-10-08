const popupCard: HTMLDivElement | null = document.querySelector("#popup-card");
const textBox: HTMLDivElement | null = document.querySelector("#popup-card > div.text-box");
const closeButton: HTMLDivElement | null = document.querySelector("#popup-card > div.close-button");
const copyButton: HTMLButtonElement | null = document.querySelector("#popup-card > button.copy-button");

closeButton?.addEventListener("click", (): void => {
  popupCard?.classList.add("hidden");
});

popupCard?.addEventListener("transitionend", (): void => {
  if (popupCard.classList.contains("hidden")) popupCard.style.setProperty("display", "none");
});

copyButton?.addEventListener("click", function (): void {
  if (!textBox?.textContent) return;
  navigator.clipboard.writeText(textBox.textContent);
  copyButton.style.setProperty("background-color", "#20c997");
});

function slideUp(text: string): void {
  if (textBox) textBox.textContent = text;
  copyButton?.style.setProperty("background-color", "gold");
  popupCard?.style.setProperty("display", "flex");
  popupCard?.classList.remove("hidden");
}

export default slideUp;
