function getMutedWords(callback) {
  chrome.storage.sync.get(['mutedWords'], (result) => {
    const words = (result.mutedWords || '').split(',').map(w => w.trim().toLowerCase()).filter(w => w);
    callback(words);
  });
}

function hideMutedPosts(words) {
  if (!words.length) return;
  const posts = document.querySelectorAll('[id^="thing_"]');
  posts.forEach(post => {
    const text = post.innerText.toLowerCase();
    if (words.some(word => word && text.includes(word))) {
      post.style.display = 'none';
    }
  });
}

function runMute() {
  getMutedWords(hideMutedPosts);
}

// Initial run
runMute();
// Also run when DOM changes (for infinite scroll)
const observer = new MutationObserver(runMute);
observer.observe(document.body, { childList: true, subtree: true }); 