//Git Giphy With It

var topics = ["focus", "fresh prince", "bright", "will smith"];
var newTopic = "";


function makeButton() {
    for (i = 0; i < topics.length; i++) { 
    var newBtn = $("<button>");
    newBtn.addClass("newBtn");
    $(newBtn).addClass("btn-lg")
    newBtn.attr("name", topics[i]);
    newBtn.text(topics[i]);
    $(".test").append(newBtn);
    console.log(newBtn.attr("name"));
    }
};

makeButton();

$(document).on("click", ".newBtn", function() {
    
    var topic = $(this).attr("name");
       
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      topic + "&api_key=HguWv52RtosH1F8yVBQz0foab2b0e32T&limit=10";

      $(".test2").empty();
    
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      
      .then(function(response) {
        console.log(queryURL);
        console.log(response);
        
        var results = response.data;

        
            for (var i = 0; i < results.length; i++) {
                var topicsDiv = $("<div>");
                var topicsImage = $("<img>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                topicsImage.attr("src", results[i].images.fixed_height_still.url);                
                topicsImage.addClass("gif");
                topicsImage.attr("true")
                topicsDiv.append(topicsImage);
                topicsDiv.append(p);
                $(".test2").append(topicsDiv);
                
        }

        // $(".gif").on("click", function() {
        //         var state = $(this).attr("true");

        // });


    
    
});
// debugger

$("#submit").on("click", function(){
    event.preventDefault();
console.log("hey");
    var newGif = $("input").val();
// console.log(newGif)
    var nextBtn = $("<button>");
    topics.push(newGif);
    // newBtn.text(topics);
    makeButton();
    
    // var test = $("<button>");
    // newGif.push(test);

    // console.log(topics);
})

});
