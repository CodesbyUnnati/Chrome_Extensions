setInterval(() => {
    for (const button of document.getElementsByClassName("ytp-ad-skip-button")) {
      button.click(); // "Skip Ad" or "Skip Ads" buttons
    }
  }, 300);