// const data = {
//     "currentUser": {
//       "image": { 
//         "png": "./images/avatars/image-juliusomo.png",
//         "webp": "./images/avatars/image-juliusomo.webp"
//       },
//       "username": "juliusomo"
//     },
//     "comments": [
//       {
//         "id": 1,
//         "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
//         "createdAt": "1 month ago",
//         "score": 12,
//         "user": {
//           "image": { 
//             "png": "./images/avatars/image-amyrobson.png",
//             "webp": "./images/avatars/image-amyrobson.webp"
//           },
//           "username": "amyrobson"
//         },
//         "replies": []
//       },
//       {
//         "id": 2,
//         "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
//         "createdAt": "2 weeks ago",
//         "score": 5,
//         "user": {
//           "image": { 
//             "png": "./images/avatars/image-maxblagun.png",
//             "webp": "./images/avatars/image-maxblagun.webp"
//           },
//           "username": "maxblagun"
//         },
//         "replies": [
//           {
//             "id": 3,
//             "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
//             "createdAt": "1 week ago",
//             "score": 4,
//             "replyingTo": "maxblagun",
//             "user": {
//               "image": { 
//                 "png": "./images/avatars/image-ramsesmiron.png",
//                 "webp": "./images/avatars/image-ramsesmiron.webp"
//               },
//               "username": "ramsesmiron"
//             }
//           },
//           {
//             "id": 4,
//             "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
//             "createdAt": "2 days ago",
//             "score": 2,
//             "replyingTo": "ramsesmiron",
//             "user": {
//               "image": { 
//                 "png": "./images/avatars/image-juliusomo.png",
//                 "webp": "./images/avatars/image-juliusomo.webp"
//               },
//               "username": "juliusomo"
//             }
//           }
//         ]
//       }
//     ]
// };

// const commentsContainer = document.querySelector('.comments');

// function createCommentItem(id, content, createdAt, score, username) {

//     // fonkiyon icinde de parametre olarak comment yaziyor.
//     // const {id, content, createdAt, score, username} = comment;
//     // return `<p>${content}</p>`;
//     // seklinde destruct yontemi de kullanilabilir.

//     return `<div class="comment">
//             <div class="comment-rating">
//                 <a href="#" class="comment-rating-up" data-commentid="${id}">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
//                         <path d="M6.33018 10.896C6.46674 10.896 6.58468 10.8463 6.684 10.747C6.78331 10.6477 6.83297 10.5298 6.83297 10.3932V7.004H10.1477C10.2842 7.004 10.4022 6.95434 10.5015 6.85503C10.6008 6.75571 10.6505 6.63777 10.6505 6.50121V5.27216C10.6505 5.1356 10.6008 5.01766 10.5015 4.91834C10.4022 4.81903 10.2842 4.76937 10.1477 4.76937H6.83297V1.39879C6.83297 1.26223 6.78331 1.14429 6.684 1.04497C6.58468 0.945655 6.46674 0.895996 6.33018 0.895996H4.91491C4.77835 0.895996 4.66041 0.945655 4.56109 1.04497C4.46177 1.14429 4.41212 1.26223 4.41212 1.39879V4.76937H1.07878C0.942221 4.76937 0.824282 4.81903 0.724965 4.91834C0.625647 5.01766 0.575989 5.1356 0.575989 5.27216V6.50121C0.575989 6.63777 0.625647 6.75571 0.724965 6.85503C0.824282 6.95434 0.942221 7.004 1.07878 7.004H4.41212V10.3932C4.41212 10.5298 4.46177 10.6477 4.56109 10.747C4.66041 10.8463 4.77835 10.896 4.91491 10.896H6.33018Z" fill="#C5C6EF"/>
//                     </svg>
//                 </a>
//                 <strong>${score}</strong>
//                 <a href="#" class="comment-rating-down" data-commentid="${id}">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="10" height="3" viewBox="0 0 10 3" fill="none">
//                         <path d="M9.25591 2.66C9.46018 2.66 9.63659 2.60445 9.78515 2.49334C9.93371 2.38223 10.008 2.25028 10.008 2.0975V0.722504C10.008 0.569726 9.93371 0.437781 9.78515 0.32667C9.63659 0.215559 9.46018 0.160004 9.25591 0.160004H0.760085C0.555814 0.160004 0.379398 0.215559 0.230837 0.32667C0.082276 0.437781 0.00799561 0.569726 0.00799561 0.722504V2.0975C0.00799561 2.25028 0.082276 2.38223 0.230837 2.49334C0.379398 2.60445 0.555814 2.66 0.760085 2.66H9.25591Z" fill="#C5C6EF"/>
//                     </svg>
//                 </a>
//             </div>
//             <div class="comment-body">
//                 <div class="comment-header">
//                     <div class="profile-info">
//                         <img src="https://fastly.picsum.photos/id/237/32/32.jpg?hmac=vxNJVLrKJUNQMLJUr60NiDnP_-SYj6ZZHFAefFiM2i4" width="32" height="32">
//                         <strong>${username}</strong>
//                         <span>${createdAt}</span>
//                     </div>
//                     <a href="#" class="reply-btn" data-commentid="${id}">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
//                             <path d="M0.227189 4.31583L5.0398 0.159982C5.46106 -0.203822 6.125 0.0915222 6.125 0.656646V2.8456C10.5172 2.89589 14 3.77618 14 7.93861C14 9.61864 12.9177 11.283 11.7214 12.1532C11.348 12.4247 10.816 12.0839 10.9536 11.6437C12.1935 7.67857 10.3655 6.62588 6.125 6.56484V8.96878C6.125 9.5348 5.46056 9.82883 5.0398 9.46545L0.227189 5.30918C-0.0755195 5.04772 -0.0759395 4.57766 0.227189 4.31583Z" fill="#5357B6"/>
//                         </svg> Cevap Yaz</a>
//                 </div>
//                 <p>${content}</p>
//             </div>
//         </div>`;
// }

