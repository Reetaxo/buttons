// Save it to a variable called `topics`

var topics = ["SATC", "Britney Spears", "princess and the frog","Drake", "clueless", "Beyonce", "Sonja Morgan", "corgi", "leonardo dicaprio", "trisha paytas"];


// $(document).ready(function() {
// console.log
// });

// Event listener for all button elements
$("button").on("click", function() {
    var topics = $(this).attr("data-topics");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topics + "&api_key=dc6zaTOxFJmzC&limit=10";


// Performing our AJAX GET request
$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(response) {
    var results = response.data;

})

// $("gifs-here").append(gifDiv);

});