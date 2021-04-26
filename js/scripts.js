function Order(size, sizeCost, crust, crustCost, topping, toppingCost, amount) {
    this.pizzaSize = size;
    this.pizzaSizeCost = sizeCost;
    this.pizzaCrust = crust;
    this.pizzaCrustCost = crustCost;
    this.pizzaTopping = topping;
    this.pizzaToppingCost = toppingCost;
    this.pizzaAmount = amount;
}
Order.prototype.orderCost = function () {
    return (this.pizzaSizeCost + this.pizzaCrustCost + this.pizzaToppingCost) * this.pizzaAmount;
}
let totalCost = 0;


$(document).ready(function () {
    $('#btnPersonalizeSave1').click(function (event) {
        let inputSize = "Small Classic Pizza";
        let inputSizeCost = parseInt(245);
        let inputCrust = $('#crustSmall').val();
        if (inputCrust == "Neapolitan Pizza Crust") {
            var inputCrustCost = parseInt(250);
        } else if (inputCrust == "New York-Style Pizza Crust") {
            var inputCrustCost = parseInt(220);
        } else if (inputCrust == "St. Louis Pizza Crust") {
            var inputCrustCost = parseInt(260);
        } else if (inputCrust == "Flatbread Crust") {
            var inputCrustCost = parseInt(170);
        } else {
            var inputCrustCost = parseInt(0);
        }

        let inputTopping = $('#toppingsSmall').val();

        if (inputTopping == "Pepperoni") {
            var inputToppingCost = parseInt(100);
        } else if (inputTopping == "Supreme") {
            var inputToppingCost = parseInt(200);
        } else if (inputTopping == "Hawaiian (Ham & Pineapple") {
            var inputToppingCost = parseInt(120);
        } else if (inputTopping == "BBQ Meatlovers") {
            var inputToppingCost = parseInt(160);
        } else {
            var inputToppingCost = parseInt(0);
        }
        let inputAmount = parseInt(1);
        let newOrder = new Order(inputSize, inputSizeCost, inputCrust, inputCrustCost, inputTopping, inputToppingCost, inputAmount);

        $('div#list').append('<div class="row"><div class="col-2"><p class="fs-5 mb-0">' + newOrder.pizzaAmount + 'x</p><div class="minus-icon"><div class="minus-sign text-center">-</div></div></div><div class="col-6"><p class="fs-5 mb-0">' + newOrder.pizzaSize + '</p><small>' + newOrder.pizzaCrust + ', ' + newOrder.pizzaTopping + '</small></div><div class="col-4 order-price"><p class="fs-5 mb-0">Ksh. ' + newOrder.orderCost() + '.00</p><div class="green-sign"><div class="plus-sign text-center">+</div></div></div></div> <hr>');
        event.preventDefault();

        totalCost += newOrder.orderCost();
        $('.totalCost').html(totalCost);
        $(this).prev().click();

    });
    $('#btnPersonalizeSave2').click(function (event) {
        let inputSize = "Medium Classic Pizza";
        let inputSizeCost = parseInt(245);
        let inputCrust = $('#crustMedium').val();
        if (inputCrust == "Neapolitan Pizza Crust") {
            var inputCrustCost = parseInt(250);
        } else if (inputCrust == "New York-Style Pizza Crust") {
            var inputCrustCost = parseInt(220);
        } else if (inputCrust == "St. Louis Pizza Crust") {
            var inputCrustCost = parseInt(260);
        } else if (inputCrust == "Flatbread Crust") {
            var inputCrustCost = parseInt(170);
        } else {
            var inputCrustCost = parseInt(0);
        }

        let inputTopping = $('#toppingsMedium').val();

        if (inputTopping == "Pepperoni") {
            var inputToppingCost = parseInt(100);
        } else if (inputTopping == "Supreme") {
            var inputToppingCost = parseInt(200);
        } else if (inputTopping == "Hawaiian (Ham & Pineapple") {
            var inputToppingCost = parseInt(120);
        } else if (inputTopping == "BBQ Meatlovers") {
            var inputToppingCost = parseInt(160);
        } else {
            var inputToppingCost = parseInt(0);
        }
        let inputAmount = parseInt(1);
        let newOrder = new Order(inputSize, inputSizeCost, inputCrust, inputCrustCost, inputTopping, inputToppingCost, inputAmount);

        $('div#list').append('<div class="row"><div class="col-2"><p class="fs-5 mb-0">' + newOrder.pizzaAmount + 'x</p><div class="minus-icon"><div class="minus-sign text-center">-</div></div></div><div class="col-6"><p class="fs-5 mb-0">' + newOrder.pizzaSize + '</p><small>' + newOrder.pizzaCrust + ', ' + newOrder.pizzaTopping + '</small></div><div class="col-4 order-price"><p class="fs-5 mb-0">Ksh. ' + newOrder.orderCost() + '.00</p><div class="green-sign"><div class="plus-sign text-center">+</div></div></div></div> <hr>');
        event.preventDefault();

        totalCost += newOrder.orderCost();
        $('.totalCost').html(totalCost);
        $(this).prev().click();

    });
    $('#btnPersonalizeSave3').click(function (event) {
        let inputSize = "Large Classic Pizza";
        let inputSizeCost = parseInt(245);
        let inputCrust = $('#crustLarge').val();
        if (inputCrust == "Neapolitan Pizza Crust") {
            var inputCrustCost = parseInt(250);
        } else if (inputCrust == "New York-Style Pizza Crust") {
            var inputCrustCost = parseInt(220);
        } else if (inputCrust == "St. Louis Pizza Crust") {
            var inputCrustCost = parseInt(260);
        } else if (inputCrust == "Flatbread Crust") {
            var inputCrustCost = parseInt(170);
        } else {
            var inputCrustCost = parseInt(0);
        }

        let inputTopping = $('#toppingsLarge').val();

        if (inputTopping == "Pepperoni") {
            var inputToppingCost = parseInt(100);
        } else if (inputTopping == "Supreme") {
            var inputToppingCost = parseInt(200);
        } else if (inputTopping == "Hawaiian (Ham & Pineapple") {
            var inputToppingCost = parseInt(120);
        } else if (inputTopping == "BBQ Meatlovers") {
            var inputToppingCost = parseInt(160);
        } else {
            var inputToppingCost = parseInt(0);
        }
        let inputAmount = parseInt(1);
        let newOrder = new Order(inputSize, inputSizeCost, inputCrust, inputCrustCost, inputTopping, inputToppingCost, inputAmount);

        $('#list').append('<div class="row"><div class="col-2"><p class="fs-5 mb-0">' + newOrder.pizzaAmount + 'x</p><div class="minus-icon"><div class="minus-sign text-center">-</div></div></div><div class="col-6"><p class="fs-5 mb-0">' + newOrder.pizzaSize + '</p><small>' + newOrder.pizzaCrust + ', ' + newOrder.pizzaTopping + '</small></div><div class="col-4 order-price"><p class="fs-5 mb-0">Ksh. ' + newOrder.orderCost() + '.00</p><div class="green-sign"><div class="plus-sign text-center">+</div></div></div></div> <hr>');
        event.preventDefault();

        totalCost += newOrder.orderCost();
        $('.totalCost').html(totalCost);
        $(this).prev().click();

    });

    $('#delivery').click(function(){
        alert("Please note that delivery will cost you an extra KES 200.00");
        totalCost += 200;
        $('.totalCost').html(totalCost);
    });
});