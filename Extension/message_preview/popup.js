const login = document.getElementById("login");
login.addEventListener("click", () => {
  chrome.runtime.sendMessage({ type: "oauth" }, (resp) => {
    chrome.storage.local.set(resp);
  });
});
