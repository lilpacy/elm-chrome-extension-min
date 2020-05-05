chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) { // get active window and tab
        chrome.tabs.sendMessage(tabs[0].id, {message: 'Clicked!'}, function (item) { // send message from background.js to content_scripts.js
            if (!item) { // if content_scripts.js doesn't send message back to background.js
                alert('Failed!');
                return;
            }
        });
    });
});
