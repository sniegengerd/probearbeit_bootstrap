// add/remove active and hidden classes
$(document).ready(function(){
	$('.switchList li').click(function(e) {
		$('li.active').removeClass('active');
		$(this).addClass('active');

		if ($('.item-1').hasClass('active')) {
			$('.switch-2, .switch-3').addClass('hidden');
			$('.switch-1').removeClass('hidden');
		} else if ($('.item-2').hasClass('active')) {
			$('.switch-1,.switch-3').addClass('hidden');
			$('.switch-2').removeClass('hidden');
		} else {
			$('.switch-1,.switch-2').addClass('hidden');
			$('.switch-3').removeClass('hidden');
		}
		e.preventDefault();
	});
});