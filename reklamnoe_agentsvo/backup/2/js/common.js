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



	}); 