var wikiViewer = function() {
  $("#results_header, .results").empty();
  var input = document.querySelector("#user_input");
  var api_url_endpoint = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+input.value;
  //"https://en.wikipedia.org/w/api.php?format=json&origin=*&callback=data&action=query&generator=search&gsrnamespace=0&gsrsearch=yankees&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max"
  
  //"/w/api.php?action=opensearch&format=json&origin=*&namespace=0%7C4&limit=10&profile=fuzzy&callback=&search="
  //'https://en.wikipedia.org/w/api.php?action=opensearch&format=jsonfm&limit=10&namespace=0&callback=&search='
  var url = ""; 
  
  $("#search_button").on("click", function(event){
    event.preventDefault();
    //$("#wikiSearchResults").empty();
    //$("#results_header").append("Your search for "+ input.value +" returned:")
  //var input = document.querySelector("#user_input");
  var url = encodeURI(api_url_endpoint + input.value);
  $.getJSON(url, function(data){
    //$("#results_header").append("Your search for "+ input.value +" returned:")
    $('#results_header, .results').html("");
    $("#results_header").append("Your search for "+ input.value +" returned:")
    $.each(data.query.pages, function(index, value){
      //console.log(data.query.pages);
      //console.log(index, value.thumbnail);
     
      $("ul.results").append(
       '<li><h3><a href=https://en.wikipedia.org/?curid='+value.pageid+'>'+value.title+'</a></h3><br><p>'+value.extract+'</p></li>'
      );
    });
    //use a for loop to console.log all of the results?
  });
  console.log(url);
  
  
});
  
   

  
};

wikiViewer();





 /*$("#search_button, #user_input").on("click keyup", function(){
  var input = document.querySelector("#user_input");
  var completed_url = encodeURI(api_url_endpoint + input.value);
  url = completed_url;
  console.log(completed_url);*/