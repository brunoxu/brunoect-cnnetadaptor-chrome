chrome.webRequest.onBeforeRequest.addListener(
	function(request) {
		if (! brunoect_cnnetadaptor_configs['status']) return;

		var requestUrl = request.url;
		var requestUrl_lower = requestUrl.toLowerCase();
		var requestIsHttps = (requestUrl_lower.indexOf('https')===0);
		var requestProtocol = (requestIsHttps?'https':'http');

		var is_webfont_js = false;
		if (requestUrl.match(/fonts.googleapis.com/i) || is_webfont_js) {
			if (brunoect_cnnetadaptor_configs['google_fonts'] == 0) {
				return;
			} else if (brunoect_cnnetadaptor_configs['google_fonts'] == 2) {
				return {cancel: true};
			}

			var resources = resources_google_fonts;
			var resource = null;
			if (resources[brunoect_cnnetadaptor_configs['google_fonts_resource']]) {
				resource = resources[brunoect_cnnetadaptor_configs['google_fonts_resource']];
				if (! resource['enable']) resource = null;
			}
			if (! resource) {
				for (var key in resources) {
					if (! resources[key]['enable']) continue;
					if (resources[key][requestProtocol]) {
						resource = resources[key];
						break;
					}
				}
			}
			if (! resource) {
				return;
			}

			// TODO: webfont js

			if (resource['pattern']) {
				return {redirectUrl: requestUrl.replace(resource['pattern'][0], resource['pattern'][1])};
			} else if (resource['pattern_regexp']) {
				$reg_mode_ind = resource['pattern_regexp'][0].lastIndexOf('/') + 1;
				$reg_mode = resource['pattern_regexp'][0].substr($reg_mode_ind);
				$regexp_str = resource['pattern_regexp'][0].substr(1, $reg_mode_ind-2);
				return {redirectUrl: requestUrl.replace(new RegExp($regexp_str, $reg_mode), resource['pattern_regexp'][1])};
			}
		} else if (requestUrl.match(/ajax.googleapis.com/i)) {
			if (brunoect_cnnetadaptor_configs['google_jslibs'] == 0) {
				return;
			} else if (brunoect_cnnetadaptor_configs['google_jslibs'] == 2) {
				return {cancel: true};
			}

			var resources = resources_google_jslibs;
			var resource = null;
			if (resources[brunoect_cnnetadaptor_configs['google_jslibs_resource']]) {
				resource = resources[brunoect_cnnetadaptor_configs['google_jslibs_resource']];
				if (! resource['enable']) resource = null;
			}
			if (! resource) {
				for (var key in resources) {
					if (! resources[key]['enable']) continue;
					if (resources[key][requestProtocol]) {
						resource = resources[key];
						break;
					}
				}
			}
			if (! resource) {
				return;
			}

			if (resource['pattern']) {
				return {redirectUrl: requestUrl.replace(resource['pattern'][0], resource['pattern'][1])};
			} else if (resource['pattern_regexp']) {
				$reg_mode_ind = resource['pattern_regexp'][0].lastIndexOf('/') + 1;
				$reg_mode = resource['pattern_regexp'][0].substr($reg_mode_ind);
				$regexp_str = resource['pattern_regexp'][0].substr(1, $reg_mode_ind-2);
				return {redirectUrl: requestUrl.replace(new RegExp($regexp_str, $reg_mode), resource['pattern_regexp'][1])};
			}
		} else if (requestUrl.match(/maps.google.com/i)) {
			if (brunoect_cnnetadaptor_configs['google_maps'] == 0) {
				return;
			} else if (brunoect_cnnetadaptor_configs['google_maps'] == 2) {
				return {cancel: true};
			}

			var resources = resources_google_maps;
			var resource = null;
			/*if (resources[brunoect_cnnetadaptor_configs['google_maps_resource']]) {
				resource = resources[brunoect_cnnetadaptor_configs['google_maps_resource']];
				if (! resource['enable']) resource = null;
			}*/
			if (! resource) {
				for (var key in resources) {
					if (! resources[key]['enable']) continue;
					if (resources[key][requestProtocol]) {
						resource = resources[key];
						break;
					}
				}
			}
			if (! resource) {
				return;
			}

			if (resource['pattern']) {
				return {redirectUrl: requestUrl.replace(resource['pattern'][0], resource['pattern'][1])};
			} else if (resource['pattern_regexp']) {
				$reg_mode_ind = resource['pattern_regexp'][0].lastIndexOf('/') + 1;
				$reg_mode = resource['pattern_regexp'][0].substr($reg_mode_ind);
				$regexp_str = resource['pattern_regexp'][0].substr(1, $reg_mode_ind-2);
				return {redirectUrl: requestUrl.replace(new RegExp($regexp_str, $reg_mode), resource['pattern_regexp'][1])};
			}
		} else if (requestUrl.match(/(\d+|www|secure|cn|s).gravatar.com/i)) {
			if (brunoect_cnnetadaptor_configs['gravatar_imgs'] == 0) {
				return;
			} else if (brunoect_cnnetadaptor_configs['gravatar_imgs'] == 2) {
				return {cancel: true};
			}

			var resources = resources_gravatar_imgs;
			var resource = null;
			if (resources[brunoect_cnnetadaptor_configs['gravatar_imgs_resource']]) {
				resource = resources[brunoect_cnnetadaptor_configs['gravatar_imgs_resource']];
				if (! resource['enable']) resource = null;
			}
			if (! resource) {
				for (var key in resources) {
					if (! resources[key]['enable']) continue;
					if (resources[key][requestProtocol]) {
						resource = resources[key];
						break;
					}
				}
			}
			if (! resource) {
				return;
			}

			if (resource['pattern']) {
				return {redirectUrl: requestUrl.replace(resource['pattern'][0], resource['pattern'][1])};
			} else if (resource['pattern_regexp']) {
				$reg_mode_ind = resource['pattern_regexp'][0].lastIndexOf('/') + 1;
				$reg_mode = resource['pattern_regexp'][0].substr($reg_mode_ind);
				$regexp_str = resource['pattern_regexp'][0].substr(1, $reg_mode_ind-2);
				return {redirectUrl: requestUrl.replace(new RegExp($regexp_str, $reg_mode), resource['pattern_regexp'][1])};
			}
		} else if (brunoect_cnnetadaptor_configs['custom_block_status'] && brunoect_cnnetadaptor_configs['custom_block_links_arr'].length > 0) {
			for (var key in brunoect_cnnetadaptor_configs['custom_block_links_arr']) {
				var link = brunoect_cnnetadaptor_configs['custom_block_links_arr'][key].trim();
				if (! link) {
					continue;
				} else if (link.match(/^#/)) {
					continue;
				} else if (link.length < 3) {
					continue;
				} else if (link.match(/^\/.*\/i?$/)) {
					if (link.length < 5) continue;
					var matches = link.match(/^\/(.*)\/i?$/);
					if (link.slice(-1)=='i') {
						var regExp = new RegExp(matches[1],'i');
					} else {
						var regExp = new RegExp(matches[1]);
					}
					if (regExp.test(requestUrl)) {
						return {cancel: true};
					}
				} else {
					if (requestUrl.indexOf(link)>=0) {
						return {cancel: true};
					}
				}
			}
		}
	},
	// filters
	{
		urls: ["<all_urls>"]
	},
	// extraInfoSpec
	["blocking"]
);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.hasOwnProperty("action")) {
		if (request.action == 'reload_configs') {
			load_brunoect_cnnetadaptor_configs();
		} else if (request.action == 'status_update') {
			load_brunoect_cnnetadaptor_configs();
			if (brunoect_cnnetadaptor_configs['status']) {
				popup.enableIcon();
			} else {
				popup.disableIcon();
			}
		}
	}
});
