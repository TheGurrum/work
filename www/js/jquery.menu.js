$(document).ready(function() {

	var header_h = 540; // Высота шапки
	var menu = $('#menu');
	menu.css({'position' : 'fixed', 'top' : header_h + 'px'});
	
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top < header_h){
			menu.css({'top': header_h - top +'px'});
		} else {
			menu.css({'top': '0'});
		}
	});
//нажатие на кнопку расчет


//фотогалерея
var slider1 = $('.bxslider').bxSlider({
		pager: false
	});
//Проекты
var slider2 = $('.bxslider-main').bxSlider({
		pager: false,
		controls: false,
		auto: true,
		autoHover: true
	});
	$(".prev").bind("click",onPrevClick); //обработка нажатия стрелок назад
	$(".next").bind("click",onNextClick);	// и вперед
	$(".preview").bind("click",onPreviewClick); //а также переключения изображений по миниатюре
	$(".projects-description a").bind("click",onZakClick);
	
	
function onPrevClick(){ //проекты клик назад
	slider2.goToPrevSlide();
	$(".projects-description").css({'display':'block'});
	return false;
}
function onNextClick(){ //проекты клик вперед
	slider2.goToNextSlide();
	$(".projects-description").css({'display':'block'});
	return false;
}
function onPreviewClick(event) { //обработка нажатия превью в Проектах
	$(".bigview").fadeTo(30,0.33,function(){
		$($(event.currentTarget).parent().parent().children('.bigview').html($(event.currentTarget).html()));
		$(this).fadeTo(200,1);
		$($(event.currentTarget).parent().parent().children(".projects-description").css({'display':'none'}));
	});
	$(".preview").add(".bigview").css("background","inherit");
	$(event.currentTarget).css("background-color","#a6a6ff");
	//setTimeout(function () {$($(event.currentTarget).parent().parent().children(".projects-description").css({'display':'block'}));},4000);
    return false;
	}
});
function onBackClick(){ //обработка нажатия кнопки "назад" в формах
	$("#form-raschet").css({'display':'none'});
	return false;
}
function onRashClick(){ //расчет
	var width = document.documentElement.clientWidth;
	var height = document.documentElement.clientHeight;
	$("#form-raschet").css({'width' : width,'height' : height,'position' : 'fixed','top' : '0','left' : '0','right' : width,'bottom' : height}).fadeTo(150,1,function(){
		$(this).css({'display':'block'});
	});
	$("#form-raschet").bind("dblclick",function(){
		$(this).fadeTo(300,0,function(){
			$(this).css({'display' : 'none'});
		});
	});
	return false;
}
function onRashSubmit() { //расчет
	var square = $('#square').val();
	var floor = $('#floor').val();
	var check = $('#mans').is(":checked");
	var sum = square*14000+floor*50000;
	if(check) {
		sum = sum + 100000;
	}
	$("#danie").fadeTo(300,0,function(){
		$(this).css({'display':'none'});
		$("#rez").fadeTo(150,1,function(){
		$(this).css({'display':'block'});
		});
	});
	alert("Примерная стоимость постройки Вашего дома: "+sum+" руб.");
	return false;
}
function onZakClick(){ //заказ
	var width = document.documentElement.clientWidth;
	var height = document.documentElement.clientHeight;
	$("#form-zakaz").css({'width' : width,'height' : height,'position' : 'fixed','top' : '0','left' : '0','right' : width,'bottom' : height}).fadeTo(150,1,function(){
		$(this).css({'display':'block'});
	});
	$("#form-zakaz").bind("dblclick",function(){
		$(this).fadeTo(300,0,function(){
			$(this).css({'display' : 'none'});
		});
	});
	return false;
}
function onBackClick2(){ //обработка нажатия кнопки "назад" в формах
	$("#form-zakaz").css({'display':'none'});
	return false;
}