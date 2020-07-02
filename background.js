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