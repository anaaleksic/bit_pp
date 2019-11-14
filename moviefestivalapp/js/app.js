"use strict"


var addMovie = $('.addMovie').on('click', function () {

    // collect forma data

    var movieName = $('.movie-name').val();
    var movieLength = $('.movie-length').val()
    var genre = $('.choose-genre').val();
    var list = $('.list');



    if (movieName !== '' && movieLength !== '') {
        var genreOfMovie = new Genre(genre);
        var someMovie = new Movie(movieName, movieLength, genreOfMovie);



        var ele = $(`<li>${someMovie.getData()}</li>`)
        list.append(ele);

        $('.movie-name').val('');
        $('.movie-length').val('');
        $('.choose-genre').prop('selectedIndex', 0);





    }
    else {
        error();

    }













    // validate 

    // if not valid 
    // display error

    // valid
    // create genre 
    // create movie 
    // addd movie to list

    // update movie ul

    // 

});


class Genre {
    constructor(name) {
        this.name = name;

    }
    getDataOfGenre = function () {
        return ' Genre' + ':' + this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();

    }

}

class Movie {
    constructor(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;

    }
    getData() {
        return this.title + ' ' + ', length: ' + this.length + this.genre.getDataOfGenre();
    }
}


function error() {

    var error = $('.error').text('ERORR')
    return error

}







