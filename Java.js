function validar() {
			txtNombre1 = document.getElementById("nombre1").value;
			txtApellido1 = document.getElementById("apellido1").value;
			txtEdad1 = document.getElementById("edad1").value;
			txtNombre2 = document.getElementById("nombre2").value;
			txtApellido2 = document.getElementById("apellido2").value;
			txtEdad2 = document.getElementById("edad2").value;
			txtNombre3 = document.getElementById("nombre3").value;
			txtApellido3 = document.getElementById("apellido3").value;
			txtEdad3 = document.getElementById("edad3").value;
			if(txtNombre1.length == 0){
				alert('ERROR: No pueden haber campos vacios');
				return false;
			}
			if(txtApellido1.length == 0){
				alert('ERROR: No pueden haber campos vacios');
				return false;
			}
			if(txtEdad1.length == 0){
				alert('ERROR: No pueden haber campos vacios');
				return false;
			}
			if(txtNombre2.length == 0){
				alert('ERROR: No pueden haber campos vacios');
				return false;
			}
			if(txtApellido2.length == 0){
				alert('ERROR: No pueden haber campos vacios');
				return false;
			}
			if(txtEdad2.length == 0){
				alert('ERROR: No pueden haber campos vacios');
				return false;
			}
			if(txtNombre3.length == 0){
				alert('ERROR: No pueden haber campos vacios');
				return false;
			}
			if(txtApellido3.length == 0){
				alert('ERROR: No pueden haber campos vacios');
				return false;
			}
			if(txtEdad3.length == 0){
				alert('ERROR: No pueden haber campos vacios');
				return false;
			}
			return true;
		}	
	



	
	
function getVarsUrl(){
	    var url= location.search.replace("?", "");
	    var arrUrl = url.split("&");
	    var urlObj={};   
	    for(var i=0; i<arrUrl.length; i++){
		var x= arrUrl[i].split("=");
		urlObj[x[0]]=x[1]
	    }
	    return urlObj;
	}
	
	
	

function print(){
	var variablesvarias=getVarsUrl();
	for (var e in variablesvarias){
		document.getElementById(e).innerHTML=variablesvarias[e]
	}
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
