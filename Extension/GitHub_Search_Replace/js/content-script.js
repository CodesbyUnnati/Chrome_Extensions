
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	const cmd  = request.cmd;
	const replaceData = request.replaceData; 
	const regex = RegExp(replaceData, 'gi');
	var container = document.body
	if(cmd == 'replace_cmd') {
		const targetData = request.targetData; 
		const instance =  findAndReplaceDOMText(container, {
			find: regex,
			replace: function(portion) {
				called = true;
				var el = document.createElement('span');
				el.innerHTML = targetData;
				return targetData;
			},
			forceContext: findAndReplaceDOMText.NON_INLINE_PROSE
		});
		sendResponse({ result: true, length: instance.reverts.length })
	} else if (cmd === 'search_cmd') {
		// todoList
		const instance =  findAndReplaceDOMText(container, {
			find: regex
		});
		sendResponse({ result: true, length: instance.reverts.length })
	}
	else {
		sendResponse({ result: true, length: 0 })
		console.log('Successful');
	}
});
