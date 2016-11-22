
$( document ).ready(function() {

  $("#movie-library-form").submit(function(e){
    e.preventDefault();
    //alert('searching');
    $("#movie-img").empty(); // clear previous image when researching
    $("#movie-info").empty(); // clears previous data when researching
$("#movie-year").empty(); // clears year from parameter
    $("#review-form").css("display","none");
    $(".library-wrapper").css("display","none");
    var movie = "http://www.omdbapi.com/?t="+$("#movie-title").val();
    console.log(movie);
    console.log($("#movie-title").val());


      //ajax hash calls the api
      $.ajax({
        //http://www.omdbapi.com/?t=the+matrix&y=&plot=short&r=json (returns a hash)
        //title is required byt year is optional
        url: "http://www.omdbapi.com/?t="+$("#movie-title").val()+"&y="+$("#movie-year").val()+"&r=json",
        type: 'GET',
        data: {format: 'json'}, // not needed but forces the json object
        success: function(data){

          console.log(data);
          $(".library-wrapper").show();
          $("#movie-img").append($("<img id='poster' src='"+data.Poster+"'>"));
          $("#movie-info").append($("<div class='col-xs-12 col-sm-12' id='title'><strong>Title: </strong> "+data.Title+"</div>"));
          $("#movie-info").append($("<div class='col-xs-12 col-sm-6' id='year'><strong>Year: </strong>"+data.Year+"</div>"));
          $("#movie-info").append($("<div class='col-xs-12 col-sm-6' id='rated'><strong>rated: </strong>"+data.Rated+"</div>"));
          $("#movie-info").append($("<div class='col-xs-12 col-sm-12' id='genre'><strong>Genre: </strong>"+data.Genre+"</div>"));
          $("#movie-info").append($("<div class='col-xs-12 col-sm-12' id='genre'><strong>Directors: </strong>"+data.Director+"</div>"));
          $("#movie-info").append($("<div class='col-xs-12 col-sm-12' id='genre'><strong>Writers: </strong>"+data.Writer+"</div>"));
          $("#movie-info").append($("<div class='col-xs-12 col-sm-12' id='actors'><strong>Actors: </strong>"+data.Actors+"</div>"));
          $("#movie-info").append($("<div class='col-xs-12 col-sm-12' id='plot'><strong>Plot: </strong>"+data.Plot+"</div>"));
          $("#movie-info").append($("<div class='col-xs-12 col-sm-12' id='plot'></br><button type='submit' id='correct-movie' class='btn btn-primary' value='review'>create a review</button></div>"));
          $('#movie-info').click(function(){
            $('#review-form').show(450);
          }); //end of the movie-info click function
        },//end of the success function

        error: function(error){
          console.log(error);
        } //end of error message
      }); // end of the ajax call to api

  }); //end of movie-lib-form.submit function

}); //end of the document.ready function


