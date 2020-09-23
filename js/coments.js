var currentArray = [];
function showcomm(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentArray.length; i++){
        let comm = currentArray[i];
            htmlContentToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                    <img src="img/comimg.webp" alt="` + comm.dateTime + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ comm.user +`</h4>
                            <small class="text-muted">Fecha: ` + comm.dateTime + `</small>
                            <small class="text-muted">` + comm.score + ` ★</small>
                        </div>
                        <p class="mb-1">` + comm.description + `</p>
                    </div>
                </div>
            </a>
            `
        }

        document.getElementById("commentscontainer").innerHTML = htmlContentToAppend;
}
function starcom(num){
    localStorage.setItem("starvalue",num);
}

function inscom(com){
    let name = localStorage.getItem("usuario");
    let stars = localStorage.getItem("starvalue");
    let comm = com;
    var dt = new Date();
    var datee= dt.getFullYear()+"-"+(dt.getMonth()+1)+"-"+dt.getDate();
    var hs=dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();
    var fecyhs=datee+" "+hs;
        if(com.trim()===""){
            alert("Debe completar ambos campos");
        }
        else{
            var fcoment = {
                "score": stars,
                "description": comm,
                "user": name,
                "dateTime": fecyhs
            }
            currentArray.push(fcoment);
            showcomm();
            
            alert('¡Tu comentario se agregó!');
        }

}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            currentArray = resultObj.data;
            showcomm();
        }
    });
});