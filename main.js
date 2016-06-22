$(document).ready(function() {
	$('#contact').on('click', function(){
		$('#form').toggleClass('hidden');
		$("#overlay").toggleClass("hidden");
	});

	$("#overlay").on('click', function(e){
		if ($(e.target).is('#overlay')){
			$("#overlay").toggleClass("hidden");
			$('#form').toggleClass('hidden');
		}
	})

	$("#form").on("submit", function(e) {
		e.preventDefault();
		$("#overlay").toggleClass("hidden");
		$('#form').toggleClass('hidden');
	  	
	  	$.ajax({
	      url: '//formspree.io/thomasshannon1117@yahoo.com', 
	      method: 'POST',
	      data: {
	      	name: $('#name').val(),
	      	email:$('#email').val(),
	      	message: $('#message').val()
	      },
	      dataType: 'json',
	  	});
		

		$('#name').val('')
		$('#email').val('')
		$('#message').val('') 



	});
});




