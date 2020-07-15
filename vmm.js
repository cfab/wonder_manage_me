// https://blog.logrocket.com/the-ultimate-guide-to-iframes/
// use as https://cdn.jsdelivr.net/gh/cfab/wonder_manage_me@0.1/vmm.min.js
function appOpen() {
  var appContainer = document.createElement("div");
  //appContainer.classList.add('app-container');
  appContainer.setAttribute("id", "appContainer");
  appContainer.style.cssText =
    "position:absolute;top:0; left:0;width:100%;height:100%;opacity:1;z-index:2;background:#000";
  document.body.appendChild(appContainer);
  addIframe();
}

function addIframe() {
  var appContainer = document.querySelector("#appContainer");
  var iframe = document.createElement("iframe");
  iframe.style.cssText =
    "position:absolute;width:100%;height:100%;z-index:3;margin:0;border:0";
  iframe.src = "https://wonderweb.ch";
  //iframe.setAttribute('allowfullscreen');
  iframe.setAttribute("height", "100%");
  iframe.setAttribute("width", "100v%");
  appContainer.appendChild(iframe);
  var closeButton = document.createElement("button");
  closeButton.classList.add("close-button");
  closeButton.style.cssText =
    "position:absolute;right: 0;width:auto;height:auto;z-index:4;background:#000;color:white;font-size:2rem;";
  closeButton.innerHTML = "Hide";
  appContainer.appendChild(closeButton);
  closeButton.onclick = function () {
    appContainer.remove();
    createAppButton();
  };
}
function createAppButton() {
  var appButton = document.createElement("div");
  appButton.classList.add("app-button");
  appButton.style.cssText =
    "position:absolute;right: 0;width:auto;height:auto;padding:1rem;z-index:1;background:#000;color:white;font-size:2rem;";
  appButton.innerHTML = "Show";
  document.body.style.cssText = "margin:0;padding:0";
  document.body.appendChild(appButton);
  appButton.onclick = function () {
    appOpen();
    appButton.remove();
  };
}
createAppButton();
