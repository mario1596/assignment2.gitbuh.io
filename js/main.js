
// 92da120d

    
$(document).ready(function(){
    
    /* paso 1 */ 
    
$("#formid").on("submit",function(e){ /* primer paso poner el form con el submit y la e para evitar el parpadeo */
    
    //a
    
    var x = $("#search").val(); /* el inputfield se llama y se previene que parpadee con el prevent */
    
    var Arrayofmovies 
    
//c
    e.preventDefault();
    //b
    console.log(x);
//d
    bringmovies(x);
    
    console.log(bringmovies);
   
    
    /* fin del paso 1 */
});
    
    /* lo que trae las peliculas de la pagina tengo que tener la llave que ellos mandan */
    // a 
 function bringmovies(x){
     
     console.log(x);
     
     // ajax call para poner el ipa link
     
     $.ajax({
         
   /* b */ method: "GET",
  /* c */  url: "http://www.omdbapi.com/?apikey=92da120d&s=" + x,
   /* d */ dataType: "json"
         
      
         
     }).done(function(data){ //d this is the outcome of the whole request ajax 
             // if the input field has something correct hide it
         // if the input field is empty show the alert double == para hacer comparacion no es con una.    
             console.log(data);
         
         if(data.Response == "False"){ 
         $('.alert').css('display', 'block');
     } else if(data.Response == "True"){ 
         
         $('.alert').css('display', 'none');
     }
         var placeholder = '';
         // this is the array of movies
         var Arrayofmovies = data.Search;
         
         
          $.each(Arrayofmovies , function(index , movie){
        
        
       var id = movie.imdbID;
        console.log(id);
                  
        if (movie.Poster == "N/A"){
         
            movie.Poster = "img/posterno.jpg";
              console.log("got nothing");
        }      
               placeholder+=` <a onclick="moviedetails('${id}')"> <div class="custom-container" data-toggle="modal" data-target=".m1" >
        <img class="poster" src="${movie.Poster}">   
         <div class="overlay">
        <div class="text" >${movie.Title}</div>
         </div>    
          </div> </a>`;
              
              $("#list").html(placeholder);
    });
         
       
         
             });
     
 };   
    /* fin del paso 2 */  
    
    
   
    
});
        

function moviedetails(id){
    
    console.log("this is my clicked movie id:" + id);
    
    
    $.ajax({
         
   /* b */ method: "GET",
  /* c */  url: "http://www.omdbapi.com/?apikey=92da120d&i=" + id,
   /* d */ dataType: "json"
         
      
         
     }).done(function(result){ //d this is the outcome of the whole request ajax 
             
             console.log(result);
    
        
      var details = '';
      
      details = `
    <div class="row d inline-block">
<button type="button" class="btn btn-danger btn-lg btn-block mb-3" data-dismiss="modal">Close</button>
<div class="col col-lg">
    <img class="poster2" src ="${result.Poster}">
    </div>
   <div class="col col-lg">
    <h3 class="text-light"> ${result.Title} </h3>
   <ul>
   <li class="text-light"> Rated:  ${result.Rated} </li>
   <li class="text-light">Released:  ${result.Released} </li>
   <li class="text-light">Runtime: ${result.Runtime} </li>
   <li class="text-light">Director: ${result.Director} </li>
   <li class="text-light">Plot: ${result.Plot} </li>
   <li class="text-light">Actors:  ${result.Actors} </li>
   <li class="text-light">Awards:  ${result.Awards} </li>
   <li class="text-light">Countries:  ${result.Country} </li>
   </ul>

    </div>

    </div>

`;
        
    $("#details").html(details);  // poniendo la info en el html
    
});
    
} // close of moviedetails

             








