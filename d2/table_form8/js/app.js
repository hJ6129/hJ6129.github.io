$(document).ready(function(){
	//ie 구븐하는 변수
	var agent = navigator.userAgent.toLowerCase();
	function iplace(){
		$("#input_place").parent("td").addClass("iplace");
		if($("#input_place").val() != "") remove_iplace();
	}
	function remove_iplace(){
		$("#input_place").parent("td").removeClass("iplace");
	}
	function tplace(){
		$("#textarea_place").parent("td").addClass("tplace");
		if($("#textarea_place").val() != "") remove_tplace();
	}
	function remove_tplace(){
		$("#textarea_place").parent("td").removeClass("tplace");
	}

	//ie일 경우에만
	if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
		$("input, textarea").removeAttr('placeholder');
		$("#input_place").val() != "" ? remove_iplace() : iplace();
		$("#textarea_place").val() != "" ? remove_tplace() : tplace();
		function ikeydown(){
			setTimeout(function(){
				$("#input_place").val() != "" ? remove_iplace() : iplace();
				$("#textarea_place").val() != "" ? remove_tplace() : tplace();
			});
		};

		$("#textarea_place").on("keydown", ikeydown);
		$(".tplace *").on("mouseenter", remove_tplace);
		$("#textarea_place").on("mouseleave", tplace);

		$("#input_place").on("keydown", ikeydown);
		$(".iplace *").on("mouseenter", remove_iplace);
		$("#input_place").on("mouseleave", iplace);
	}else{ //ie 아닐때
	    remove_iplace();
	    remove_tplace();
	}
});