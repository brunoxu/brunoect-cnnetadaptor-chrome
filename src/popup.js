var popup = new (function() {
	this.init = function() {
		if(brunoect_cnnetadaptor_configs['status']) {
			this.enableIcon();
		} else {
			this.disableIcon();
		}
	};
	this.enableIcon = function() {
		chrome.browserAction.setIcon({
			path: {
				"19": "data/img/19.png",
				"38": "data/img/38.png"
			}
		});
	};
	this.disableIcon = function() {
		chrome.browserAction.setIcon({
			path: {
				"19": "data/img/19-off.png",
				"38": "data/img/38-off.png"
			}
		});
	};
});
popup.init();
