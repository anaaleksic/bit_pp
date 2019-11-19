const ui = (function () {


    let $input = $('.input-btn');




    function displayUsers(users) {
        users.forEach(user => {
            // const li = $(`<li>${user.name} </li>`);
            // $('.listOfUser').append(li);

            const div = $(`<div>`);
            div.addClass('style-div').addClass('flex-container')
            const span = $(`<span>${user.name} </span>`);
            span.addClass("span-style-yu");
            const img = $('<img>').attr('src', user.image).addClass('user-image')
            const imgClickable = $('<a>').attr('href', user.url);

            imgClickable.append(img);

            div.append($(imgClickable));
            div.append(span);
            $('.main-wrap').append(div)


        });

    }


    function searchingValue() {
        return $input.val()
    }



    return {

        searchingValue,
        displayUsers

    }


})();