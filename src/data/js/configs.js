brunoect_cnnetadaptor_configs = {};
function load_brunoect_cnnetadaptor_configs() {
	var status = localStorage.getItem('status');
	if (status === null) status = 1;
	brunoect_cnnetadaptor_configs['status'] = parseInt(status);

	var google_fonts = localStorage.getItem('google_fonts');
	if (google_fonts === null) google_fonts = 2;
	brunoect_cnnetadaptor_configs['google_fonts'] = parseInt(google_fonts);

	var google_fonts_resource = localStorage.getItem('google_fonts_resource');
	if (google_fonts_resource === null) google_fonts_resource = 'geekzu';
	brunoect_cnnetadaptor_configs['google_fonts_resource'] = google_fonts_resource;

	var google_jslibs = localStorage.getItem('google_jslibs');
	if (google_jslibs === null) google_jslibs = 1;
	brunoect_cnnetadaptor_configs['google_jslibs'] = parseInt(google_jslibs);

	var google_jslibs_resource = localStorage.getItem('google_jslibs_resource');
	if (google_jslibs_resource === null) google_jslibs_resource = 'geekzu_https';
	brunoect_cnnetadaptor_configs['google_jslibs_resource'] = google_jslibs_resource;

	var google_maps = localStorage.getItem('google_maps');
	if (google_maps === null) google_maps = 1;
	brunoect_cnnetadaptor_configs['google_maps'] = parseInt(google_maps);

	var gravatar_imgs = localStorage.getItem('gravatar_imgs');
	if (gravatar_imgs === null) gravatar_imgs = 1;
	brunoect_cnnetadaptor_configs['gravatar_imgs'] = parseInt(gravatar_imgs);

	var gravatar_imgs_resource = localStorage.getItem('gravatar_imgs_resource');
	if (gravatar_imgs_resource === null) gravatar_imgs_resource = 'geekzu_https';
	brunoect_cnnetadaptor_configs['gravatar_imgs_resource'] = gravatar_imgs_resource;

	var custom_block_status = localStorage.getItem('custom_block_status');
	if (custom_block_status === null) custom_block_status = 1;
	brunoect_cnnetadaptor_configs['custom_block_status'] = parseInt(custom_block_status);

	var custom_block_links = localStorage.getItem('custom_block_links');
	if (custom_block_links === null) {
		custom_block_links = "/maps.(googleapis|google|gstatic).com/i\n\
//www.google-analytics.com\n\
//www.googleadservices.com\n\
doubleclick.net/\n\
/.*youtube.com/i\n\
/.*youtu.be/i\n\
/.*facebook.com/i\n\
/.*facebook.net/i\n\
/.*akamaihd.net/i\n\
/.*instagram.com/i\n\
/.*cdninstagram.com/i\n\
//seal.verisign.com\n\
//seal.godaddy.com\n\
//upfront.thefind.com\n\
/.*adroll.com/i\n\
#//hm.baidu.com\n\
#/s\d+.cnzz.com/i\n\
#//c.cnzz.com\n\
#tongji.linezing.com/";
	}
	brunoect_cnnetadaptor_configs['custom_block_links'] = custom_block_links;
	var links = [];
	if (custom_block_links) {
		links = custom_block_links.split('\n');
	}
	brunoect_cnnetadaptor_configs['custom_block_links_arr'] = links;
}
load_brunoect_cnnetadaptor_configs();


resources_google_fonts = {
	'useso': {
		'code': 'useso',
		'pattern': ['//fonts.googleapis.com/', '//fonts.useso.com/'],
		'pattern_regexp': null,
		'http': 1,
		'https': 0,
		'enable': 0
	},
	'geekzu': {
		'code': 'geekzu',
		'pattern': ['//fonts.googleapis.com/', '//fonts.geekzu.org/'],
		'pattern_regexp': null,
		'http': 1,
		'https': 1,
		'enable': 1
	},
	'ustc': {
		'code': 'ustc',
		'pattern': ['//fonts.googleapis.com/', '//fonts.lug.ustc.edu.cn/'],
		'pattern_regexp': null,
		'http': 1,
		'https': 1,
		'enable': 1
	}
};

resources_google_jslibs = {
	'useso': {
		'code': 'useso',
		'pattern': ['//ajax.googleapis.com/', '//ajax.useso.com/'],
		'pattern_regexp': null,
		'http': 1,
		'https': 0,
		'enable': 0
	},
	'geekzu_http': {
		'code': 'geekzu_http',
		'pattern': ['//ajax.googleapis.com/', '//fdn.geekzu.org/ajax/'],
		'pattern_regexp': null,
		'http': 1,
		'https': 0,
		'enable': 1
	},
	'geekzu_https': {
		'code': 'geekzu_https',
		'pattern': ['//ajax.googleapis.com/', '//sdn.geekzu.org/ajax/'],
		'pattern_regexp': null,
		'http': 1,
		'https': 1,
		'enable': 1
	},
	'ustc': {
		'code': 'ustc',
		'pattern': ['//ajax.googleapis.com/', '//ajax.lug.ustc.edu.cn/'],
		'pattern_regexp': null,
		'http': 1,
		'https': 1,
		'enable': 1
	}
};

resources_google_maps = {
	'gmapcn': {
		'code': 'gmapcn',
		'pattern': ['//maps.google.com/', '//maps.google.cn/'],
		'pattern_regexp': null,
		'http': 1,
		'https': 1,
		'enable': 1
	}
};

resources_gravatar_imgs = {
	'geekzu_http': {
		'code': 'geekzu_http',
		'pattern': null,
		'pattern_regexp': ['/(\d+|www|secure|cn|s).gravatar.com\/avatar/i', 'fdn.geekzu.org/avatar'],
		'http': 1,
		'https': 0,
		'enable': 1
	},
	'geekzu_https': {
		'code': 'geekzu_https',
		'pattern': null,
		'pattern_regexp': ['/(\d+|www|secure|cn|s).gravatar.com\/avatar/i', 'sdn.geekzu.org/avatar'],
		'http': 1,
		'https': 1,
		'enable': 1
	},
	'duoshuo': {
		'code': 'duoshuo',
		'pattern': null,
		'pattern_regexp': ['/(\d+|www|secure|cn|s).gravatar.com\/avatar/i', 'gravatar.duoshuo.com/avatar'],
		'http': 1,
		'https': 0,
		'enable': 1
	}
};
