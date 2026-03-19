function getBurgerTemplate(burgerIndex) {
    return `
            <div class="menu-box">
                <img class="menu-img" src="${foods.burgers[burgerIndex].image}" alt="">
                <div class="menu-info-box">
                    <div>
                        <h3 class="menu-box-head">${foods.burgers[burgerIndex].name}</h3>
                        <span class="menu-box-underline">${foods.burgers[burgerIndex].info}</span>
                    </div>
                    <div class="add-box">
                        <p class="price">${foods.burgers[burgerIndex].price}0 €</p>
                        <button onclick="addToBasketBurger(${burgerIndex})" id="add_btn" class="add-btn">Add to basket</button>
                    </div>
                </div>
            </div>
        </section>
    `
}

function getPizzaTemplate(pizzaIndex) {
    return `
        <div class="menu-box">
                <img class="menu-img" src="${foods.pizzas[pizzaIndex].image}" alt="">
                <div class="menu-info-box">
                    <div>
                        <h3 class="menu-box-head">${foods.pizzas[pizzaIndex].name}</h3>
                        <span class="menu-box-underline">${foods.pizzas[pizzaIndex].info}</span>
                    </div>
                    <div class="add-box">
                        <p class="price">${foods.pizzas[pizzaIndex].price}0 €</p>
                        <button onclick="addToBasket()" id="add_btn" class="add-btn">Add to basket</button>
                    </div>
                </div>
            </div>
        </section>
    `
}

function getSaladTemplate(saladIndex) {
    return `
        <div class="menu-box">
                <img class="menu-img" src="${foods.salads[saladIndex].image}" alt="">
                <div class="menu-info-box">
                    <div>
                        <h3 class="menu-box-head">${foods.salads[saladIndex].name}</h3>
                        <span class="menu-box-underline">${foods.salads[saladIndex].info}</span>
                    </div>
                    <div class="add-box">
                        <p class="price">${foods.salads[saladIndex].price}0 €</p>
                        <button onclick="addToBasket()"      id="add_btn" class="add-btn">Add to basket</button>
                    </div>
                </div>
            </div>
        </section>
    `
}

function getEmptyBasketTemplate() {
    return `
                <span class="empty-basket-info">
                    Nothing here yet.
                    Go ahead and choose something delicious!
                </span>
                <img class="empty-basket-icon" src="./assets/icons/shopping_cart.png" alt="">
        `
}

function getBasketTemplate(basketIndex) {
    return `
            <div class="basket-food-box">
                <div>
                    <span class="amount">${foods.basket[basketIndex].amount} x</span>
                    <span class="basket-name">${foods.basket[basketIndex].name}</span>
                </div>    
                <div class="nav-bar">
                    <div class="nav-btns">
                        <button class="delete-btn">
                        <img class="icon default" src="./assets/icons/delete.png" alt="">
                        <img class="icon hover" src="./assets/icons/deletehover.png" alt="">
                        </button>
                        <span class="amount">1</span>
                        <button class="increase-btn"><img src="./assets/icons/+.png" alt=""></button>
                    </div>
                    <span class="basket-price">${foods.basket[basketIndex].price}0 €</span>
                </div>
            </div> 
            <div>
                <p>Subtotal</p><p>$

            </div>   
    `
}