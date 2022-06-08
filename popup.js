const count = document.querySelector("#count")
const siteCount = document.querySelector("#siteCount");
const clearButton = document.querySelector("button");

chrome.extension.onMessage.addListener((message, sender, msgResponse)=>{
  count.textContent = JSON.stringify(message.message);
  siteCount.textContent = JSON.stringify(message.adsCountOnCurrentSite);
})


clearButton.addEventListener('click', ()=>{
  chrome.runtime.sendMessage({ message: "clear counts"})
})