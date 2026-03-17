function init() {
    let burgerRef = document.getElementById('burger_menu');
    let pizzaRef = document.getElementById('pizza_menu');

    for (let burgerIndex = 0; burgerIndex < foods.burgers.length; burgerIndex++) {
        burgerRef.innerHTML += getBurgerTemplate(burgerIndex);   
    }

    for (let pizzaIndex = 0; pizzaIndex < foods.pizzas.length; pizzaIndex++) {
        pizzaRef.innerHTML += getPizzaTemplate(pizzaIndex);
    }
}