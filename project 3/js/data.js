const data = (function () {

    class User {
        constructor(id, name, image, url) {
            this.id = id;
            this.image = image;
            this.name = name;
            this.url = url;


        }
    }




    function fetchUser(searchUser, success /*funkcija*/) {

        const url = `https://api.github.com/search/users?q=${searchUser}`
        console.log('requestUrl', url);
        $.get(url, function (responseData) {
            console.log('succesrequest');
            const userOfList = responseData.items;

            const myUser = [];

            for (let i = 0; i < userOfList.length; i++) {

                const objItem = userOfList[i];

                const user = new User(objItem.id, objItem.login, objItem.avatar_url, objItem.html_url);

                myUser.push(user);

            }

            console.log('myUser', myUser)
            success(myUser)



        });







    }

    return {
        fetchUser
    }



})();