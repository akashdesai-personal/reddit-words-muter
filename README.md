# Reddit Mute Words Chrome Extension

A Chrome extension that allows you to hide Reddit posts containing specific words or phrases. Perfect for filtering out content you don't want to see while browsing Reddit.

## Features

- **Word Management**: Add, edit, and remove muted words through a simple popup interface
- **Comma-Separated List**: Manage multiple words easily with a comma-separated format
- **Real-time Filtering**: Automatically hides posts containing muted words as you browse
- **Infinite Scroll Support**: Works with Reddit's infinite scroll feature
- **Cross-device Sync**: Your muted words sync across all your Chrome browsers
- **Case-Insensitive**: Matches words regardless of capitalization

## Installation

### For Development/Testing

1. **Clone or download** this repository to your local machine
2. **Open Chrome** and navigate to `chrome://extensions/`
3. **Enable Developer Mode** by toggling the switch in the top right
4. **Click "Load unpacked"** and select the folder containing these files
5. **Pin the extension** to your toolbar for easy access

### Files Required

- `manifest.json` - Extension configuration
- `popup.html` - User interface for managing muted words
- `popup.js` - Logic for the popup interface
- `content.js` - Script that runs on Reddit pages to hide posts

## How to Use

### Setting Up Muted Words

1. **Click the extension icon** in your Chrome toolbar
2. **Add words** in two ways:
   - Type a word in the input field and click "Add"
   - Edit the comma-separated list directly in the textarea
3. **Click "Save"** to store your changes

### Example Muted Words
```
politics, spoiler, spoilers, leaked, leak
```

### Browsing Reddit

- Navigate to any Reddit page (`https://www.reddit.com/*`)
- Posts containing any of your muted words will be automatically hidden
- The extension works on all Reddit pages including home, subreddits, and search results

## Technical Details

### How It Works

1. **Content Script**: `content.js` runs on every Reddit page
2. **Post Detection**: Finds Reddit posts using the `[id^="thing_"]` selector
3. **Word Matching**: Checks each post's text content against your muted words list
4. **Dynamic Updates**: Uses MutationObserver to handle new posts loaded via infinite scroll
5. **Storage**: Uses Chrome's sync storage to persist your muted words across devices

### Browser Compatibility

- Chrome/Chromium browsers (Chrome, Edge, Brave, etc.)
- Requires Manifest V3 support

### Permissions

- `storage`: To save and sync your muted words
- `scripting`: For content script injection
- `https://www.reddit.com/*`: To run on Reddit pages

## Troubleshooting

### Posts Not Being Hidden
- Make sure you've saved your muted words
- Check that the words are comma-separated
- Verify the extension is enabled on `chrome://extensions/`
- Try refreshing the Reddit page

### Extension Not Working
- Ensure you're on a Reddit page (`reddit.com`)
- Check the browser console for any error messages
- Verify all files are present in the extension folder

## Development

### Project Structure
```
reddit_mute_words/
├── manifest.json    # Extension configuration
├── popup.html       # Popup user interface
├── popup.js         # Popup logic
├── content.js       # Content script for Reddit pages
└── README.md        # This file
```

### Customization

You can modify the extension by:
- Changing the popup styling in `popup.html`
- Adjusting the post detection logic in `content.js`
- Adding new features to the popup interface

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to submit issues, feature requests, or pull requests to improve the extension! 