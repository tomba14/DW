var user = {
    nombre: "",
    apellido: "",
    direccion: "",
    email: "",
    telefono: 000000000,
    edad: 00,
    imagen: "",
    existe: false
}
function muestraform(){
    let userr=JSON.parse(localStorage.getItem("uss"));
    let htmlContentToAppend = "";
    if(userr==null){
        htmlContentToAppend=`

        <div class="container">
      <div class="row">
        <div class="col-3">
            <img src="img/comimg.webp" alt="" class="img-thumbnail">
        </div>
        <div class="col">
            <form>
              <div class="row">
                <label for="nombre">Nombre:</label>
              <input type="text" value="nombre" id="nombre">
              <label for="apellido">Apellido:</label>
              <input type="text" value="apellido" id="apellido">
              </div>
              <br>
              <div class="row">
                <label for="nombre">Direccion:</label>r
                <input type="text" value="Direccion" id="Direccion">
                <label for="apellido">Email:</label>
                <input type="email" value="Email@email.com" id="email">
              </div>
              <br>
              <div class="row">
                <label for="nombre">Telefono:</label>
                <input type="number" maxlength="9" value="000000000" id="tel">
                <label for="apellido">Edad:</label>
                <input type="number" maxlength="2" value="00" id="edad">
              </div>
              <br>
              <div class="row">
                <button style="margin-right: 10%;">Actualizar imagen</button>
          
                <button type="submit" onclick="guardacambios()">Guardar cambios</button>
              </div>
            </form>
        </div>
    </div>
    </div>
        `
    }
    else{
        htmlContentToAppend=`
        <div class="container">
      <div class="row">
        <div class="col-3">
            <img src="img/comimg.webp" alt="" class="img-thumbnail">
        </div>
        <div class="col">
            <form>
              <div class="row">
                <label for="nombre">Nombre:</label>
              <input type="text" value="`+ userr.nombre+`" id="nombre">
              <label for="apellido">Apellido:</label>
              <input type="text" value="`+ userr.apellido+`" id="apellido">
              </div>
              <br>
              <div class="row">
                <label for="nombre">Direccion:</label>
                <input type="text" value="`+ userr.direccion+`" id="Direccion">
                <label for="apellido">Email:</label>
                <input type="email" value="`+ userr.email+`" id="email">
              </div>
              <br>
              <div class="row">
                <label for="nombre">Telefono:</label>
                <input type="number" maxlength="9" value="`+ userr.telefono+`" id="tel">
                <label for="apellido">Edad:</label>
                <input type="number" maxlength="2" value="`+ userr.edad+`" id="edad">
              </div>
              <br>
              <div class="row">
                <button style="margin-right: 10%;">Actualizar imagen</button>
          
                <button type="submit" onclick="guardacambios()">Guardar cambios</button>
              </div>
            </form>
        </div>
    </div>
    </div>
        `
    }
    document.getElementById("muestrauser").innerHTML = htmlContentToAppend;
}
function guardacambios(){
    user.nombre=document.getElementById("nombre").value;
    user.apellido=document.getElementById("apellido").value;
    user.direccion=document.getElementById("Direccion").value;
    user.edad=document.getElementById("edad").value;
    user.email=document.getElementById("email").value;
    user.telefono=document.getElementById("tel").value;
    user.existe=true;
    localStorage.setItem("uss", JSON.stringify(user));
    muestraform();
}
muestraform();
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});