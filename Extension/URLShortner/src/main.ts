import { onePt, gitIo, goTiny, isGd } from "./urlShortners";
import slideUp from "./popup";

const shortners: Array<HTMLElement> = Array.from(document.querySelectorAll("div.sh-item"));
const submitButton: HTMLElement | null = document.querySelector("#input-form > button");
const inputUrl: HTMLInputElement | null = document.querySelector("#shorten_url");

async function getCurrentTab(): Promise<chrome.tabs.Tab> {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

shortners.forEach((el: HTMLElement): void => {
  el.addEventListener("click", function (t: Event) {
    const element: HTMLElement | null = (t.target as HTMLDivElement).classList.contains("sh-item")
      ? (t.target as HTMLDivElement)
      : (t.target as HTMLDivElement).parentElement;
    if (!element) return;
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    } else {
      shortners.forEach((_e: HTMLElement) => _e.classList.remove("active"));
      element.classList.add("active");
    }
  });
});

function getChoosenShortner(): string | undefined {
  return (shortners.find((el: HTMLElement) => el.classList.contains("active")) || shortners[0]).dataset.name;
}

(async (): Promise<void> => {
  const tab: string | undefined = (await getCurrentTab()).url;
  if (inputUrl && tab) inputUrl.value = tab;
})();

submitButton?.addEventListener("click", async (e: Event): Promise<void> => {
  e.preventDefault();
  // if ((e.target as HTMLElement).nodeName !== "BUTTON") return;
  const val: string = (await getShortUrl()) || "Error";
  slideUp(val);
});

async function getShortUrl(): Promise<string | void> {
  if (!(inputUrl && inputUrl.value && inputUrl.value.startsWith("https://"))) return;
  switch (getChoosenShortner()) {
    case "onePt":
      return await onePt(inputUrl.value);
    case "gitIo":
      return await gitIo(inputUrl.value);
    case "goTiny":
      return await goTiny(inputUrl.value);
    case "isGd":
      return await isGd(inputUrl.value);
    default:
      break;
  }
}
