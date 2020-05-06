$( document ).ready(function() {
	// size = $("div.maket").outerHeight();
	// header = $("div.header").outerHeight();
	// rasporka = $("div.rasporka").outerHeight();
	// rezult = size - header + 10;
	// test = $("div.right").css('height', rezult + 'px');

	// console.log(test);
	$( window ).resize(function() {
		// size = $("div.maket").outerHeight();
		// header = $("div.header").outerHeight();
		// rasporka = $("div.rasporka").outerHeight();
		// rezult = size - header - rasporka;
		// test = $("div.right").css('height', rezult + 'px');
	});
	$(function() {
		$('ul.tabs li:first-child').addClass('current');
		$('div.section div.box:first-of-type').addClass('visible');
	    $('ul.tabs').delegate('li:not(.current)', 'click', function() {
	        $(this).addClass('current').siblings().removeClass('current')
	            .parents('div.section').find('div.box').hide().eq($(this).index()).fadeIn(150);
	    })
	    $('ul.nav.nav-tabs li:first-child').addClass('active');
	    $('div.tab-content div.tab-pane:first-of-type').addClass('in active');
	});
});