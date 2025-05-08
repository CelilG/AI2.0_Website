$(".nav-icon").click(function(){
    $(".nav-links").toggleClass("responsive");
    return false;
});

const addName = document.querySelector("#name");
const addLastName = document.querySelector("#last-name");
const addEmail = document.querySelector("#email");
const addTel = document.querySelector("#phone");
const addMessage = document.querySelector("#message");

const add = document.querySelector("#btn-send");
add.addEventListener("click",addItem);
function addItem(e) {
    sessionStorage.setItem([addName.value,addLastName.value],[addEmail.value,addTel.value,addMessage.value]);
}