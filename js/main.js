$(".catalog__form").on("submit",function(e){e.stopPropagation();e.preventDefault();var b=this;$(".submit",b);var c=new FormData;e=$("input[type=file]");$(".submit",b).val("\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430...");$("input, textarea",b).attr("disabled","");c.append("\u0418\u043c\u044f \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044f",$('[name="name"]',b).val());c.append("\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",$('[name="phone"]',b).val());
c.append("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430",$('[name="prod__name"]',b).val());c.append("\u0420\u0430\u0437\u043c\u0435\u0440",$('[name="size__prod"]',b).val());c.append("\u0426\u0435\u043d\u0430",$('[name="cena__prod"]',b).val());e.each(function(d,a){var f=a.files;f&&$.each(f,function(g,h){c.append(g,h)})});$.ajax({url:"ajax.php",type:"POST",data:c,cache:!1,dataType:"json",processData:!1,contentType:!1,xhr:function(){var d=$.ajaxSettings.xhr();
d.upload&&d.upload.addEventListener("progress",function(a){a.lengthComputable&&(a=a.loaded/a.total*100,a=a.toFixed(0),$(".submit",b).html(a+"%"))},!1);return d},error:function(d,a){},complete:function(){console.log("Complete");b.reset()}});return!1});
$(".popup__first").on("submit",function(e){e.stopPropagation();e.preventDefault();var b=this;$(".submit",b);var c=new FormData;e=$("input[type=file]");$(".submit",b).val("\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430...");$("input, textarea",b).attr("disabled","");c.append("\u0418\u043c\u044f",$('[name="name"]',b).val());c.append("\u0422\u0435\u043b\u0435\u0444\u043e\u043d",$('[name="phone"]',b).val());c.append("\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",$('[name="comment"]',
b).val());e.each(function(d,a){var f=a.files;f&&$.each(f,function(g,h){c.append(g,h)})});$.ajax({url:"ajax.php",type:"POST",data:c,cache:!1,dataType:"json",processData:!1,contentType:!1,xhr:function(){var d=$.ajaxSettings.xhr();d.upload&&d.upload.addEventListener("progress",function(a){a.lengthComputable&&(a=a.loaded/a.total*100,a=a.toFixed(0),$(".submit",b).html(a+"%"))},!1);return d},error:function(d,a){},complete:function(){console.log("Complete");b.reset()}});return!1});
