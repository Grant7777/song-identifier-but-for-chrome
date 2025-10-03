const ext = (typeof browser !== 'undefined') ? browser : (typeof chrome !== 'undefined' ? chrome : {});

ext.browserAction.onClicked.addListener( () => {
	// Basically injects into the attention-bar iframes too.
	// Guess this is not great, but it's not life-threatening either..
    ext.tabs.executeScript({
		file: "/dist/index.js",
		allFrames: true
	})

})
