
let watchVideo=document.getElementById('watchvideo');
let detailsContainer=document.getElementsByClassName('container-details')[0];

// here we are store the url coming from home page  
// windows.location.href give us the url
const url=window.location.href;

// this function also get back to home page 

// let closedBtn=document.getElementById('close');
// closedBtn.addEventListener('click',function(){
//     window.history.go(-1);
// })

// fetching the api and passing the url and get the id using split 

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${url.split("?id=")[1]}`)
.then(response =>response.json())
.then(data => mealRecipe(data.meals));

// creating a function and changed the HTML data with api data 
function mealRecipe(meal){
    meal=meal[0];

    let details=`

    <div class="heading-area-details">

        <div id="heading-details">
        <p id="recipe-heading-details">${meal.strMeal}</p>
        </div>
        <div class="close-btn">
            <a id="close" href="./index.html">Close</a>
        </div>

    </div>

    <div class="details-area">
        <p class="details-instruction">Instruction:<span>${meal.strInstructions}</span></p>
        

    </div>

    <div class="image-area">

        <div class="img-section">
            <img src="${meal.strMealThumb}" alt="Logo of recipe">
        </div>

        <div class="youtube-link">
            <a id="watch-video" href="${meal.strYoutube}">Watch Video</a>
        </div>

    </div> `

detailsContainer.innerHTML=details;
}
