
/*$(document).load(function(){
    $('#page-loader').fadeOut(500);
});*/

$(document).ready(function(){
	$('#page-loader').fadeOut(1000);
})

$(document).on("click","#btn_form",function(){
	if($("#form_question").is(":visible")){
		$("#form_question").hide("slow");
	}else{
		$("#form_question").show("slow")
	}
});

$(document).on("click",".testimony_title",function(){
	
	$('#modalVideo').modal()
});