const data = {
    "currentUser": {
        "image": { 
            "png": "https://picsum.photos/id/237/30/30",
            "webp": "./images/avatars/image-juliusomo.webp"
        },
        "id": 3,
      "username": "juliusomo"
    },
    "comments": [
      {
        "id": 1,
        "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        "createdAt": "1 month ago",
        "score": 12,
        "user": {
            "id": 2,
          "image": { 
            "png": "./images/avatars/image-amyrobson.png",
            "webp": "./images/avatars/image-amyrobson.webp"
          },
          "username": "amyrobson"
        },
        "replies": []
      },
      {
        "id": 2,
        "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        "createdAt": "2 weeks ago",
        "score": 5,
        "user": {
            "id": 1,
          "image": { 
            "png": "./images/avatars/image-maxblagun.png",
            "webp": "./images/avatars/image-maxblagun.webp"
          },
          "username": "maxblagun"
        },
        "replies": [
          {
            "id": 3,
            "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            "createdAt": "1 week ago",
            "score": 4,
            "replyingTo": "maxblagun",
            "user": {
                "id": 1,
              "image": { 
                "png": "./images/avatars/image-ramsesmiron.png",
                "webp": "./images/avatars/image-ramsesmiron.webp"
              },
              "username": "ramsesmiron"
            }
          },
          {
            "id": 4,
            "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            "createdAt": "2 days ago",
            "score": 2,
            "replyingTo": "ramsesmiron",
            "user": {
                "id": 1,
              "image": { 
                "png": "./images/avatars/image-juliusomo.png",
                "webp": "./images/avatars/image-juliusomo.webp"
              },
              "username": "juliusomo"
            }
          }
        ]
      }
    ]
}
// console.log(data.comments[1].replies[0].id);

const commentsContainer = document.querySelector(".comments");


function createCommentItem(comment){
    const { id, content, createdAt, score, user} = comment;
  

    return `
    
    <div class="comment" data-commentid="${id}">
        <div class="comment-rating">
            <a href="#" class="comment-rating-up" data-commentid="${id}">
                +
            </a>
            <strong>${score}</strong>
            <a href="#" class="comment-rating-down" data-commentid="${id}">
                -
            </a>
            
        </div>
        <div class="comment-body">
            <div class="comment-header">
                <div class="profile-info">
                    <img src="https://picsum.photos/id/${user.id}/40/40" alt="">
                    <strong>${user.username}</strong>
                    <span>${createdAt}</span>
                </div>
                ${comment.user.id === data.currentUser.id 
                    ? `<div><a class="delete-btn" href="#" data-commentid="${id}">
                            Sil
                        </a>
                        <a class="edit-btn" href="#" data-commentid="${id}">
                            Düzenle
                        </a></div>` 
                    : `<a class="reply-btn" href="#" data-commentid="${id}">
                        Cevap Yaz
                    </a>`
                }
            </div>
            <p contenteditable="false">${content}</p>
            <div class="update-comment-div" style="display:none;">
                <textarea>${content}</textarea>
                <button data-commentid="${id}" class="update-comment">Güncelle</button>
            </div>
        </div>
    </div>

    <div class="replyContainer" data-commentid="${id}"> </div>

    <div class="cevapdiv"  data-commentid="${id}"> 
        <div class="line"></div>
        <div class = "formDiv">
            <form class="cevapForm" data-commentid="${id}"> 
                <img src="https://picsum.photos/id/${data.currentUser.id}/40/40" alt="">
                <textarea required name="content" rows="3">@${user.username}</textarea>
                <button class="reply-comment" data-commentid="${id}">cevap ver</button>
            </form>
        </div>
    </div>
    `
}

