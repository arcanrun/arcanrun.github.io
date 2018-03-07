$(document).ready(function(){
	$('.fa-bars, .fa-times').on('click', function(){
		if((this).className == 'fa fa-bars')
		{
			$(this).removeClass().addClass('fa fa-times');
			$('.mobile-mnu-blc ul').css("display", "block");
		}
		else if((this).className == 'fa fa-times')
		{
			$(this).removeClass().addClass('fa fa-bars');
			$('.mobile-mnu-blc ul').css("display", "none");
		}

		// alert((this).className);
	});

	$('#toTop').click(function () { 
		$('body, html').animate({
			scrollTop: 0
		}, 1000);
	});
	$('.more').on('click', function( event ){
		event.preventDefault();
		
		if($('.show-more-1').css('display') == 'none')
		{
			$('.show-more-1').css('display', 'block');
		}
		else if($('.show-more-1').css('display') == 'block')
		{
			$('.show-more-2').css('display', 'block');
		}
	});


}); 



