chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse){
		alert("background.js 1");
		sendResponse({farewell: "goodby"});
	});