function createReplyItem(comment){
    const { id } = comment;

    for (const reply of data.comments[id - 1].replies) {
        const replyid = reply.id ;
        const replyScore = reply.score;
        const replycontent = reply.content;
        const replycreatedat = reply.createdAt;
        const replyUserId = reply.user.id;
        const replyUsername = reply.user.username;

        return ` <div data-commentid="${replyid}">
        <div class="comment-rating">
            <a href="#" class="comment-rating-up" data-commentid="${replyid}">
                +
            </a>
            <strong>${replyScore}</strong>
            <a href="#" class="comment-rating-down" data-commentid="${replyid}">
                -
            </a>
            
        </div>
        <div class="comment-body">
            <div class="comment-header">
                <div class="profile-info">
                    <img src="https://picsum.photos/id/${replyid}/40/40" alt="">
                    <strong>${replyUsername}</strong>
                    <span>${replycreatedat}</span>
                </div>
                ${replyUserId === data.currentUser.id 
                    ? `<div><a class="delete-btn" href="#" data-commentid="${replyid}">
                            Sil
                        </a>
                        <a class="edit-btn" href="#" data-commentid="${replyid}">
                            Düzenle
                        </a></div>` 
                    : `<a class="reply-btn" href="#" data-commentid="${replyid}">
                        Cevap Yaz
                    </a>`
                }
            </div>
            <p contenteditable="false">${replycontent}</p>
            <div class="update-comment-div" style="display:none;">
                <textarea>${replycontent}</textarea>
                <button data-commentid="${replyid}" class="update-comment">Güncelle</button>
            </div>
        </div>
    </div>
        `
    }

}

function createUniqueId(){
    let id = 1;
    for (const comment of data.comments) {
        if(comment.id === id){
            id += 1;
        }
    }
    return id;
}

function createUniqueReplyId(value) {
    let id = 0;
    let i = 0;
    for (let i = 0; i < data.comments[parseInt(value) - 1].replies.length; i++) {
        // console.log(data.comments[parseInt(value) - 1].replies[i].id);
        if (data.comments[parseInt(value) - 1].replies[i].id === id) {
           id += 1; 
        }
    }
    // for (const comment of data.comments) {
    //     if (comment[parseInt(value)-1].replies[i].id === id) {
    //         id += 1;
    //     }
    // }
    return id;
}

let toDeleteComment = null;
const dialog = document.querySelector('dialog');
function deleteComment(e){
    e.preventDefault();
    const commentId = parseInt(this.dataset.commentid);
    const comment = searchCommentById(commentId);
    toDeleteComment = comment;
    dialog.showModal();
    bindEvents();
}

function deleteCommentFunc(e){
    e.preventDefault();
    const commentIndex = data.comments.indexOf(toDeleteComment);
    if(e.target.id === "delete"){
        data.comments.splice(commentIndex, 1);
        renderComments();
    }
    dialog.close();
}


function editComment(e){
    e.preventDefault();
    const commentId = parseInt(this.dataset.commentid);
    // const newComment = prompt("İçeriği neyle değiştirmek istersin?");
    const editedComment = data.comments.find(comment => comment.id === commentId);
    const textareaDiv = e.target.parentElement.parentElement.nextElementSibling.nextElementSibling;
    textareaDiv.style.display = "block";
    e.target.parentElement.parentElement.nextElementSibling.style.display = "none";
    
    // editedComment.content = newComment;
    // renderComments();
    // this.parentElement.parentElement.nextElementSibling.setAttribute("contenteditable", true);
}


function handleNewCommentForm(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData);
    formObj.id = createUniqueId();
    formObj.createdAt = "now";
    formObj.score = 0;
    formObj.replies = [];
    formObj.user = data.currentUser;

    data.comments.push(formObj);

    renderComments();

    e.target.reset();

}

function handleCevap(e){
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData);



    formObj.id = createUniqueReplyId(e.target.dataset.commentid);
    formObj.content = "fgfg";
    formObj.createdAt = "now";
    formObj.score = 0;
    formObj.user = data.currentUser;

    data.comments[e.target.dataset.commentid-1].replies.push(formObj);


    renderComments();

    // data.comments.replies
}


