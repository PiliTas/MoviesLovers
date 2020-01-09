function myFunction() {
    event.preventDefault();
    let x = document.getElementById("title_search").value;
    console.log(x);
    
    let url_api = "http://www.omdbapi.com/" + "?t=" + x + "&apikey=f37691ad";
    console.log(url_api);
  
    fetch(url_api, {
      method: 'get'
    })
    .then((response) => {
      if(response.ok) {
        return response.json();
      }
  
      throw response;
    })
    .then((resp) => {
      console.log('Este es el response', resp); 
      console.log(resp.Poster);
  
    let imgMovie = document.getElementById('img-movie');
    imgMovie.innerHTML =`
                        <img src="${resp.Poster}"></img>
      `;
  
    let containerMovie = document.getElementById('container-movie');
    containerMovie.innerHTML =`
                        <h1> <p> ${resp.Title}</p> </h1>
                        <h3> <p> Movie ${resp.Year}</p> </h3>
                        <h3> <p> Director: ${resp.Director}</p> </h3>
                        <h3> <p> ${resp.Plot}</p> </h3>
                        <p> Genero: ${resp.Genre}</p>
                        <p> Actors: ${resp.Actors}</p>
                        <p> Language: ${resp.Language}</p>
                        <p> Country: ${resp.Country}</p>
                        <p> Country: ${resp.Country}</p>

      `;
        
    })
    .catch((error) => {
      console.log("error", error);
    })
    return false;
  }
  