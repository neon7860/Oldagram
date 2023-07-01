const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

//loop through object and display on webpage
const postEl = document.getElementById("post-el")
const likeBtnEl = document.getElementById("btn-like")
const likeEl = document.getElementById("like-el")


let postItem = ""
for (let i = 0; i < posts.length; i++){
    postItem += `
            <div class="post-container">
                <div class="post-header">
                    <img class="img-avatar" src="${posts[i].avatar}">
                    <div class="post-info">
                        <span class="bold">${posts[i].name}</span>
                        <span>${posts[i].location}</span>
                    </div>
                </div>
                
                <img class="post-img" src="${posts[i].post}">
                
                <div class="post-interactions">
                    <img id="btn-like" src="images/icon-heart.png">
                    <img src="images/icon-comment.png">
                    <img src="images/icon-dm.png">
                </div>
                
                <div class="likes">
                <span id="like-el" class="bold">${posts[i].likes} likes</span>
                </div>
                
                <div class="post-description">
                    <p><span class="username bold">${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
            </div>`
                
                postEl.innerHTML = postItem
                
}












