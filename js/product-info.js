var category = {};
var relprods =[];
var prodsprel = [];


function showRelacionated(array){

    for(i=0;i<category.relatedProducts.length;i++){
        relprods.push(prodsprel[parseInt(category.relatedProducts[i])]);
    }

    let htmlContentToAppend = "";
    var bool=true;
    for(let i = 0; i < array.length; i++){
        let productElement = array[i];
        if (bool){
            htmlContentToAppend += `
            <div class="carousel-item active" data-interval="5000">
            <img src=`+productElement.imgSrc+` class="d-block w-50 float-left">
            <div class="carousel-caption d-none d-md-block text-right align-middle ">
            <h1 style="color:black">`+productElement.name+`</h1>
            <p style="margin-left:500px; color:black; margin-bottom:120px;">`+productElement.description+`</p>
            </div>
            </div>
        `
        bool =false;
        } else{
            htmlContentToAppend += `
            <div class="carousel-item" data-interval="5000">
            <img src=`+productElement.imgSrc+` class="d-block w-50 float-left">
            <div class="carousel-caption d-none d-md-block text-right">
            <h1 style="color:black">`+productElement.name+`</h1>
              <p style="margin-left:500px; color:black; margin-bottom:120px">`+productElement.description+`</p>
            </div>
            </div>
        `
        }
        
        document.getElementById("relart").innerHTML = htmlContentToAppend;
    } 
}

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(PRODUCTS_URL).then(function(resultObj){
        prodsprel = resultObj.data;
    })

    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

            let categoryNameHTML  = document.getElementById("categoryName");
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");
            let categHTML = document.getElementById("categ");
        
            categoryNameHTML.innerHTML = category.name;
            categoryDescriptionHTML.innerHTML = category.description;
            productCountHTML.innerHTML = category.soldCount;
            productCriteriaHTML.innerHTML = category.cost +' '+ category.currency;
            categHTML.innerHTML = category.category;

            //Muestro las imagenes en forma de galería
            showImagesGallery(category.images);
            showRelacionated(relprods);
        }
    });
});
