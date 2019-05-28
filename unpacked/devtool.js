//console.log('Hello from -> Devtool');
chrome.devtools.panels.create(
	"ExtractResources",
	"icon.gif",
	"content.html",
	function(panel) { 
		console.log("Content is loaded to panel"); 
	}
);