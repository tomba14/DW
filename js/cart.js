
const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
var currentCategoriesArray = [];
var currentSortCriteria = undefined;
var minCount = "menos";
var maxCount = "mas";
var nom = undefined;
var tipenvio;
var modalleno= "no";
var totalart=0;


function validation(ps, pa, pe, pi){
    console.log(ps+pa+pe+pi);
    if(ps.trim()===""||pa.trim()===""||pe.trim()===""||pi.trim()===""){
        alert("Debe completar todos los campos del metodo de pago elegido")
    }
    else{
        modalleno= "si";
    }

}
function valcompra(){
    if(modalleno==="no"){
        alert("Debe completar todos los campos requeridos para terminar la compra"+modalleno);
    }
    else{
        alert("Compra exitosa");
    }
}
function showCategoriesList(){
    minCount="menos";
    maxCount="mas";
    let htmlContentToAppend = "";
    totalart=0;
    for(let i = 0; i < currentCategoriesArray.articles.length; i++){
        let category = currentCategoriesArray.articles[i];
        if(category.currency==="USD"){
            price = (category.unitCost * 40) * category.count;
        }
        else{
            price= category.unitCost*category.count;
        }
        if(price<0){
            price=0;
        }
        else{
            totalart += price;
        }

            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + category.src + `" alt="" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1"> <strong>Nombre: </strong>`+ category.name +`</h4>
                            <p class="text-muted"> <strong>Precio unitario: </strong>` + category.unitCost +` `+ category.currency +` </p>
                        </div>
                        <p class="mb-1">Cantidad: <button type="button" class="btn btn-danger" onclick="cambiacount('`+category.name+`',minCount)">-</button> ` + category.count + ` <button type="button" onclick="cambiacount('`+category.name+`',maxCount);" class="btn btn-danger">+</button> </p>
                        <h5 class="mb-1 float-left"> <strong>Subtotal:</strong> `+ price +` UYU</h5>
                        </div>
                </div>
            </div>
            `
        

        document.getElementById("ascman").innerHTML = htmlContentToAppend;
    }
}
function calvalue(val){
    let por=0.05;
    if(val==="premium"){
        por=0.15;
    }
    if(val==="express"){
        por=0.07;
    }
    if(val==="standar"){
        por=0.05;
    }
    let prec= totalart+(totalart*por);
    let htmlContentToAppend ="";
    htmlContentToAppend=`
    <ul class="list-group mb-3">
    <li class="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 class="my-0">Precio</h6>
        <small class="text-muted">Total de tus productos</small>
      </div>
      `+totalart +`
    </li>
    <li class="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 class="my-0">Porcentaje</h6>
        <small class="text-muted">Envio `+val +`</small>
      </div>
      `+(totalart*por)+`
    </li>
    <li class="list-group-item d-flex justify-content-between">
      <h3>Total</h3>
      <h3>`+prec+`</h3>
    </li>
  </ul>
    `

    document.getElementById("totale").innerHTML = htmlContentToAppend;
}
function cambiacount(nom,boolpa){
    console.log("ando aca");
    for(let i = 0; i < currentCategoriesArray.articles.length; i++){
        let category = currentCategoriesArray.articles[i];
        if(category.name===nom && boolpa===maxCount){
            category.count+=1;
        }
        if(category.name===nom && boolpa===minCount){
            category.count-=1;
        }
    }
    showCategoriesList();

}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData("https://japdevdep.github.io/ecommerce-api/cart/654.json").then(function(resultObj){
        if (resultObj.status === "ok"){
            currentCategoriesArray = resultObj.data;
            showCategoriesList();
        }
    });

});