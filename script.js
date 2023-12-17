var orders = []; // Array to store orders
var pizzaPrices = {
    'Margherita': 100,
    'Pepperoni': 120,
    'Kebabpizza': 120,
    'Kycklingpizza': 120,
    'Vegetarisk': 110
};

function addPizza() {
    var selectedPizza = document.getElementById('pizza-type').value;
    var quantity = document.getElementById('quantity').value;

    if (quantity <= 0) {
        alert('Please enter a valid quantity.');
        return;
    }

    orders.push({
        pizza: selectedPizza,
        quantity: quantity
    });

    // Update the order summary on the page
    updateOrderSummary();

    resetForm();
}

function updateOrderSummary() {
    var orderList = document.getElementById('order-list');
    var totalPriceElement = document.getElementById('total-price');

    orderList.innerHTML = ''; // Clear previous entries

    var total = 0;

    orders.forEach(function(order) {
        var listItem = document.createElement('li');
        listItem.textContent = order.quantity + ' st ' + order.pizza;
        orderList.appendChild(listItem);

        // Calculate the price for each pizza type and add to the total
        total += pizzaPrices[order.pizza] * order.quantity;
    });

    // Display the total price on the page
    totalPriceElement.textContent = 'Totalt pris: ' + total + ' kr';
}

function resetForm() {
    document.getElementById('pizza-type').selectedIndex = 0;
    document.getElementById('quantity').value = 1;
}

function placeOrder() {
    // Perform any additional actions when placing the final order, if needed
    // For example, you can send the order data to a server for processing
    // and then reset the order data and form.

    alert('Order placed successfully!'); // Replace with actual order processing logic

    // Reset order data and form
    orders = [];
    updateOrderSummary();
}
