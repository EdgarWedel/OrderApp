function getBurgerTemplate(foodIndex) {
    return `
            <div class="menu-box">
                <img class="menu-img" src="${foods.burgers[foodIndex].image}" alt="">
                <div class="menu-info-box">
                    <div>
                        <h3 class="menu-box-head">${foods.burgers[foodIndex].name}</h3>
                        <span class="menu-box-underline">${foods.burgers[foodIndex].info}</span>
                    </div>
                    <div class="add-box">
                        <p class="price">${foods.burgers[foodIndex].price}0 €</p>
                        <button class="add-btn">Add to basket</button>
                    </div>
                </div>
            </div>
        </section>
    `
}