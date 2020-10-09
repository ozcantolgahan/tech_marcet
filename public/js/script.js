var basket=[];
$(document).ready(function(){

    $(".social-media").each(function(){
        $(this).mouseenter(function(){
            console.log(this.children[0]);
            $(this.children[0]).animate({top:"-10%"},"fast");
        });
        $(this).mouseleave(function(){
            console.log(this.children[0]);
            $(this.children[0]).animate({top:"0%"},"fast");
        });
    });
    $(".btn-animation").click(function(e){
        e.preventDefault();   
        let productName=$($(this).siblings()[0]).text();
        let productPrice=$($(this).siblings()[1]).text();
        let productImage=$($($(this).parents()[1]).children()[0]).attr("src");
        let imageParse=productImage.split("/");
        let productImageUrl=imageParse[imageParse.length-1];
        basket.push({
            "id":basket.length,
            "name":productName,
            "price":productPrice,
            "imageUrl":productImageUrl
        });
        $(".box-animation").animate({top:"40%"},"slow");
        $(".box-animation").animate({top:"80%"},"slow"); 
   
    });
    $(".box-animation").click(function(e){


 console.log(basket);


        $(".sendBasket").val(JSON.stringify(basket));

    
    });
   
});
