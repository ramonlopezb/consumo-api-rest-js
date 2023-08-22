const API_URL_RANDOM ='https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_akNflz2KXle1qw2nWzkwl9NdL7kl4UqKt97FDsOBkz2liDxUfJ81VU0D5clsvtW9'; 

const API_URL_FAVOTITES ='https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_akNflz2KXle1qw2nWzkwl9NdL7kl4UqKt97FDsOBkz2liDxUfJ81VU0D5clsvtW9';

const spanError = document.getElementById("error");

async function loadRandomMichis(){
   const res = await fetch(API_URL_RANDOM);
   const data = await res.json();
   console.log('Random');
   console.log(data);

   if(res.status !== 200){
      spanError.innerHTML = "hubo un error: " + res.status + data.message;
   }else{
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
         const res = await fetch(API_URL_FAVOTITES, {
            method:'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               image_id:'2n'
            }),
         });                           
       
         const data = await res.json();

         console.log('save');
         console.log(res);

         if(res.status !== 200){
            spanError.innerHTML = "hubo un error: " + res.status + data.message;   
         }  
      }        
      

    loadRandomMichis();
    loadFavouriteMichis();
   

