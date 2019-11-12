(function () {
    console.log("Hi");

    function Product(id, name, price, expirationDate) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.expirationDate = expirationDate;

        this.getInfo = function () {
            return id + ", " + name + ", " + expirationDate;
        }
    }

    function ShoppingBag() {
        this.listOfProducts = [];
        this.addProduct = function (product) {
            var currentDate = new Date();
            if (product.date.getFullYear() <= currentDate.getFullYear() && product.date.getMonth() <= currentDate.getMonth() && product.date.getDate() <= currentDate.getDate()) {
                this.listOfProducts.push(product);
            } else {
                return "expired";
            }
        }
        this.calculateAverage = function () {
            var average = 0;
            for (var i in this.listOfProducts) {
                average += this.listOfProducts[i].price;
            }
            return average / this.listOfProducts.length;
        }
        this.getMostExpensive = function () {
            var MostExpensive = this.listOfProducts[0];
            for (var i in this.listOfProducts) {
                if (MostExpensive.price < this.listOfProducts[i].price) {
                    MostExpensive = this.listOfProducts[i];
                }
            }
            return MostExpensive;
        }
        this.calculateTotalPrice = function () {
            var total = 0;
            for (var product in this.listOfProducts) {
                total += product.price;
            }

        }
        return total;
    }

    function PaymentCard(name, money, expDate) {
        this.name = name;
        this.money = money;
        this.date = new Date(expDate);
        this.status = function () {
            if (expDate > currentDate) {
                return "Status is active";
            }
            else {
                return "Status is inactive"
            }
        }

    }

    var visa = new PaymentCard("Visa", "2850,59", "02-02-2020")

})();