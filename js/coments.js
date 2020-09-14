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