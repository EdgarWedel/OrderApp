function init() {
    let burgerRef = document.getElementById('burger_menu');
    let pizzaRef = document.getElementById('pizza_menu');
    let saladRef = document.getElementById('salad_menu');
    let basketRef = document.getElementById('basket');

    for (let burgerIndex = 0; burgerIndex < foods.burgers.length; burgerIndex++) {
        burgerRef.innerHTML += getBurgerTemplate(burgerIndex);
    }

    for (let pizzaIndex = 0; pizzaIndex < foods.pizzas.length; pizzaIndex++) {
        pizzaRef.innerHTML += getPizzaTemplate(pizzaIndex);
    }

    for (let saladIndex = 0; saladIndex < foods.salads.length; saladIndex++) {
        saladRef.innerHTML += getSaladTemplate(saladIndex);
    }

    if (foods.basket.length < 2) {
        basketRef.innerHTML = getEmptyBasketTemplate();
    } else {
        basketRef.innerHTML = "";
        for (let basketIndex = 0; basketIndex < foods.basket.length; basketIndex++) {
            basketRef.innerHTML += getBasketTemplate(basketIndex);
        }
    }
};

function addToBasketBurger(burgerIndex) {
    let addedItem = {
        "amount": 1,
        "name": foods.burgers[burgerIndex].name,
        "price": foods.burgers[burgerIndex].price
    }

    foods.basket.push(addedItem);
    renderBasket();
}

function addToBasketPizza(pizzaIndex) {
    let addedItem = {
        "amount": 1,
        "name": foods.pizzas[pizzaIndex].name,
        "price": foods.pizzas[pizzaIndex].price
    }

    foods.basket.push(addedItem);
    renderBasket();
}

function addToBasketSalad(saladIndex) {
    let addedItem = {
        "amount": 1,
        "name": foods.salads[saladIndex].name,
        "price": foods.salads[saladIndex].price
    }

    foods.basket.push(addedItem);
    renderBasket();
}

function renderBasket() {
    let basket = document.getElementById('basket');
    basket.innerHTML = "";

    for (let basketIndex = 0; basketIndex < foods.basket.length; basketIndex++) {
        basket.innerHTML += getBasketTemplate(basketIndex);
    }
    renderTotalPrice();
}

function renderTotalPrice() {
    let price = document.getElementById('total_price');
    price.innerHTML = getPriceTemplate();
}

function openDialog() {
    confirmRef = document.getElementById('confirm_dialog');
    confirmRef.showModal()
    confirmRef.innerHTML = renderDialog();
}

function closeDialog() {
    confirmRef = document.getElementById('confirm_dialog');
    confirmRef.close()
}

window.onclick = function (event) {
    confirmRef = document.getElementById('confirm_dialog');
    if (event.target == confirmRef)
        confirmRef.close();
}