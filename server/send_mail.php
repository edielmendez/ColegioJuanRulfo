<?php 
if(isset($_REQUEST["email"])){
	$nombre = $_POST["nombre"];
	$email = $_POST["email"];
	$mensaje = $_POST["mensaje"];

	$mensaje = "Línea 1\r\nLínea 2\r\nLínea 3";

	// Si cualquier línea es más larga de 70 caracteres, se debería usar wordwrap()
	$mensaje = wordwrap($mensaje, 70, "\r\n");

	// Enviarlo
	$r = mail('mendezjunior2015@gmail.com', 'Mi título', $mensaje);

	if($r){
		echo "Email Enviado";
	}else{
		echo "Email no envido";
	}

}


 ?>