// function renderComments() {
//     commentsContainer.innerHTML = '';

//     for (const comment of data.comments) {
//         commentsContainer.innerHTML += createCommentItem(comment.id, comment.content, comment.createdAt, comment.score, comment.user.username)
//     }

//     bindEvents();
// }

// function searchCommentById(id) {
//     let searchedComment = null;
//     for(const comment of data.comments) {
//         if(comment.id === id) {
//             searchedComment = comment;
//             break;
//         }
//     }

//     return searchedComment;
// }

// function rateCommentUp(e) {
//     e.preventDefault();
//     const commentId = Number(this.dataset.commentid);
//     const comment = searchCommentById(commentId);
//     comment.score++;

//     renderComments();
// }

// function rateCommentDown(e) {
//     e.preventDefault();
//     const commentId = Number(this.dataset.commentid);
//     const comment = searchCommentById(commentId);
//     comment.score--;

//     renderComments();
// }

// function handleNewCommentForm(e) {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const formObj = Object.fromEntries(formData);

//     // document.querySelector('textarea[name="content"]').value
//     formObj.id = Math.floor(Math.random() * 10000);
//     formObj.createdAt = 'Now';
//     formObj.score = 0;
//     formObj.replies = [];
//     formObj.user = data.currentUser;

//     data.comments.push(formObj);

//     renderComments();

//     // tum form elemanlarinin icini temizler
//     e.target.reset();

// }

// function bindEvents() {
//     const newCommentForm = document.querySelector('.new-comment form');
//     const ratingUpBtns = document.querySelectorAll('.comment-rating-up');
//     const ratingDownBtns = document.querySelectorAll('.comment-rating-down');
//     const replyBtns = document.querySelectorAll('.reply-btn');

//     for(const btn of ratingUpBtns) {
//         btn.addEventListener('click', rateCommentUp);
//     }

//     for(const btn of ratingDownBtns) {
//         btn.addEventListener('click', rateCommentDown);
//     }

//     newCommentForm.addEventListener('submit', handleNewCommentForm);
// }

// function init() {
//     renderComments();
    
// }

// init();


