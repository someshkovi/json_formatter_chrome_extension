chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openJson",
    title: "Show Json",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const jsonString = info.selectionText;
  chrome.tabs.create({
    url:
      chrome.runtime.getURL("index.html") +
      "?json=" +
      encodeURIComponent(jsonString),
  });
});

chrome.action.onClicked.addListener(function () {
  chrome.tabs.create({ url: "index.html" });
});
