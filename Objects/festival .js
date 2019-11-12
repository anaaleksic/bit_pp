(function () {
    function Genre(name) {
        this.name = name;
        this.getData = function () {
            return this.name;
        };
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;

        this.getData = function () {
            return this.title + ", " + this.genre.getData() + ", " + this.length;
        };
    }

    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.numOfMovies = 0;

        this.addMovie = function (movie) {
            this.listOfMovies.push(movie);
            this.numOfMovies++;
        };


        this.getData = function () {
            var result = this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear();
            for (var i = 0; i < this.listOfMovies.length; i++) {
                result += "\t\t\t" + this.listOfMovies[i].getData() + "\n";
            }
            return result;
        };
    }


    function Festival(nameOfFestival) {
        this.nameOfFestival = "Venice Film Festival";
        this.listOfProgram = [];
        this.numOfMovies = 0;



        this.addProgram = function (program) {
            this.listOfProgram.push(program);
            this.numOfMovies += program.numOfMovies;
        }

        this.getData = function () {
            var result = "Festival: " + this.name + ", " + "total programs" + this.numOfMovies + "\n";
            for (var i = 0; i < this.listOfProgram.length; i++) {
                result += "\t\t" + this.listOfProgram[i].getData();
            }
            return result;
        }
    };


    function createMovie(title, genre, length) {
        var drama = new Genre("drama");
        var batman = new Movie("Batman", "drama", 123);
        var titanik = createMovie("Titanik", 'drama', "123");

        return new Movie(title, new Genre(genre), parseInt(length));
    };

    function createProgram(date) {
        var novogodisnji = new Program(date(02 / 03 / 2019));
        var listOfMovies =
        var totalLength =

        return new Program()
    }

    var festival = new Festival();






    // function createProgram(date) {
    //     var person = new Person(firstName, lastName);
    //     var seat = new Seat(seatNumber, category);
    //     return new Passenger(person, seat);
    // };


})();

