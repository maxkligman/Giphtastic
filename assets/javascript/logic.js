
var topics = ["glassblowing", "opera", "cannabis"]




$("button").on("click", function() {
    $("#gif-div").html("");
    
    var topic = $(this).attr("data-topic");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=GB4qLYelnSzDCFULcTGBry7Jc6aVLbEc&q=" + topic + "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        var results = response.data;
        console.log(response);
        console.log(results);


        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          var title = results[i].title;

          var p = $("<p>").text(title);

          var topicGif = $("<img>");
            topicGif.attr("src", results[i].images.fixed_height_still.url);
            topicGif.attr("data-state", "still");
            topicGif.attr("data-still", results[i].images.fixed_height_still.url);
            topicGif.attr("data-animated", results[i].images.fixed_height.url);
            topicGif.attr("class", "gif");
            console.log(topicGif);

          gifDiv.prepend(p);
          gifDiv.prepend(topicGif);

          $("#gif-div").prepend(gifDiv);
        }

        $(".gif").on("click", function(){
            var state = $(this).attr("data-state");
            console.log("dick in a log")

            if (state === "still"){
            $(this).attr("src", $(this).attr("data-animated"));
            $(this).attr("data-state", "animated");
            console.log($(this).attr("data-state"));
            } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
            console.log($(this).attr("data-state"));
            }
        });
    });

   
});


