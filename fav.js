let homeBtn=document.getElementsByClassName('fav-home')[0];
let favMeal=document.getElementById('list-of-fav-meal');

let changeHtml="";

// calling the api and update the data in html
function callingApi(foodId){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
    .then(response=>response.json())
    .then(data=>{
        let favone=data.meals;
        favone=favone[0];
        console.log(favone);
       changeHtml+=`<div class="meal-result">
       <div class="meal-img">
           
           <img class=meal-result-img src="${favone.strMealThumb}" alt="">

           

       </div>
           <h3 class="meal-name">${favone.strMeal}</h3>
           <div class="details-btn-container">
           <div class="details-btn">
           
           <a href="./details.html?id=${favone.idMeal}">Details</a>
           
           </div>
           <div id="fav-btn1${favone.idMeal}" onclick=setFavHelper(${favone.idMeal})>
           <i class="fa-solid fa-heart"></i>
           </div>
           
       </div>

       </div>`;

        favMeal.innerHTML=changeHtml;

    })
}

// remove favorite item from fav page
function setFavHelper(foodId){
    if(setFav(foodId)){
      console.log(foodId);
      document.getElementById('fav-btn1'+foodId).className="btn-danger";
      console.log('fav-btn');
    }else{
      document.getElementById('fav-btn1'+foodId).className="btn-gray";
      console.log('fav-btn111');
    }
  }

// display all fabourite items
let favItems=getAllFav();
for(foodId of favItems){
    callingApi(foodId);

}

// going back to home page when we click on that
homeBtn.addEventListener('click',()=>{
    location.href='./index.html';
})