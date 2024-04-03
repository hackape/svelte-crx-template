import browser from "webextension-polyfill";

browser.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    browser.tabs.create({ url: "data:text/html;utf8,<h1>hello world</h1>" });
  }
});
