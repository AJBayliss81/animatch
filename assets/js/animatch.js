var timer = $("#start").click(function() {  
    $(".image-box").html(`<img class="temp-image align-items-center justify-content-center" src='http://placegoat.com/300'/>`);
    var randomImage = Math.floor(Math.random() * 4);
    console.log(randomImage);
    setTimeout(() => {
        $(".temp-image").remove();
    }, 3000);
}); 

