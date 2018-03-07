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
// =====================================
$('#click-1').click(function () { 
		$('body, html').animate({
			scrollTop: $('#section-1').offset().top -100
		}, 1000);
	});

$('#click-2').click(function () { 
		$('body, html').animate({
			scrollTop: $('#section-2').offset().top -100
		}, 1000);
	});


$('#click-3').click(function () { 
		$('body, html').animate({
			scrollTop: $('#section-3').offset().top -100
		}, 1000);
	});
$('#click-1>i').hover(function(){
	$(this).removeClass().addClass('fa fa-circle');
	$('#click-1 b').fadeIn( 100 );
},
	function(){
	$(this).removeClass().addClass('fa fa-circle-thin');
	$('#click-1 b').fadeOut( 100 );
	}
);
$('#click-2>i').hover(function(){
	$(this).removeClass().addClass('fa fa-circle');
	$('#click-2 b').fadeIn( 100 );
},
	function(){
	$(this).removeClass().addClass('fa fa-circle-thin');
	$('#click-2 b').fadeOut( 100 );
	}
);
$('#click-3>i').hover(function(){
	$(this).removeClass().addClass('fa fa-circle');
	$('#click-3 b').fadeIn( 100 );
},
	function(){
	$(this).removeClass().addClass('fa fa-circle-thin');
	$('#click-3 b').fadeOut( 100 );
	}
);
// =====================================


	$('.more').on('click', function( event ){
		event.preventDefault();
		
		if($('.show-more-1').css('display') == 'none')
		{
			$('.show-more-1').css('display', 'block');
			if(!$('.show-more-2').length)
			{
				
				$(this).css('display', 'none');
			}
		}
		else if($('.show-more-1').css('display') == 'block')
		{
			if($('.show-more-2').length)
			{
				$('.show-more-2').css('display', 'block');
				$('.more').css('display', 'none');
			}
			$('.more').css('display', 'none');
			
		}
	});


}); 

