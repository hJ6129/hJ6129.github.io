$(document).ready(function(){
	$("#tab_menu>li").on("click",function(e){
		if(event.target.children.length == "1"){
			$(this).parent().toggleClass("select");
			$(this).toggleClass('focus');
			$(this).find('ul').toggleClass('menu_on');
			$(this).siblings().removeClass('focus');
			$(this).siblings().find('ul').removeClass('menu_on');
		}
	});
});