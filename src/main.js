//SE IMPORTA DATA LOCAL
import MARVEL from './data/marvel/marvel.js';
import DCCOMICS from './data/dccomics/dccomics.js';


//FUNCIÓN QUE DESPLIEGA POSTERS AL INICIAR LA PÁGINA
//window.onload = () => {

//DESPLIEGA PELÍCULAS CON BATMAN (GRUPO DC)
  fetch('https://www.omdbapi.com/?s=batman&apikey=4ceb79a2')
  .then(response => {
    return response.json()
  })
  .then(data => {
    for (let i = 1; i < 6; i += 1) {
      if(data.Search[i].Poster!=='N/A'){   
     document.getElementById('results1').innerHTML += `<div class ="todas"><ul class='lista'><li><img src = ${data.Search[i].Poster}></li></ul></div>`;
    }
  }
})

//DESPLIEGA PELÍCULAS CON THOR (GRUPO MARVEL)
  fetch('https://www.omdbapi.com/?s=thor&apikey=4ceb79a2')
  .then(response => {
    return response.json()
  })
  .then(data => {
    for (let i = 0; i < 5; i += 1) {
      if(data.Search[i].Poster!=='N/A'){
        document.getElementById('results2').innerHTML += `<div class ="todas"><ul class='lista'><li><img src = ${data.Search[i].Poster}></li></ul></div>`;
      }
    }
  })
  .catch((error)=> {
    console.log('error',error)
  })
//  return false;
//};

//********************************************************************************************* */
//MUESTRA GRUPO DC
// DESPLIEGA PELÍCULAS CON BATMAN(GRUPO DC)
document.getElementById('buttonBatman').addEventListener('click', function (){
  fetch('https://www.omdbapi.com/?s=batman&apikey=4ceb79a2')
  .then((response) => {
    if (response.ok){
      return response.json();
    }
    throw response;
  })
  .then(data => {
    document.getElementById('results1').innerHTML = '';
    for (let i = 0; i < 5; i += 1) {
      if(data.Search[i].Poster!=='N/A'){
        document.getElementById('results1').innerHTML += `<div class ="todas"><ul class='lista'><li><img src = ${data.Search[i].Poster}></li></ul></div>`;
      }
    }
  })
  .catch((error)=> {
    console.log('error',error)
  })
 
}); 
//MUESTRA GRUPO DC
// DESPLIEGA PELÍCULAS CON GREEN LANTERN (GRUPO DC)
document.getElementById('buttonGreenLantern').addEventListener('click', function (){
  fetch('https://www.omdbapi.com/?s=green lantern&apikey=4ceb79a2')
  .then((response) => {
    if (response.ok){
      return response.json();
    }
    throw response;
  })
  .then(data => {
    document.getElementById('results1').innerHTML = '';
    for (let i = 0; i < 5; i += 1) {
      if(data.Search[i].Poster!=='N/A'){
        document.getElementById('results1').innerHTML += `<div class ="todas"><ul class='lista'><li><img src = ${data.Search[i].Poster}></li></ul></div>`;
      }
    }
  })
  .catch((error)=> {
    console.log('error',error)
  })

}); 
  
// DESPLIEGA PELÍCULAS CON SUPERMAN (GRUPO DC)
document.getElementById('buttonSuperman').addEventListener('click', function (){
  fetch('https://www.omdbapi.com/?s=superman&apikey=4ceb79a2')
  .then((response) => {
    if (response.ok){
      return response.json();
    }
    throw response;
  })
  .then(data => {
    document.getElementById('results1').innerHTML = '';
    for (let i = 0; i < 5; i += 1) {
      if(data.Search[i].Poster!=='N/A'){
        document.getElementById('results1').innerHTML += `<div class ="todas"><ul class='lista'><li><img src = ${data.Search[i].Poster}></li></ul></div>`;
      }
    }
  })
  .catch((error)=> {
    console.log('error',error)
  })

}); 


