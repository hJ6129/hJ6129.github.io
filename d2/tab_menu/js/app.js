$(document).ready(function(){
	$("#tab_menu>li>a").on("click",function(e){
		if(e.target.parentElement.children.length == "2"){
			$(this).parents('ul').addClass("select");
			$(this).parent().toggleClass('focus').siblings().removeClass('focus');
			if($(this).parent().siblings().attr('class') != "focus" && $(this).parent().attr('class') != "focus"){
				$(this).parents('ul').removeClass("select")
			}
		}
	});
});