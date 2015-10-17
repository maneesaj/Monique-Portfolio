function loop(){
$("#bulb").fadeIn("slow")
     .animate({marginTop:'-2'},1600)
     .animate({marginTop:'20',},1000, loop)

$("#ball1").fadeIn("fast")
     .animate({marginTop:'-2'},600)
     .animate({marginTop:'20',},1000, loop)

$("#ball2").fadeIn("fast")
     .animate({marginTop:'-2'},600)
     .delay(900)
     .animate({marginTop:'20',},1000, loop)

$("#ball3").fadeIn("fast")
     .animate({marginTop:'-2'},400)
     .delay(900)
     .animate({marginTop:'20',},1000, loop)

}
  loop();


$("#portfolio a").click(function(event){
   var href = $(this).attr("href");
    event.preventDefault();

});


angular.module('webdesignbrew', []).controller('ArtworkController', function($scope) {
        $scope.Arts = [
        {name: "Art Deco Clock", path:"img/ART DECO CLOCK.jpg"},
        {name: "Business Card", path:"img/Businesscard.png"},
        {name: "Geisha - DVD Cover", path:"img/DVD_Cover gaisha.jpg"},
        {name: "Blue Orchid Logo", path:"img/Blue Orchid LOGO.jpg"},
        {name: "Black Cat - DVD Cover", path:"img/DVD_Cover BLACK CAT.jpg"},
        {name: "Glass Logo", path:"img/glass logo.jpg"},
        {name: "Three Little Pigs Logo", path:"img/PIGGY LOGO.jpg"},
        {name: "Book Cover - Fantastic Mister Fox", path:"img/BOOK fantastic mr fox.jpg"},
        {name: "Book Cover - James & The Giant Peach", path:"img/BOOKjames and the giant peach.jpg"},
        {name: "Book Cover - Willy Wonker", path:"img/willy wonka and the chocolate factoryBOOK.jpg"},
        {name: "Juice Box - Elephant", path:"img/juice poster for elephant.jpg"},
        {name: "Cosmetic Surgery brochure", path:"img/SURGEYBROCHURE2.jpg"},
    

             ]
    });

function containWidth(){
var max = document.getElementById("container");

if (max.width > 300){
    console.log("Done");

    }
}

  