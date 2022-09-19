//checking localstorage named foodMealFav already present or not
if(!localStorage.getItem('addMealFav')){
    localStorage.setItem('addMealFav','');
  }

//function for getting all fabourites items stored in local storage
  function getAllFav(){
    
    let allItem= localStorage.getItem('addMealFav');
    allItem=allItem.split(',');
    if(allItem[0]==''){
        allItem.pop();
    }
    return allItem ;
}

//checking any particular foodId already presesnt or not
function setFav(foodId){
    let prevItem=getAllFav();

    if(prevItem.indexOf(foodId+"")==-1){
        prevItem.push(foodId);
        localStorage.setItem('addMealFav',prevItem.toString());
        
        return true;
    }else{
        let index=prevItem.indexOf(foodId+"");
        prevItem.splice(index,1);
        localStorage.setItem('addMealFav',prevItem.toString());
        return false;
    }
    
}