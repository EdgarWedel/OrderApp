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
                        <button class="add-btn">Add to basket</button>
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
                        <button class="add-btn">Add to basket</button>
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
                        <button class="add-btn">Add to basket</button>
                    </div>
                </div>
            </div>
        </section>
    `
}