let data = {
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

const commentsContainer = document.querySelector(".comments");

if(localStorage.commentLocalStorage){
  data.comments = JSON.parse(localStorage.getItem("commentLocalStorage"));
}
else {
  data.comments = [];
}


function createCommentItem(comment){
  const { id, content, createdAt, score, user } = comment;
  // commentLocalStorage = [];
  //data.comments.push(localStorage.setItem("commentLocalStorage",JSON.stringify(data.comments)));
  
  return `
  
  <div class="comment">
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
                  <span class = "youIcon">${comment.user.id === data.currentUser.id ? `you` : ``}</span>
                  <span>${createdAt}</span>
              </div>
              ${comment.user.id === data.currentUser.id ? `<div><a class="delete-btn" href="#" data-commentid="${id}">Sil</a>
                                                           <a class="edit-btn" href="#" data-commentid="${id}">Düzenle</a></div>`
                                                        : `<a class="reply-btn" href="#" data-commentid="${id}">Cevap yaz</a>`}
          </div>
          <p contenteditable = "false">${content}</p>
      </div>
  </div>
  `
}


function handleNewCommentForm(e){
  e.preventDefault();
  const formData = new FormData(e.target);
  const formObj = Object.fromEntries(formData);
  formObj.createdAt = "now";
  formObj.score = 0;
  formObj.replies = [];
  formObj.user = data.currentUser;
  // formObj.id = Math.floor(Math.random() * 10000);
  formObj.id = createUniqueId();

  data.comments.push(formObj);
  localStorage.setItem("commentLocalStorage", JSON.stringify(data.comments));
  renderComments();

  e.target.reset();
}

function createUniqueId(){
  let id = 1;
  for (const comment of data.comments) {
      if (comment.id === id) {
        id += 1;
      }
  }
  return id;
}

function bindEvents(){
  const newCommentForm = document.querySelector(".new-comment form");
  const ratingUpBtns = document.querySelectorAll(".comment-rating-up");
  const ratingDownBtns = document.querySelectorAll(".comment-rating-down");
  const deleteBtns = document.querySelectorAll(".delete-btn");
  const editBtns = document.querySelectorAll(".edit-btn");
  const updateBtns = document.querySelectorAll(".update-btn");
  const modalBtns = document.querySelectorAll(".modal-btn");
  


  for (const ratingUpBtn of ratingUpBtns) {
      ratingUpBtn.addEventListener("click", rateCommentUp)
  }

  for (const ratingDownBtn of ratingDownBtns) {
      ratingDownBtn.addEventListener("click", rateCommentDown)
  }

  newCommentForm.addEventListener("submit", handleNewCommentForm);

  for (const deleteBtn of deleteBtns) {
      deleteBtn.addEventListener("click", bindDeleteBtns);
  }

  for (const editBtn of editBtns) {
      editBtn.addEventListener("click", editComment);
  }

  for (const updateBtn of updateBtns) {
      updateBtn.addEventListener("click", bindUpdate);
  }

  for (const modalBtn of modalBtns) {
      modalBtn.addEventListener("click", deleteThisComment);
  }
  
}


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


function renderComments(){
  
  commentsContainer.innerHTML = "";
  for (const comment of data.comments) {
      commentsContainer.innerHTML += createCommentItem(comment);
      // localStorage.commentLocalStorage = JSON.stringify(commentLocalStorage);
 
  }
  bindEvents();
}

const dialog = document.querySelector("dialog");
let toDeleteComment = null;

function bindDeleteBtns(e){
  e.preventDefault();
  const commentId = parseInt(this.dataset.commentid);

  const comment = searchCommentById(commentId);
  toDeleteComment = comment;
  // // let index = commentId-1;
  dialog.showModal();
  bindEvents();
  // for (const btn of modalBtns) {
  //   btn.addEventListener("click", deleteThisComment(e, comment))
  // }
   
}

function deleteThisComment(e){
  e.preventDefault();
  const commentIndex = data.comments.indexOf(toDeleteComment);
  if (e.target.id == "delete") {
        // //console.log(data.comments.indexOf(comment));
        // // console.log(commentId);
        // if (data.comments.indexOf(comment) !== -1) {
        //   data.comments.splice(data.comments.indexOf(comment), 1);
        // }
        data.comments.splice(commentIndex, 1);
        renderComments();
        console.log(data.comments);
        
      }
      dialog.close();
}


function editComment(e){
  e.preventDefault();
  //const updateBtns = document.querySelectorAll(".update-btn");
  const commentId = parseInt(this.dataset.commentid);
  // console.log(this.parentElement.parentElement.nextElementSibling.innerHTML);
  //this.parentElement.parentElement.nextElementSibling.style.display = "none";
  // const newComment = prompt("ne ile değiştirmek istersin?");

  const editedComment = data.comments.find(comment => comment.id === commentId);
  // editedComment.content = `${data.comments[commentId].content}`;
  editedComment.content = "";
  editedComment.content = `<textarea class="textarea" data-commentid="${commentId}"></textarea>
                          <button class = "update-btn" data-commentid="${commentId}">Güncelle</button>`;
                          
  renderComments();

  // this.parentElement.parentElement.nextElementSibling.setAttritubute(contentEditable, true);
}

function bindUpdate(){
  console.log(this);
    const commentId = Number(this.dataset.commentid);
    const textareas = document.querySelectorAll(".textarea");
    const editedComment = data.comments.find(comment => comment.id === commentId);
    // console.log(comment);
    for (const textarea of textareas) {
      if (textarea.dataset.commentid == commentId) {
        editedComment.content = `${textarea.value}`;
        console.log(editedComment.content);
        
        //textarea.style.display ="none";
      }
    }
    //this.style.display = "none";
    renderComments();
}


function init(){
  renderComments();
}


init();


// verileri localstoragea ekle **
// hem var olanları hem de 
// cevap yaza bastığımızda kullanıcı adı + mesaj şeklide ekrana bas
// textarea icindeki veriler bos gelmemeli
// indent yaparak biraz daha icerde olustur ?

