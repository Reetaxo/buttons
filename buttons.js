// Save it to a variable called `topics`

var topics = ["SATC", "Britney Spears", "princess and the frog","Drake", "clueless", "Beyonce", "Sonja Morgan", "corgi", "leonardo dicaprio", "trisha paytas", "Serena Williams"];



for (var j = 0; j < topics.length; j++) {
    // $("#buttons").empty();

    var buttontag = $("<button>");

    buttontag.html(topics[j]).attr("data-topics", topics[j]).addClass("button");
    
    $("#buttons").append(buttontag);

}


// $(document).ready(function() {
// console.log
// });

// Event listener for all button elements

$(document).ready(function(){
$(".button").on("click", function() {
    var query = $(this).attr("data-topics");
    console.log(query);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    query + "&api_key=dc6zaTOxFJmzC&limit=10";
    

// Performing our AJAX GET request
$.ajax({
    url: queryURL,
    method: "GET"
})


.then(function(response) {
console.log(response);

var results = response.data;
for (var i = 0; i < results.length; i++) {
var image = results[i].images.fixed_width.url;

console.log(image);

var divtag = $("<div>");

var imgtag = $("<img>");

imgtag.attr("src", image).attr("width", "250");

divtag.append(imgtag);

$("#pics").append(divtag);




}

})

// $("gifs-here").append(gifDiv);

});
});