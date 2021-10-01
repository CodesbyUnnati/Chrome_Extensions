chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    let video = document.getElementsByTagName("video")[0];

    if (video) {
        async function togglePip() {
            if (video.readyState !== 4) {
                alert("Video is not ready!");
                return;
            }

            if (video !== document.pictureInPictureElement) {
                await video.requestPictureInPicture();
            } else {
                await document.exitPictureInPicture();
            }
        }

        togglePip();
    } else {
        alert("No video found!");
    }
});