//********************************************************************************************* */
//MUESTRA GRUPO MARVEL
// DESPLIEGA PELÍCULAS CON THOR (GRUPO MARVEL)
document.getElementById('buttonThor').addEventListener('click', function (){
  fetch('https://www.omdbapi.com/?s=Thor&apikey=4ceb79a2')
  .then((response) => {
    if (response.ok){
      return response.json();
    }
    throw response;
  })
  .then(data => {
    document.getElementById('results2').innerHTML = '';
    for (let i = 0; i < 5; i += 1) {
      if(data.Search[i].Poster!=='N/A'){
        document.getElementById('results2').innerHTML += `<div class ="todas"><ul class='lista'><li><img src = ${data.Search[i].Poster}></li></ul></div>`;
      }
    }
  })
  .catch((error)=> {
    console.log('error',error)
  })

}); 
// DESPLIEGA PELÍCULAS CON HULK (GRUPO MARVEL)
  document.getElementById('buttonHulk').addEventListener('click', function (){
 fetch('https://www.omdbapi.com/?s=hulk&apikey=4ceb79a2')
    .then((response) => {
      if (response.ok){
        return response.json();
      }
      throw response;
    })
    .then(data => {
      document.getElementById('results2').innerHTML = '';
      for (let i = 0; i < 5; i += 1) {
        if(data.Search[i].Poster!=='N/A'){
          document.getElementById('results2').innerHTML += `<div class ="todas"><ul class='lista'><li><img src = ${data.Search[i].Poster}></li></ul></div>`;
        }
      }
    })
    .catch((error)=> {
      console.log('error',error)
    })
 
  }); 
  
// DESPLIEGA PELÍCULAS CON CAPTAIN AMERICA(GRUPO MARVEL)
document.getElementById('buttonCaptainAmerica').addEventListener('click', function (){
  fetch('https://www.omdbapi.com/?s=Captain America&apikey=4ceb79a2')
  .then((response) => {
    if (response.ok){
      return response.json();
    }
    throw response;
  })
  .then(data => {
    document.getElementById('results2').innerHTML = "";
    for (let i = 0; i < 5; i += 1) {
      if(data.Search[i].Poster!=='N/A'){
        document.getElementById('results2').innerHTML += `<div class ="todas"><ul class='lista'><li><img src = ${data.Search[i].Poster}></li></ul></div>`;
      }
    }
  })
  .catch((error)=> {
    console.log('error',error)
  })

}); 
//********************************************************************************** */  
//BÚSQUEDAS
//********************************************************************************** */      
// FUNCIÓN DE BÚSQUEDA DE PELÍCULA POR TÍTULO   
document.getElementById('buttonSearch').addEventListener('click', function (){
  document.getElementById('results').innerHTML = "";
  let titleMovie = document.getElementById("searchTitle").value;
  fetch('https://www.omdbapi.com/?t=' + titleMovie+ '&apikey=4ceb79a2')
  .then((response) => {
    if (response.ok){
      return response.json();
    }
    throw response;
  })
  .then(data => {
    document.getElementById('results').innerHTML += `<div class ="card"><ul class='lista'><li>${data.Title}</li><li><img src = ${data.Poster}></li></ul><div class='plot'>${data.Plot}<hr><h5><br>Año de estreno: ${data.Year}</div></div>`;
  })
  .catch((error)=> {
    console.log('error',error)
  })

}); 


//************************************************************************************** */
//ZONA DE TRIVIA
//************************************************************************************** */
//TRIVIA MARVEL
document.getElementById('buttonPlayMarvel').addEventListener('click', function (){
  document.getElementById('buttonPlayMarvel').style.display='none';
  document.getElementById('buttonPlayDcComics').style.display='none';

  document.getElementById('buttonBatman').style.display='none';
  document.getElementById('buttonSuperman').style.display='none';
  document.getElementById('buttonGreenLantern').style.display='none';
  document.getElementById('results1').style.display='none';
 
  document.getElementById('buttonThor').style.display='none';
  document.getElementById('buttonCaptainAmerica').style.display='none';
  document.getElementById('buttonHulk').style.display='none';
  document.getElementById('results2').style.display='none';

  document.getElementById('results').innerHTML = "";
  for (let i = 0; i < MARVEL.length; i += 1) {
    document.getElementById('results0').innerHTML += `<div class ="trivia"><ul class='lista'><li>PREGUNTA ${MARVEL[i].numberQuestion}</li><br><li> ${MARVEL[i].question}</li><br><li>${MARVEL[i].answers.A}</li><li> ${MARVEL[i].answers.B}</li><li>${MARVEL[i].answers.C}</li></ul></div><input type='text' name="answer${i}" id="answer${i}" class="texts" value="" >`;
  }
  document.getElementById('buttonScoreMarvel').style.display='inline';
}); 

