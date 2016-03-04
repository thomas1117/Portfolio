$(document).ready(function() {
	$('#contact').on('click', function(){
		$('#form1').toggleClass('hidden');
		$("#overlay").toggleClass("hidden");
	});

	$("#overlay").on('click', function(e){
		if ($(e.target).is('#overlay')){
			$("#overlay").toggleClass("hidden");
			$('#form1').toggleClass('hidden');
		}
	})

	$("#form1").on("submit", function(e) {
		e.preventDefault();
		$("#overlay").toggleClass("hidden");
		$('#form1').toggleClass('hidden');
	  $.ajax({
	      url: '//formspree.io/thomasshannon1117@yahoo.com', 
	      method: 'POST',
	      data: {
	      	name: $('#name').val(),
	      	email:$('#email').val(),
	      	message: $('#message').val()},
	      	dataType: 'json'
	  });
	  
	});
});

