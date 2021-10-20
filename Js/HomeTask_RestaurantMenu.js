// Your assignment is to build a simple object that contains multiple properties and functions.



// Here are the things that should be included:

// 1. An object named "restaurantMenu"

// 2. Properties that contains

    // a. The name of the restaurant

    // b. The items that the restaurant sells which includes the names and prices. Price can just be a number. Limit this to 5 items.

    // c. A method that lists out all the menu items with their prices via an alert.

    // d. A method that allows the user to select which menu item that the user wants to order via a prompt. Simply alert the menu item back to the user.



const restaurantMenu = {
    name: "Awesome burgers",
    items: [
        {name: 'Small for kids', price: 5.99},
        {name: 'Medium for adults', price: 7.99},
        {name: 'Real mans size', price: 9.99},
        {name: 'French fries', price: 4.00},
        {name: 'King Cola Zero', price: 2.50}
    ],

    showMenuItems: function() {
        let menuList = '';
        for (let index = 0; index < this.items.length; index++) {
            let currentItem = this.items[index];
            menuList += `${index + 1} - Item menu: ${currentItem.name} price: ${currentItem.price.toFixed(2)}$\n`
        }
        alert(menuList);
    },

    selectMenuItem: function() {
        let answer = prompt("What do you want to order?")
        let menuNumber = parseInt(answer);
        if (menuNumber < 1 || menuNumber >= this.items.length)
            alert("Wrong menu number");
        else alert(`Thanks. You've ordeed: '${this.items[menuNumber - 1].name}'`);    
    }
}

restaurantMenu.showMenuItems();
restaurantMenu.selectMenuItem();