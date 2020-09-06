$("#start").click(function selectImage() {  

    var animalArray = ["assets/images/cat.jpg", "assets/images/dog.jpg", "assets/images/fox.jpg", "assets/images/goat.jpg"];
    var randomNum = [Math.floor(Math.random() * animalArray.length)];
    var randomPic = animalArray[randomNum];
    var gameArray = [];

    console.log(randomNum, randomPic);

    $(".image-box").html(`<img class="temp-image align-items-center justify-content-center" src="${randomPic}"/>`);
    $(".temp-image").css({"width": "350px", "height": "350px", "object-fit": "cover"});
    

    setTimeout(() => {
        $(".temp-image").remove();
    }, 3000);
}); 

$("#cat").click(function() {
    
    console.log(0);
});

$("#dog").click(function() {
    
    console.log(1);
});

$("#fox").click(function() {
    
    console.log(2);
});

$("#goat").click(function() {
    
    console.log(3);
});


