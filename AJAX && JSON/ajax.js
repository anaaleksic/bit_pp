var btn = document.querySelector('button');


btn.addEventListener('click', function () {

    var ajax = new XMLHttpRequest();

    var dogoUrl = 'https://dog.ceo/api/breeds/image/random'

    ajax.open('GET', dogoUrl);

    ajax.addEventListener('load', function () {

        var data = JSON.parse(ajax.responseText);

        var dog = data.message;

        var image = document.createElement('img');
        image.setAttribute('src', dog);
        image.setAttribute('width', '200px')

        document.querySelector('body').append(image);

    })



    ajax.send();








})