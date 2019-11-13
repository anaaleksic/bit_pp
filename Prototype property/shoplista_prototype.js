(function () {
    console.log("Hi");

    function Product(id, name, price, expirationDate) {
        this.id = 1 + math.random() * 3
        this.name = name;
        this.price = price;
        this.expirationDate = expirationDate;


    }
    Product.prototype.getInfo = function () {
        return this.id + ", " + this.name + ", " + this.expirationDate;
    }

    function ShoppingBag(product) {
        this.listOfProducts = [];
    }

    ShoppingBag.prototype.addProduct = function (product) {
        var currentDate = new Date();
        if (this.product.date.getFullYear() <= currentDate.getFullYear() && this.product.date.getMonth() <= currentDate.getMonth() && this.product.date.getDate() <= currentDate.getDate()) {
            this.listOfProducts.push(product);
        } else {
            return "expired";
        }
    }
    ShoppingBag.prototype.calculateAverage = function () {
        var average = 0;
        for (var i in this.listOfProducts) {
            average += this.listOfProducts[i].price;
        }
        return average / this.listOfProducts.length;
    }
    ShoppingBag.prototype.getMostExpensive = function () {
        var MostExpensive = this.listOfProducts[0];
        for (var i in this.listOfProducts) {
            if (MostExpensive.price < this.listOfProducts[i].price) {
                MostExpensive = this.listOfProducts[i];
            }
        }
        return MostExpensive;
    }

    ShoppingBag.prototype.calculateTotalPrice = function () {
        var total = 0;
        for (this.product in this.listOfProducts) {
            total += this.product.price;
        }
        return total;
    }


    function PaymentCard(name, money, expDate) {
        this.name = name;
        this.money = money;
        this.date = new Date(expDate);
    }

    PaymentCard.prototype.status = function () {
        if (expDate > currentDate) {
            return "Status is active";
        }
        else {
            return "Status is inactive"
        }
    }

    function checkoutAndBuy(ShoppingBag, PaymentCard) {
        var missingMoney = 0;

        if (money >= this.calculateTotalPrice) {
            return "Purchase is successful!"
        } else {
            missingMoney = this.calculateTotalPrice - money;
        }
        return missingMoney;
    }
    var visa = new PaymentCard("Visa", "2850,59", "02-02-2020")

    var Product = new ShoppingBag("")

})();