const markiplierFace = chrome.runtime.getURL("markiplier.jpg");

// replaces all images with markiplier
function replaceImages() {
  document.querySelectorAll("img").forEach((img) => {
    if (!img.dataset.replaced) {
      img.src = markiplierFace;
      img.srcset = ""; 
      img.style.objectFit = "cover";
      img.dataset.replaced = "true"; 
    }
  });
}

replaceImages();

// checks for new images
const observer = new MutationObserver(() => {
  replaceImages();
});

observer.observe(document.body, { childList: true, subtree: true });
