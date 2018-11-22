$(document).ready(function(){
	var menu = $("#tab_menu>li");
	function menu_on(){
		$(this).toggleClass('focus');
		$(this).find('ul').toggleClass('menu_on');
		$(this).siblings().removeClass('focus');
		$(this).siblings().find('ul').removeClass('menu_on');
	}
	menu.on("click", menu_on);
});