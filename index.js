const searchBtn = document.getElementsByClassName("search-btn")[0];
searchBtn.addEventListener("click", callApi);
const mealSearch = document.getElementById("meal-search");

let mealsShow = "";
const mealList = document.getElementsByClassName("meal-list")[0];

// callig the fuction when search button is clicked
function callApi() {
  // fetch the api
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealSearch.value}`
  )
    .then((response) => response.json())
    .then((data) => showMeal(data.meals));
    
  function showMeal(meal) {
    if (meal) {

      // this function is working for when we reload our page then it's track the favorite items and mark as favorite
      
      
      function favPresent(idMeal){
        
        console.log(idMeal+" id meal");
        let prevItem=getAllFav();
          if(prevItem.indexOf(idMeal)==-1){
              var saveButton=`<div id="fav-btn1${idMeal}" onclick="setFavHelper(${idMeal}) ">
              <i class="fa-solid fa-heart" id="remove-color"></i>
           </div>`

          }else{
              saveButton=`<div id="fav-btn1${idMeal}"class="btn-danger fav-button" onclick="setFavHelper(${idMeal}) ">
              <i class="fa-solid fa-heart" id="remove-color"></i>
           </div>`
          }
          return saveButton;
      }

      // traversing the all meals  and replace  the data in html
      meal.forEach((meals) => {
        var newFav=favPresent(meals.idMeal);
        console.log(meals.idMeal);
        mealsShow += `<div class="meal-result">
        <div class="meal-img">
            <!--  -->
            <img class=meal-result-img src="${meals.strMealThumb}" alt="api-Image">

        </div>
            <h3 class="meal-name">${meals.strMeal}</h3>
            <div class="details-btn-container">
            <div class="details-btn">
            <!--  -->
            <a href="./details.html?id=${meals.idMeal}">Details</a>
            
            </div>
          
            ${newFav}
        </div>


</div>`;

      });
      
      mealList.innerHTML = mealsShow;
    } else {
      mealList.innerHTML = "Items Not Found !!!";
    }
  }
}

// For favorite button for every meal

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