//REVISIÓN DE RESPUESTAS MARVEL
document.getElementById('buttonScoreMarvel').addEventListener('click', function (){
  document.getElementById('buttonScoreMarvel').style.display='none';
  document.getElementById('results').innerHTML = '';
  let a =[] ;
  let countCorrect=0;
  let countIncorrect = 0;
  a[0]=document.getElementById('answer0').value;
  a[1]=document.getElementById('answer1').value;
  a[2]=document.getElementById('answer2').value;
  for (let i = 0; i < MARVEL.length; i += 1) {
    if(a[i]===MARVEL[i].correctAnswer){
  //  document.getElementById('results').innerHTML += `<div class ="trivia"><ul class='lista'><li>La respuesta ${MARVEL[i].numberQuestion} es correcta</li></ul></div>`;
    countCorrect++;
  }
  if(a[i]!==MARVEL[i].correctAnswer){
 //   document.getElementById('results').innerHTML += `<div class ="trivia"><ul class='lista'><li>La respuesta ${MARVEL[i].numberQuestion} es incorrecta</li></ul></div>`;
    countIncorrect++;
  }
}
document.getElementById('results0').innerHTML =  countCorrect+ '     '  + 'Respuestas correctas y ' + '     ' + countIncorrect + '     ' +'Respuestas incorrectas'  ;
});

//TRIVIA DC COMICS
document.getElementById('buttonPlayDcComics').addEventListener('click', function (){
  document.getElementById('buttonPlayMarvel').style.display='none';
  document.getElementById('buttonPlayDcComics').style.display='none';

  document.getElementById('buttonBatman').style.display='none';
  document.getElementById('buttonSuperman').style.display='none';
  document.getElementById('buttonGreenLantern').style.display='none';
  document.getElementById('results1').style.display='none';
 
  document.getElementById('buttonThor').style.display='none';
  document.getElementById('buttonCaptainAmerica').style.display='none';
  document.getElementById('buttonHulk').style.display='none';
  document.getElementById('results2').style.display='none';

  document.getElementById('results').innerHTML = '';
  for (let i = 0; i < DCCOMICS.length; i += 1) {
    document.getElementById('results0').innerHTML += `<div class ="trivia"><ul class='lista'><li>PREGUNTA ${DCCOMICS[i].numberQuestion}</li><br><li> ${DCCOMICS[i].question}</li><br><li>${DCCOMICS[i].answers.A}</li><li> ${DCCOMICS[i].answers.B}</li><li>${DCCOMICS[i].answers.C}</li></ul></div><input type='text' col=1 name="answer${i}" id="answer${i}" class="texts" value="">`;
  }
  document.getElementById('buttonScoreDcComics').style.display='inline';
}); 

//REVISIÓN DE RESPUESTAS DC COMICS
document.getElementById('buttonScoreDcComics').addEventListener('click', function (){
  document.getElementById('buttonScoreDcComics').style.display='none';
  document.getElementById('results').innerHTML = '';
  let a =[] ;
  let countCorrect=0;
  let countIncorrect = 0;
  a[0]=document.getElementById('answer0').value;
  a[1]=document.getElementById('answer1').value;
  a[2]=document.getElementById('answer2').value;
  for (let i = 0; i < DCCOMICS.length; i += 1) {
    if(a[i]===DCCOMICS[i].correctAnswer){
   // document.getElementById('results').innerHTML += `<div class ="trivia"><ul class='lista'><li>La respuesta ${DCCOMICS[i].numberQuestion} es correcta</li></ul></div>`;
    countCorrect++;
  }
  if(a[i]!==DCCOMICS[i].correctAnswer){
   // document.getElementById('results').innerHTML += `<div class ="trivia"><ul class='lista'><li>La respuesta ${DCCOMICS[i].numberQuestion} es incorrecta</li></ul></div>`;
    countIncorrect++;
  }
}
document.getElementById('results0').innerHTML =  countCorrect+ '     '  + 'Respuestas correctas y ' + '     ' + countIncorrect + '     ' +'Respuestas incorrectas'  ;
});


document.getElementById('buttonBack').addEventListener('click', function (){
  document.getElementById('buttonBack').style.display='inline-flex';
  document.getElementById('buttonPlayMarvel').style.display='inline-flex';
  document.getElementById('buttonPlayDcComics').style.display='inline-flex';

  document.getElementById('buttonBatman').style.display='inline-flex';
  document.getElementById('buttonSuperman').style.display='inline-flex';
  document.getElementById('buttonGreenLantern').style.display='inline-flex';
  document.getElementById('results1').style.display='inline-flex';
 
  document.getElementById('buttonThor').style.display='inline-flex';
  document.getElementById('buttonCaptainAmerica').style.display='inline-flex';
  document.getElementById('buttonHulk').style.display='inline-flex';
  document.getElementById('results2').style.display='inline-flex';
  document.getElementById('results0').innerHTML = '';
  //document.getElementById('results').innerHTML = "";
});