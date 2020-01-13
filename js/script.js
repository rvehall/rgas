$(document).ready(function() {
    $(document).on("pageshow", "[data-role='page']",
	function(){
		var current = $(".ui-page-action").attr('id');
		$("[data-role='footer'] a.ui-btn-active").removeClass("ui-btn-active");
		$("[data-role='footer'] a").each(function(){
			if ($(this).attr('href') === '#' + current){
				$(this).addClass("ui-btn-active");
		}
	});
		});
});