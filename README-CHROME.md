# Song ID Chrome Extension

This is a Chrome version of the Song ID extension that uses ACRCloud API to identify music playing in your browser.

## Installation

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked" and select this folder
4. The extension should now appear in your extensions list

## Setup

1. Click the extension icon in the toolbar to identify music
2. Go to the options page (right-click extension icon → Options) to configure your ACRCloud credentials
3. For ACRCloud setup instructions, see the options page

## Features

- Identifies music playing in browser tabs
- Supports both audio and video elements
- Configurable recording length (default 8 seconds, max 15 seconds)
- Uses ACRCloud's free tier (100 identifications per day)

## How it works

1. Click the extension icon while music is playing
2. The extension captures audio from the current tab
3. Audio is sent to ACRCloud for identification
4. Results show song title, artist, and search links

## Troubleshooting

- Make sure you're on a page with audio/video playing
- Check that ACRCloud credentials are configured in options
- The extension needs permission to access the current tab

## Privacy

- Audio is only captured when you click the extension icon
- No audio is stored or sent except to ACRCloud for identification
- Check ACRCloud's privacy policy for their data handling