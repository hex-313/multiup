$(function(){'use strict';$('#fileupload').fileupload({sequentialUploads:true});$('#fileupload').fileupload('option','redirect',window.location.href.replace(/\/[^\/]*$/,'/cors/result.html?%s'));$('#fileupload').bind('fileuploaddone',function(e,data){var url=data.result.files[0].url;var urlShort=url.split('/');urlShort=urlShort.slice(0,-1);urlShort=urlShort.join("/");urlShort=urlShort.replace("/download/","/");$("#textarea-links-short").append(urlShort+"\n");$("#textarea-links-long").append(url+"\n");$("#result-upload").removeClass("hidden");$("#result-upload").addClass("animated fadeInLeft");});if(window.location.hostname==='blueimp.github.io'){$('#fileupload').fileupload('option',{url:'//jquery-file-upload.appspot.com/',disableImageResize:/Android(?!.*Chrome)|Opera/.test(window.navigator.userAgent),maxFileSize:999000,acceptFileTypes:/(\.|\/)(gif|jpe?g|png)$/i});if($.support.cors){$.ajax({url:'//jquery-file-upload.appspot.com/',type:'HEAD'}).fail(function(){$('<div class="alert alert-danger"/>').text('Upload server currently unavailable - '+
new Date()).appendTo('#fileupload');});}}else{$('#fileupload').addClass('fileupload-processing');$.ajax({url:$('#fileupload').fileupload('option','url'),dataType:'json',context:$('#fileupload')[0]}).always(function(){$(this).removeClass('fileupload-processing');}).done(function(result){$(this).fileupload('option','done').call(this,$.Event('done'),{result:result});});}});