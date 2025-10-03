chrome.action.onClicked.addListener(async (tab) => {
	// Basically injects into the attention-bar iframes too.
	// Guess this is not great, but it's not life-threatening either..
	try {
		// Inject the script using the function approach with proper error handling
		const results = await chrome.scripting.executeScript({
			target: { tabId: tab.id, allFrames: true },
			func: () => {
				// This will be replaced with the actual script content
				console.log('Song ID: Script injected successfully');
				return true;
			}
		});
		console.log('Song ID: Script injection results:', results);
	} catch (err) {
		console.error('Song ID: Failed to inject script:', err);
	}
});
