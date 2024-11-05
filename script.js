function recogerDatos() {
  var nombrepersona = document.getElementById("nombres").value;
   
  var apodopersona = parseFloat(document.getElementById("apodo").value);
  
  var edadpepersona = parseFloat(document.getElementById("edad").value);

  

  if (nombrepersona==""){
    alert("El campo es obligatorio");
    document.getElementById("nombres").focus();
  }
  else{
    if(apodopersona==""){
      alert("El campo es obligatorio");
    document.getElementById("apodo").focus();
    }
  }

var nombreobtenido;
nombreobtenido=nombrepersona;


  console.log(nombrepersona+" "+apodopersona+" "+edadpepersona);

