function getFoodTemplate() {
    return `
            <section class="headline">
            <div class="gap">
                <div class="display">
                    <h1 class="color">Burger</h1>
                    <h1>House</h1>
                </div>
                <div class="background">
                    <img class="star" src="./assets/icons/star.png" alt="Stern">
                    <span style="font-size: 20px;">4,1</span>
                    <span style="font-size: 18px; color: rgba(114, 109, 109, 1); font-family: 'palanquin';">(317)</span>
                </div>
            </div>
            <p class="underline">The best of Burgers, Pizza and Greens, all in one great place.</p>
        </section>
        <section class="menu">
            <div class="menu-bg">
                <img class="burger-icon" src="./assets/icons/Chanese 1.png" alt="">
                <h2 class="menu-headline">Burger & Sandwiches</h2>
            </div>
        </section>
        <section class="burger-menu">
            <div class="menu-box">
                <img class="menu-img" src="./assets/img/burger-1.jpg" alt="">
                <div class="menu-info-box">
                    <div>
                        <h3 class="menu-box-head">Veggie mushroom black hunger</h3>
                        <span class="menu-box-underline">Mixed grren salad, Tomatoes, Edamame, Mushrooms</span>
                    </div>
                    <div class="add-box">
                        <p class="price">16,90 €</p>
                        <button class="add-btn">Add to basket</button>
                    </div>
                </div>
            </div>
        </section>
    `
}