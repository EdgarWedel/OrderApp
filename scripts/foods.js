let foods = {
    "burgers": [
        {
            "image": "./assets/img/burger-1-kompri.webp",
            "name": "Veggie mushroom black hunger",
            "info": "Mixed green salad, Tomatoes, Edamame, Mushrooms",
            "price": 16.90
        },
        {
            "image": "./assets/img/burger-2-kompri.webp",
            "name": "All meat burger",
            "info": "Beef, Bacon, Dill pickles, Smoked cheese, Ketchup, BBQ souse",
            "price": 15.90
        },
        {
            "image": "./assets/img/burger-3.webp",
            "name": "Beef red burger",
            "info": "Beef, Cheese, Tomatoes, Lettuce, Onion",
            "price": 14.90
        },
        {
            "image": "./assets/img/burger-4.webp",
            "name": "Big chicken burger",
            "info": "Chicken, Cheese, Tomatoes, Lettuce, Onion, Bell pepper",
            "price": 16.90
        },
    ],
    "pizzas": [
        {
            "image": "./assets/img/pizza-1.webp",
            "name": "Pizza Margherita",
            "info": "Tomato Sauce, Mozzarella",
            "price": 11.90
        },
        {
            "image": "./assets/img/pizza-2.webp",
            "name": "Pizza Chorizo",
            "info": "Tomato slices, Mozzarella, Chorizo",
            "price": 13.90
        },
        {
            "image": "./assets/img/pizza-3.webp",
            "name": "Funghi",
            "info": "Red onion, Olives, Button Mushrooms, Mozzarella",
            "price": 12.90
        },
        {
            "image": "./assets/img/pizza-4.webp",
            "name": "Quattro Formaggi with Chicken ",
            "info": "Chicken, Mozzarella, Gorgonzola, Fontina,  Parmigiano Reggiano",
            "price": 15.90
        },
    ],
    "salads": [
        {
            "image": "./assets/img/salad-1.webp",
            "name": "Warm beef arugula salad",
            "info": "Beef, Arugula, Field salad, Greek feta, Cherry tomatoes, Sun-dried Tomatoes, Balsamic-vinegar dressing",
            "price": 16.90
        },
        {
            "image": "./assets/img/salad-2.webp",
            "name": "Mini green Salad",
            "info": "Green salad, Cucumber, Carrots, Parsley, Radishes ",
            "price": 7.90
        },
        {
            "image": "./assets/img/salad-3.webp",
            "name": "Green Salad with sea food",
            "info": "Mixed greens, Cherry tomatoes, Red onion, Mussels, Squid rings, Shrimp, Dijon mustard-lemon dressing with dill",
            "price": 16.90
        },
        {
            "image": "./assets/img/salad-4.webp",
            "name": "Vegan green salad with tofu",
            "info": "Green salad, Cherry tomatoes, Cucumber, Baby spinach, Edamame, Radishes, Bittercress, Tofu, Peanuts",
            "price": 14.90
        },
    ],
    "basket": [

    ],
    "result": function calculatePrice() {
        let sum = 0;

        this.basket.forEach(item => {
            sum += item.price * item.amount;
        });

        return sum.toFixed(2);
    },
    "totalresult": function calculateTotalPrice() {
        let sum = 0;

        this.basket.forEach(item => {
            sum += item.price * item.amount;
        });

        let totalSum = sum + 4.99;

        return totalSum.toFixed(2);
    }
};
