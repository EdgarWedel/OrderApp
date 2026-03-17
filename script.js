function init() {
    let contentRef = document.getElementById('burger_menu');

    for (let foodIndex = 0; foodIndex < foods.burgers.length; foodIndex++) {
        contentRef.innerHTML += getBurgerTemplate(foodIndex);   
    }
}