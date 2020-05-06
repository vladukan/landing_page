$(document).ready(function(){
	function auth(){
		$.ajax({
			url: '/data/php/auth.php',
			type: 'POST',
			data: $("#formauth").serialize(),
			dataType: 'json',
			success: function(data){
				if(data.auth == "1"){
					location.href = "/";
				}else{
					alert(data.auth);
				}
			},
			error: function(){
				alert("Что-то пошло не так!");
			}
		});
	}
	$('form#formauth').submit(function(e){
		e.preventDefault();
		auth();
	});
	
});
