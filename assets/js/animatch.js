var animalArray = ["assets/images/cat.jpg", "assets/images/dog.jpg", "assets/images/fox.jpg", "assets/images/goat.jpg"]

$("#start").click(function() {  
    $(".image-box").html(`<img class="temp-image align-items-center justify-content-center" src="assets/images/cat.jpg" />`);
    $(".temp-image").css({"width": "350px", "height": "350px", "object-fit": "cover"});

    var randomImage = Math.floor(Math.random() * 4);
    console.log(randomImage);

    setTimeout(() => {
        $(".temp-image").remove();
    }, 3000);
}); 

