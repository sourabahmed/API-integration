document.getElementById('error-message').style.display = "none";
const searchFood = () => {
    const searchInput = document.getElementById('search-field');
    const inputValue = searchInput.value;
    //clear data 

    searchInput.value = '';
    //load data
    if(inputValue == ''){
        alert('please write something')
    }
    else{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data))
        .catch(error => errorMessage(error));
    }
};
const errorMessage = error =>{
    document.getElementById('error-message').style.display = 'block';
}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    const meals = data.meals;
    if(meals == -1){
        alert('We do not find your product');
    }
    else{
        meals.forEach(meal => {
            console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div onclick="mealDetails(${meal.idMeal})" class="card">
               <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
               <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
              </div>
            </div>`;
            searchResult.appendChild(div);
        });
    }
};

// function fetch using async await
const mealDetails = async mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.meals[0])
    // fetch(url)
    // .then(res => res.json())
    // .then(data => displayDetails(data.meals[0]))
};
const displayDetails = meal =>{
    console.log(meal);
    const mealDetails = document.getElementById('meal-Details');
    mealDetails.innerHTML ='';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML =`
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
          <a href="${meal.strYoutube}" target="blank" class="btn btn-primary">YouTube</a>
        </div>`;
    mealDetails.appendChild(div);
};