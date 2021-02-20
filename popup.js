// Set up event handlers and inject send_links.js into all frames in the active
// tab.
window.onload = function () {
  console.log("here");
  document.getElementById("removeFeed").addEventListener("click", () => {
    console.log("clicked");
  });
};

// chrome.runtime.onMessage.addListener(function (message, callback) {
//   if (message == "changeColor") {
//     chrome.tabs.executeScript({
//       code: 'document.body.style.backgroundColor="orange"',
//     });
//   }
// });

//   "browser_action": { "default_popup": "popup.html" },
//   "content_scripts": [
//     {
//       "matches": ["*://linkedin.com/*"],
//       "js": ["/feeds.js"]
//     }
//   ],
