
/*$(document).load(function(){
    $('#page-loader').fadeOut(500);
});*/

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


$(document).on("click","#testimony_one",function(){
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

$(document).on("click","#img_collapse",function(e){
	
	var src = ($(this).attr('src') === 'images/flecha3.png') ? 'images/flecha5.png' : 'images/flecha3.png';
	$(this).attr('src', src);
         
})


$(document).on("click", "#item_contacto", function () {
    $("#mainNav").collapse('hide');
    //alert("ss");
});
