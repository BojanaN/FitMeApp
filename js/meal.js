let meals = [];

let ct; // create table variable

let apiRequest1 = fetch(`https://www.themealdb.com/api/json/v1/1/latest.php`)
    .then(result => {
        return result.json();
    }).then(result => {
        meals = result.meals;
        apiCall(meals);
    });

function apiCall(result) {

    console.log(result);

    ct += '<table border="1">'
    ct += '<thead>'
    ct += '<th>Name</th>'
    ct += '<th>Category</th>'
    ct += '<th>Ingredients</th>'
    ct += '<th>Measurements</th>'
    ct += '</thead>'
    ct += '<tbody>'

    meals.map(item => {
        ct += '<tr class="rows">'
        ct += '<td>'
        ct += item.strMeal;
        ct += '</td>'
        ct += '<td>'
        ct += item.strCategory;
        ct += '</td>'
        ct += '<td>'
        ct += '<p class="d-block">' + item.strIngredient1 + '</p>';
        ct += '<p class="d-block">' + item.strIngredient2 + '</p>';
        ct += '<p class="d-block">' + item.strIngredient3 + '</p>';
        ct += '<p class="d-block">' + item.strIngredient4 + '</p>';
        ct += '<p class="d-block">' + item.strIngredient5 + '</p>';
        ct += '<p class="d-block">' + item.strIngredient6 + '</p>';
        ct += '<p class="d-block">' + item.strIngredient7 + '</p>';
        ct += '<p class="d-block">' + item.strIngredient8 + '</p>';
        ct += '<p class="d-block">' + item.strIngredient9 + '</p>';
        ct += '<p class="d-block">' + item.strIngredient10 + '</p>';
        ct += '</td>'
        ct += '<td>'
        ct += '<p class="d-block">' + item.strMeasure1 + '</p>';
        ct += '<p class="d-block">' + item.strMeasure2 + '</p>';
        ct += '<p class="d-block">' + item.strMeasure3 + '</p>';
        ct += '<p class="d-block">' + item.strMeasure4 + '</p>';
        ct += '<p class="d-block">' + item.strMeasure5 + '</p>';
        ct += '<p class="d-block">' + item.strMeasure6 + '</p>';
        ct += '<p class="d-block">' + item.strMeasure7 + '</p>';
        ct += '<p class="d-block">' + item.strMeasure8 + '</p>';
        ct += '<p class="d-block">' + item.strMeasure9 + '</p>';
        ct += '<p class="d-block">' + item.strMeasure10 + '</p>';
        ct += '</td>'
        ct += '<td width="50%">'
        ct += item.strInstructions;
        ct += '</td>'
        ct += '</tr>'
    });

    ct += '</tbody>'
    ct += '</table>'

    let tableDiv = document.getElementById('table-div');
    tableDiv.innerHTML = ct;
}