function updateComment(e){
    e.preventDefault();
    const commentId = parseInt(e.target.dataset.commentid)
    const editedComment = data.comments.find(comment => comment.id === commentId);
    const newComment = e.target.previousElementSibling.value
    editedComment.content = newComment;
    console.log(editedComment);
    console.log(data.comments);
    renderComments();
}

function bindEvents(){
    const newCommentForm = document.querySelector(".new-comment form");
    const cevapForms = document.querySelectorAll(".formDiv form");
    const ratingUpBtns = document.querySelectorAll(".comment-rating-up");
    const ratingDownBtns = document.querySelectorAll(".comment-rating-down");
    const deleteBtns = document.querySelectorAll(".delete-btn");
    const editBtns = document.querySelectorAll(".edit-btn");
    const dialogBtns = document.querySelectorAll(".dialog-btn");
    const updateCommentBtns = document.querySelectorAll(".update-comment");
    const replyBtns = document.querySelectorAll(".reply-btn");
    // const replyComments = document.querySelectorAll(".reply-comment");

    for (const ratingUpBtn of ratingUpBtns) {
        ratingUpBtn.addEventListener("click", rateCommentUp)
    }

    for (const ratingDownBtn of ratingDownBtns) {
        ratingDownBtn.addEventListener("click", rateCommentDown)
    }

    for (const deleteBtn of deleteBtns) {
        deleteBtn.addEventListener("click", deleteComment)
    }

    for (const editBtn of editBtns) {
        editBtn.addEventListener("click", editComment);
    }

    for (const dialogBtn of dialogBtns) {
        dialogBtn.addEventListener("click", deleteCommentFunc)
    }

    for (const updateCommentBtn of updateCommentBtns) {
        updateCommentBtn.addEventListener("click", updateComment)
    }

    for (const replyBtn of replyBtns) {
        replyBtn.addEventListener("click", bindCevapYazBtns)
    }

    // for (const reply of replyComments) {
    //     reply.addEventListener("click", bindreplyComment)
    // }

    newCommentForm.addEventListener("submit", handleNewCommentForm);

    for (const cevapForm of cevapForms) {
        cevapForm.addEventListener("submit", handleCevap)
    }
}

function bindCevapYazBtns(e){
    e.preventDefault();
    const cevapDiv = this.parentElement.parentElement.parentElement.nextElementSibling;
    cevapDiv.style.display = "flex";
}

// function bindreplyComment(e){
//     e.preventDefault();
//     console.log(this.dataset.commentid);
// }


function searchCommentById(id){
    let searchedComment = null;
    for (const comment of data.comments) {
        if(comment.id === id){
            searchedComment = comment;
            break;
        }
    }
    return searchedComment;
}

function rateCommentUp(e){
    e.preventDefault();
    const commentId = parseInt(this.dataset.commentid);
    const comment = searchCommentById(commentId);
    comment.score++

    renderComments();
}

function rateCommentDown(e){
    e.preventDefault();
    const commentId = parseInt(this.dataset.commentid);
    const comment = searchCommentById(commentId);
    comment.score--

    renderComments();
}

const replyContainer = document.querySelector(".replyContainer");

function renderComments(){

    commentsContainer.innerHTML = "";
    for (const comment of data.comments) {
        commentsContainer.innerHTML += createCommentItem(comment);
        replyContainer.innerHTML += createReplyItem(comment);
    }

    bindEvents();
}

// function renderReplies(){
//     const replyContainer = document.querySelectorAll(".replyContainer");
//     replyContainer.innerHTML= "";
//     for (const reply of object) {
        
//     }
// }

function init(){
    renderComments();
}


init();


if (!localStorage.getItem("comments")) {
    localStorage.setItem("comments", JSON.stringify(data.comments));
}

function localStorageExists(){
    if (localStorage.getItem("comments")) {
        data.comments = JSON.parse(localStorage.getItem("comments"));
    }
    return data.comments;
}

function saveToLocalStorage(object){{
    const comments = localStorageExists();
    comments.push(object);
    localStorage.setItem("comments", JSON.stringify(comments));
}}