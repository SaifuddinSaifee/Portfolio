const random_meals = document.getElementById("random-meals");

getRandomMeal();
async function getRandomMeal() {
    const resp = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
    );

    const randomMeal = await resp.json();

    console.log(randomMeal.meals[0]);
    addMeal(randomMeal.meals[0], true);
}

function addMeal(mealData, random = false) {
    mealData = mealData;
    const meal = document.createElement("div");
    meal.classList.add("meal");

    meal.innerHTML = `
                    ${random ? `<h4 class="rm-header">Random recipe</h4>` : ""}
                    
                    <div class="meal-body">
                        
                        <img src="${mealData.strMealThumb}" alt="${
        mealData.strMeal
    }">
                    </div>
                    <div class="meal-data">
                        <h4>
                            ${mealData.strMeal}
                        </h4>
                        <div class="util-button">
                            <button><i class="fa-solid fa-share"></i></button>
                            <button><i class="fa-regular fa-bookmark"></i></button>
                            <button><i class="fa-solid fa-heart"></i></button>
                        </div>
                    </div>
                    <button class="recipe-btn">
                        See full recipe
                    </button>
                `;

    random_meals.appendChild(meal);
}

async function getMeanById(id) {
    const meal = await fetch(
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772" + id
    );
}

async function getMealsBySearch() {
    const mealSearched = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + id
    );
}
