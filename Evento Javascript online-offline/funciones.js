function sinConexion(){
    
    $("#alerta").html('<div class="alert alert-danger">No tienes conexión a internet</div>');    

}

function conConexion(){

    $("#alerta").html('<div class="alert alert-success">Si tienes conexion a internet</div>');

    setTimeout(function(){
		$("#avisos").html("");
	},3000);
    

}
