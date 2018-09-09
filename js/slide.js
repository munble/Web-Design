	var old = 1;
$(window).load(function() {
	$(".point").click(function(){
	
		
		var s = $(this).attr('id');
		var s2 = s.substr(5);
		var id = parseInt(s2);
		
		$("#kim"+old).fadeOut(function(){
			$("#kim"+s2).fadeIn();
		});
		
		
		if(old>id)
		{
			$(".kimpointer").addClass("don");
		}else{
			$(".kimpointer").removeClass("don");
		}
		
		old = id;
	
		$("#kimSection").removeClass();
		$("#kimSection").addClass("scene"+s2);
		
		 $('html, body').animate({ scrollTop: 

$(".title").offset().top }, 800,"swing"); 
	});
});