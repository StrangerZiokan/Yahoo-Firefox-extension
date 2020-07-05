// FOR YAHOO 
browser.contextMenus.create({
	id: "yoo",
	title: "Search on Yahoo!!!",
	contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab) {
	const url = "https://in.search.yahoo.com/search?p=" + info.selectionText;
	browser.tabs.create({
		url: url
	});
}
// UNCOMMENT for other search extensions.
/*
// DUCK-DUCK-GO
browser.contextMenus.create({
	id: "dgg",
	title: "Search on Duck-Duck-GO!!!",
	contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab) {
	const url = "https://duckduckgo.com/?q=" + info.selectionText;
	browser.tabs.create({
		url: url
	});
}

*/
