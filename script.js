let inputCalcWidth=document.getElementById("calc-width");
let inputCalcHeight=document.getElementById("calc-height");
let inputCalcDetailMax=document.getElementById("detail-max");
let inputCalcDetailMid=document.getElementById("detail-mid");
let inputCalcDetailMin=document.getElementById("detail-min");
let inputCalcBlack=document.getElementById("black");
let inputCalcColored=document.getElementById("colored");
let inputCalcDesignMy=document.getElementById("design-my");
let inputCalcDesignDev=document.getElementById("design-dev");
let buttonCalcPrice=document.getElementById("calc-price");
let spanPriceResult=document.getElementById("price-result");

buttonCalcPrice.addEventListener("click",()=>{
    let saveResult=100;
    if(inputCalcWidth.value * inputCalcHeight.value<100){
        saveResult*=0.9;
    }
    else if(inputCalcWidth.value *inputCalcHeight.value<400){
        saveResult*=1.1;
    }
    else{
        saveResult*=1.5;
    }



    if(inputCalcDetailMax.checked){
        saveResult*=1.8;
    }
    else if(inputCalcDetailMid.checked){
        saveResult*=1.2;
    }
    else if(inputCalcDetailMin.checked){
        saveResult*=0.9;
    }


//проверить блоки кода
    if(inputCalcBlack.checked){
        saveResult*=1.0;
    }
    else if(inputCalcColored.checked){
        saveResult*=1.2;
    }

//проверить блоки кода
    if(inputCalcDesignMy.checked){
        saveResult*=1.5;
    }
    else if(inputCalcDesignDev.checked){
        saveResult*=2.0;
    }
    spanPriceResult.innerHTML=Math.trunc(saveResult);// функция для обрезания дроб части
})