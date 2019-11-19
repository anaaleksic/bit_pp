const control = (function (ui, data) {

    $('.search-btn').on('click', onSearch);
    $('.input-btn').on('keypress', function (event) {
        if (event.which == 13) {
            onSearch();
        }
    });

    function onsuccess(myUser) {
        ui.displayUsers(myUser)

    }





    function onSearch() {
        const inputText = ui.searchingValue();
        console.log('inputText', inputText);
        data.fetchUser(inputText, onsuccess);


    }


    //validate


    //get request





})(ui, data);