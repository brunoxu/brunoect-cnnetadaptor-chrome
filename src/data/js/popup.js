$(function(){
	$(':checkbox[name=status]').prop('checked', brunoect_cnnetadaptor_configs['status']?true:false);

	var initData = function() {
		$('select[name=google_fonts]').val(brunoect_cnnetadaptor_configs['google_fonts']);
		$('select[name=google_fonts_resource]').val(brunoect_cnnetadaptor_configs['google_fonts_resource']);
		$('select[name=google_jslibs]').val(brunoect_cnnetadaptor_configs['google_jslibs']);
		$('select[name=google_jslibs_resource]').val(brunoect_cnnetadaptor_configs['google_jslibs_resource']);
		$('select[name=google_maps]').val(brunoect_cnnetadaptor_configs['google_maps']);
		$('select[name=gravatar_imgs]').val(brunoect_cnnetadaptor_configs['gravatar_imgs']);
		$('select[name=gravatar_imgs_resource]').val(brunoect_cnnetadaptor_configs['gravatar_imgs_resource']);
		$('select[name=custom_block_status]').val(brunoect_cnnetadaptor_configs['custom_block_status']);
		$('textarea[name=custom_block_links]').val(brunoect_cnnetadaptor_configs['custom_block_links']);

		$('#btnSave').removeAttr('disabled');
	}
	initData();

	$(':checkbox[name=status]').change(function(){
		_self = $(this);
		localStorage.setItem('status', _self.prop('checked')?1:0);

		chrome.runtime.sendMessage({
			action:'status_update'
		});

		$('#statusMsg').html(_self.prop('checked')?'启用成功':'禁用成功');
		setTimeout(function(){
			$('#statusMsg').html('');
		}, 5000);
	});

	$('#btnSave').click(function(){
		$('#btnSave').attr('disabled','disabled');

		localStorage.setItem('google_fonts', $('select[name=google_fonts]').val());
		localStorage.setItem('google_fonts_resource', $('select[name=google_fonts_resource]').val());
		localStorage.setItem('google_jslibs', $('select[name=google_jslibs]').val());
		localStorage.setItem('google_jslibs_resource', $('select[name=google_jslibs_resource]').val());
		localStorage.setItem('google_maps', $('select[name=google_maps]').val());
		localStorage.setItem('gravatar_imgs', $('select[name=gravatar_imgs]').val());
		localStorage.setItem('gravatar_imgs_resource', $('select[name=gravatar_imgs_resource]').val());
		localStorage.setItem('custom_block_status', $('select[name=custom_block_status]').val());
		localStorage.setItem('custom_block_links', $('textarea[name=custom_block_links]').val());

		chrome.runtime.sendMessage({
			action:'reload_configs'
		});

		$('#btnSave').val('保存成功');
		setTimeout(function(){
			$('#btnSave').val('保存设置').removeAttr('disabled');
		}, 5000);
	});
});
