let img =document.querySelector(".display>img");

let buttons=document.querySelectorAll(".display>button");
let imgNum=0;
let imgArray=["https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-2---Skincare-3.gif?v=1655088937","https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Skincare-2-With-BONUS_large.gif?v=1652238042","https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3_1728264b-2e0f-4314-9a3c-0fde458d72a7_large.png?v=1649483317","https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3_large.png?v=1646971494"]

 buttons[0].addEventListener("click",function(){
    if(imgNum===0){
        imgNum=imgArray.length-1;
    }else{
        imgNum--;
    }
    img.src=imgArray[imgNum]
 })
 buttons[1].addEventListener("click",function(){
    if(imgNum===imgArray.length-1){
        imgNum=0;
    }else{
        imgNum++;
    }
    img.src=imgArray[imgNum]
 })