$(function(){
	$('#box-head-right').click(function() {
		$(this).addClass("btn-change2").siblings().removeClass('btn-change1');
		$('#main2').show();
		$('#main1').hide();
	});
	
	$('#box-head-left').click(function() {
		$(this).addClass("btn-change1").siblings().removeClass('btn-change2');
		$('#main1').show();
		$('#main2').hide();
	});
	
	$('#btn1').click(function() {
		$('#popup-box').show();
		$('#popup-color').show();
	});
	
	$('#closebtn').click(function() {
		$('#popup-box').hide();
		$('#popup-color').hide();
	});
});