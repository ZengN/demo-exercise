$(function(){
	$('#box-head-right').click(function() {
		$(this).addClass("btn-change").siblings().removeClass('btn-change');
		$('#main2').show();
		$('#main1').hide();
	});
	
	$('#box-head-left').click(function() {
		$(this).addClass("btn-change").siblings().removeClass('btn-change');
		$('#main1').show();
		$('#main2').hide();
	});
	
	$('#btn1').click(function() {
		$('#popup-box').show();
		$('#popup-color').show();
	});
	
	$('#close').click(function() {
		$('#popup-box').hide();
	});
});