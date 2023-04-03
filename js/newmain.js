//using fetch
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

function getUsers() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(Response => {
            if (Response.ok) {
                return Response.json()
            } else {
                reject("error with useres request")
            }
        })
        .then(users => {
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
            resolve();
        })
    })
}
// getUsers()
// .then(() => {
//     getPosts(1)
// })
// .catch((erorr) => {
//     console.log(erorr);
// }) 






//using axios liberary
function getUsersUsingAxios() {
    return new Promise((resolve,reject) => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        let users = response.data;
        document.querySelector(".users").innerHTML = "";
        for (user of users) {
            let content = `
                <div class="users" onclick="userClicked(${user.id})">
                    <h2>${user.name}</h2>
                    <h3>${user.email}</h3>
                </div>
            `
        document.querySelector(".users").innerHTML += content;
        }
        resolve();
    })
    .catch(error => {
        alert(error);
        reject(error);
    })
    })
}

function getPostsOfUser(userId) {
    let url = "https://jsonplaceholder.typicode.com/posts?userId="+userId;
    axios.get(url)
    .then((response) => {
        let posts = response.data;
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
    })
    .catch(error => {
        alert(error)
    })  
}


//get users before post(1) 
getUsersUsingAxios()
.then(() => {
    getPostsOfUser(1)
})
.catch(error => {
    alert(error)
})




function userClicked(id) {
    getPosts(id);
}