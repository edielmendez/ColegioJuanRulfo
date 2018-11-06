

$(document).ready(function(){
	$('#page-loader').fadeOut(1500);
	
})

$(document).on("click","#btn_form",function(){
	if($("#form_question").is(":visible")){
		$("#form_question").hide("slow");
	}else{
		$("#form_question").show("slow")
	}
});


$(document).on("click","#testimony_one",function(e){
	
	document.getElementById("video_testimonio").src = "video/testimonio.mp4";
	
	$("#modalVideo").modal();
})

$(document).on("click","#testimony_two",function(){
	document.getElementById("video_testimonio").src = "video/testimonio2.mp4";
	$("#modalVideo").modal();
})


$('#modalVideo').on('hidden.bs.modal', function (e) {
 
  document.getElementById("video_testimonio").pause();

  
})


$(".img_collapse").click(function(){
	var src = ($(this).attr('src') === 'images/flecha3.png') ? 'images/flecha5.png' : 'images/flecha3.png';	
    $(this).attr('src',src);   
});

$("#terminos_condiciones").click(function(){
	$("#modalTerminos").modal();
})

$("#form_question_element").submit(function(event){
	event.preventDefault();
	$.confirm({
	    title: '¡Atención!',
	    content: 'Se enviará un email al Colegio Juan Rulfo',
	    closeIcon: true,
	    buttons: {
	        enviar: function () {
	        	var email = $("#email").val();
	        	var nombre = $("#nombre").val();
	        	var mensaje = $("#mensaje").val();
	        	console.log(mensaje);
	            var request = $.ajax({
				    url: "server/send_mail.php",
				    method: "POST",
				    data: { nombre : nombre,email:email,mensaje: mensaje}
				});
				 
				request.done(function( msg ) {
					console.log(msg)
					$("#email").val("");
			        $("#nombre").val("");
			        $("#mensaje").val("");
				    $.alert(msg)
				});
				 
				request.fail(function( jqXHR, textStatus ) {
				    $.alert(textStatus)
				});
	        },
	        cancelar: function () {
	            $.alert('');
	        }
	    }
	});
	
})
$("#form_question_element_xs").submit(function(event){
	event.preventDefault();
	$.confirm({
	    title: '¡Atención!',
	    content: 'Se enviará un email al Colegio Juan Rulfo',
	    closeIcon: true,
	    buttons: {
	        enviar: function () {
	        	var email = $("#email2").val();
	        	var nombre = $("#nombre2").val();
	        	var mensaje = $("#mensaje2").val();
	        	console.log(mensaje);
	            var request = $.ajax({
				    url: "server/send_mail.php",
				    method: "POST",
				    data: { nombre : nombre,email:email,mensaje: mensaje}
				});
				 
				request.done(function( msg ) {
					console.log(msg)
					$("#email2").val("");
			        $("#nombre2").val("");
			        $("#mensaje2").val("");
				    $.alert(msg)
				});
				 
				request.fail(function( jqXHR, textStatus ) {
					$("#email2").val("");
			        $("#nombre2").val("");
			        $("#mensaje2").val("");
				    $.alert(textStatus)
				});
	        },
	        cancelar: function () {
	            $("#email2").val("");
			    $("#nombre2").val("");
			    $("#mensaje2").val("");
	        }
	    }
	});

	
})

$(document).scroll(function() {
  var y = $(this).scrollTop();
  
  if (y > 1000) {
    $("#go_to_up").fadeIn();
  } else {
    $("#go_to_up").fadeOut();
  }
});

$('a[href$="top"]').click(function(){
	
    $('html, body').animate({scrollTop:0}, 'slow');
});

/*$('a[href$="aux"]').click(function(e){
	console.log(e);
    //$('html, body').animate({scrollTop:e.target.scrollWidth}, 'slow');
});*/
/*
$(document).on("click", "#item_contacto", function () {
    //$("#mainNav").collapse('hide');
    alert("ss");
});*/
