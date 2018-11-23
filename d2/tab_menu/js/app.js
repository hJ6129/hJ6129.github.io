$(document).ready(function(){
	$("#tab_menu>li").on("click",function(e){
		if(e.target.children.length == "1"){
			$(this).parent().addClass("select");
			$(this).toggleClass('focus');
			$(this).find('ul').toggleClass('menu_on');
			$(this).siblings().removeClass('focus');
			$(this).siblings().find('ul').removeClass('menu_on');
			if($(this).siblings().attr('class') != "focus" && $(this).attr('class') != "focus"){
				$(this).parent().removeClass("select")
			}
		}

	});
});