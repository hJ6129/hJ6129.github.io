$(document).ready(function(){
	$("#tab_menu>li").on("click",function(e){
		if(e.target.children.length == "1"){
			$(this).parent().addClass("select");
			$(this).toggleClass('focus').siblings().removeClass('focus');
			if($(this).siblings().attr('class') != "focus" && $(this).attr('class') != "focus"){
				$(this).parent().removeClass("select")
			}
		}
	});
});