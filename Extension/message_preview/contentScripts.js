const getParamObject = (href) => {
  const url = new URL(href);
  const { pathname } = url;
  const paramObject = {};

  const [_, _, cid, pid] = pathname.split("/");
  paramObject["cid"] = cid;
  paramObject["oldest"] = pid.substring(1, 11);

  return paramObject;
};

window.addEventListener("load", () => {
  chrome.storage.local.get(null, (data) => {
    if (data) {
      document.addEventListener("mouseover", (event) => {
        const targetNode = event.target;
        if (targetNode.tagName === "A") {
          if (targetNode.href.indexOf("slack.com") > 0) {
            const paramObject = getParamObject(targetNode.href);
            const token = data[Object.keys(data)[0]].access_token;
            chrome.runtime.sendMessage(
              {
                type: "getconvo",
                ...paramObject,
                token,
              },
              (response) => {
                console.log(response);
              }
            );
          }
        }
      });
    }
  });
});
