// Load words from storage
function loadWords() {
  chrome.storage.sync.get(['mutedWords'], (result) => {
    document.getElementById('wordsList').value = result.mutedWords || '';
  });
}

// Save words to storage
function saveWords() {
  const words = document.getElementById('wordsList').value;
  chrome.storage.sync.set({ mutedWords: words }, () => {
    alert('Muted words saved!');
  });
}

// Add new word to textarea
function addWord() {
  const textarea = document.getElementById('wordsList');
  const newWord = document.getElementById('newWord').value.trim();
  if (!newWord) return;
  let words = textarea.value.split(',').map(w => w.trim()).filter(w => w);
  if (!words.includes(newWord)) {
    words.push(newWord);
    textarea.value = words.join(', ');
  }
  document.getElementById('newWord').value = '';
}

document.getElementById('addWord').addEventListener('click', addWord);
document.getElementById('saveWords').addEventListener('click', saveWords);
document.addEventListener('DOMContentLoaded', loadWords); 