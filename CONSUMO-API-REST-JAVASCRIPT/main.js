const API_URL_RANDOM ='https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_akNflz2KXle1qw2nWzkwl9NdL7kl4UqKt97FDsOBkz2liDxUfJ81VU0D5clsvtW9'; 

const API_URL_FAVOTITES ='https://api.thecatapi.com/v1/favourites?api_key=live_kMC717SOaEVRLA7YxIQ8IruKzLrNJ2VJb3HVhHzEy2XWJvYQmT0wOIM7LO0ZG5I8';

const spanError = document.getElementById("error");

async function loadRandomMichis(){
   const res = await fetch(API_URL_RANDOM);
   const data = await res.json();
   console.log('Random');
   console.log(data);

   if(res.status !== 200){
      spanError.innerHTML = "hubo un error: " + res.status;
   } else {
   const img1 = document.getElementById('img1');
   const img2 = document.getElementById('img2');
     
   img1.src = data[0].url;
   img2.src = data[1].url;
   }     
     };
     
     async function loadFavouriteMichis(){
      const res = await fetch(API_URL_FAVOTITES);
      const data = await res.json();
      console.log('favoritos');
      console.log(data); 

      if(res.status !== 200){
         spanError.innerHTML = "hubo un error: " + res.status + data.message;   
      }   
      };

      async function saveFavouriteMichis(){
        
         var myHeaders = new Headers();
         myHeaders.append("Content-Type", "application/json");
         myHeaders.append("x-api-key", "live_kMC717SOaEVRLA7YxIQ8IruKzLrNJ2VJb3HVhHzEy2XWJvYQmT0wOIM7LO0ZG5I8");

         var raw = JSON.stringify({
            "image_id": "d46",
            "sub_id": "my-user-1234"
         });

         var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
         };

         fetch("https://api.thecatapi.com/v1/favourites", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

      }       
      

    loadRandomMichis();
    loadFavouriteMichis();
   

