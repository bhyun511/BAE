$(function(){
	var $firstMenu = $('nav > ul > li '),
		$header = $('header');

	$firstMenu.on({
		mouseenter: function () {
			$header.stop().animate({height:'300px'});
		},
		mouseleave: function () {
			$header.stop().animate({height:'50px'});
		}
	});
});

