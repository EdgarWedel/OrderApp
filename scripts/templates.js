function getBurgerTemplate(index) {
    return `
            <div class="menu-box">
                <img class="menu-img" src="${foods.burgers[index].image}" alt="">
                <div class="menu-info-box">
                    <div>
                        <h3 class="menu-box-head">${foods.burgers[index].name}</h3>
                        <span class="menu-box-underline">${foods.burgers[index].info}</span>
                    </div>
                    <div class="add-box">
                        <p class="price">${foods.burgers[index].price}0 €</p>
                        <button onclick="addToBasketBurger(${index})" id="add_btn" class="add-btn">Add to basket</button>
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
                        <button onclick="addToBasketPizza(${pizzaIndex})" id="add_btn" class="add-btn">Add to basket</button>
                    </div>
                </div>
            </div>
        </section>
    `
}

function getSaladTemplate(saladIndex) {
    return `
        <div class="menu-box">
                <img class="menu-img" src="${foods.salads[saladIndex].image}" alt="Bild von einem Salad">
                <div class="menu-info-box">
                    <div>
                        <h3 class="menu-box-head">${foods.salads[saladIndex].name}</h3>
                        <span class="menu-box-underline">${foods.salads[saladIndex].info}</span>
                    </div>
                    <div class="add-box">
                        <p class="price">${foods.salads[saladIndex].price}0 €</p>
                        <button onclick="addToBasketSalad(${saladIndex})" id="add_btn" class="add-btn">Add to basket</button>
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
                <img class="empty-basket-icon" src="./assets/icons/basket.png" alt="">
        `
}

function getBasketTemplate(basketIndex) {
    return `
            <div class="basket-food-box">
                <div>
                    <span id="amount" class="amount">${foods.basket[basketIndex].amount} x</span>
                    <span class="basket-name">${foods.basket[basketIndex].name}</span>
                </div>    
                <div class="nav-bar">
                    <div class="nav-btns">
                            ${foods.basket[basketIndex].amount === 1
                                ? `
                                    <button onclick="deleteItem(${basketIndex})" class="delete-btn">
                                        <img class="icon default" src="./assets/icons/delete.png" alt="Mülleimer weiss">
                                        <img class="icon hover" src="./assets/hover/deletehover.png" alt="Mülleimar orange">
                                    </button>
                                `
                                : `
                                    <button onclick="decreaseAmount(${basketIndex})" class="quantity-btn">
                                    -
                                    </button>
                                `
        }
                        <span id="amount_ref" class="amount">${foods.basket[basketIndex].amount}</span>
                        <button onclick="increaseAmount(${basketIndex})" class="quantity-btn">+</button>
                    </div>
                    <span class="basket-price">${(foods.basket[basketIndex].price * foods.basket[basketIndex].amount).toFixed(2)} €</span>
                </div>
            </div>    
    `
}

function getPriceTemplate() {
    return `
            <table class="total-table">
                    <tr>
                        <td>Subtotal</td>
                        <td style="text-align: right;">${foods.result()} €</td>
                    </tr>
                    <tr>
                        <td>Delivery Fee</td>
                        <td style="text-align: right;">4,99 €</td>
                    </tr>
                </table>
                <div class="line">

                </div>
                <table class="total-table">
                    <tr>
                        <td>Total</td>
                        <td id="total_sum" style="text-align: right;">${foods.totalresult()} €</td>
                    </tr>
                </table>
                <button onclick="openDialog()" class="buy-btn">
                    Buy now (${foods.totalresult()} €)
                </button>
    `
}

function renderDialog() {
    return `
            <header>
                <div style="text-align: end;">
                    <button class="close-btn"><img onclick="closeDialog()" src="./assets/icons/close.png" alt=""></button>
                </div>
            </header>
            <main>    
                <div class="display-position">
                    <img class="dialog-img" src="./assets/img/order-confirmed.webp" alt="Ein Lieferwagen">
                    <div>
                        <h2 class="dialog-head">Order confirmed!</h2>
                        <h3 class="dialog-under">Your food is on the way!</h3>
                    </div>
                </div>
            </main>    
    `
}

function getMobileNavBarTemplate() {
    return `
        <div class="mobile-nav-bar">
            <button class="mobile-nav-icon">
                <img class="icon default" src="./assets/icons/home.png" alt="Ein Haus weiss">
                <img class="icon hover" src="./assets/hover/home.png" alt="Ein Haus orange">
            </button>
            <button class="mobile-nav-icon">
                <img class="icon default" src="./assets/icons/person.png" alt="Eine Person weiss">
                <img class="icon hover" src="./assets/hover/person hover.png" alt="Eine Person orange">
            </button>
            <button class="mobile-nav-icon">
                <img class="icon default" src="./assets/icons/takeout_dining_2.png" alt="Eine Liefertüte weiss">
                <img class="icon hover" src="./assets/hover/takeout_dining_2 hover.png" alt="Eine Liefertüte orange">
            </button>
            <button id="mobile-basket-btn" class="mobile-nav-icon icon-wrapper" onclick="openBasket()">
                <img class="icon default" src="./assets/icons/shopping_cart.png" alt="Ein Einkaufswagen weiss">
                <img class="icon hover" src="./assets/hover/shopping_cart.png" alt="Ein Einkaufswagen orange">
                <div class="hide-quantity badge" id="quantity_bg">
                    <span class="quantity-num hide-quantity" id="quantity_basket">${foods.basket.length}</span>
                </div>
            </button>
        </div>
    `
}