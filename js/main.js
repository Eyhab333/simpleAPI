function getPosts(userId) {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId="+userId);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let posts = request.response;
            document.querySelector(".posts").innerHTML = "";
            for (post of posts) {
                let content = `
                    <div class="posts">
                        <h3>${post.title}</h3>
                        <h3>${post.body}</h3>
                    </div>
                `
                document.querySelector(".posts").innerHTML += content
            }
        } else {
        alert("eror");
        }
    } 
}
getPosts();




function userClicked (id) {
    getPosts(id);
}


function getUsers() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.responseType = "json";
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let users = request.response;
            document.querySelector(".users").innerHTML = "";
            for (user of users) {
                let content = `
                    <div class="users" onclick="userClicked(${user.id})">
                        <h2>${user.name}</h2>
                        <h3>${user.email}</h3>
                    </div>
                `
                document.querySelector(".users").innerHTML += content
            }
        } else {
        alert("erorr");
        }
    } 
}
getUsers();