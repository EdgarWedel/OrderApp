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
    renderMobileNavBar();
};

function addToBasketBurger(burgerIndex) {
    let existingItem = foods.basket.find(item =>
        item.name === foods.burgers[burgerIndex].name
    );

    if (existingItem) {
        existingItem.amount++;
    } else {
        let addedItem = {
            "amount": 1,
            "name": foods.burgers[burgerIndex].name,
            "price": foods.burgers[burgerIndex].price
        };

        foods.basket.push(addedItem);
    }

    renderBasket();
    renderQuantity();
}

function addToBasketPizza(pizzaIndex) {

    let existingItem = foods.basket.find(item =>
        item.name === foods.pizzas[pizzaIndex].name
    );

    if (existingItem) {
        existingItem.amount++;
    } else {
        let addedItem = {
            "amount": 1,
            "name": foods.pizzas[pizzaIndex].name,
            "price": foods.pizzas[pizzaIndex].price
        };

        foods.basket.push(addedItem);
    }

    renderBasket();
    renderQuantity();
}

function addToBasketSalad(saladIndex) {
    let existingItem = foods.basket.find(item =>
        item.name === foods.salads[saladIndex].name
    );

    if (existingItem) {
        existingItem.amount++;
    } else {
        let addedItem = {
            "amount": 1,
            "name": foods.salads[saladIndex].name,
            "price": foods.salads[saladIndex].price
        };

        foods.basket.push(addedItem);
    }

    renderBasket();
    renderQuantity();
}

function renderBasket() {
    let basketRef = document.getElementById('basket');
    let basket = document.getElementById('basket');
    basket.innerHTML = "";

    if (foods.basket.length === 0) {
        basketRef.innerHTML = getEmptyBasketTemplate();
    } else {
        basketRef.innerHTML = "";
        for (let basketIndex = 0; basketIndex < foods.basket.length; basketIndex++) {
            basketRef.innerHTML += getBasketTemplate(basketIndex);
        }
    }
    if (foods.basket.length > 0) {
        renderTotalPrice();
    } else {
        let price = document.getElementById('total_price');
        price.innerHTML = "";
    }
}

function renderMobileNavBar() {
    let navBar = document.getElementById('responsive_nav_bar');
    navBar.innerHTML = getMobileNavBarTemplate();
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

function increaseAmount(basketIndex) {
    foods.basket[basketIndex].amount++;
    renderBasket();
    renderQuantity();
}

function decreaseAmount(basketIndex) {
    foods.basket[basketIndex].amount--;
    renderBasket();
    renderQuantity();
}

function deleteItem(basketIndex) {
    foods.basket.splice(basketIndex, 1);
    renderBasket();
    renderQuantity();
}

function openBasket() {
    let basket = document.getElementById('responsive_basket');
    basket.classList.toggle('hide');
}

function renderQuantity() {
    let quantity = document.getElementById('quantity_basket');
    let quantityBg = document.getElementById('quantity_bg');
    
    if (foods.basket.length > 0) {
        quantity.classList.remove('hide-quantity');
        quantityBg.classList.remove('hide-quantity');
    } else if (foods.basket.length == 0) {
        quantity.classList.add('hide-quantity');
        quantityBg.classList.add('hide-quantity');
    }
    
    quantity.innerHTML = foods.basket.length;
}