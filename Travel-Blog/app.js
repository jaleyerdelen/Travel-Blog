const btns = document.querySelectorAll(".button");
const text = document.querySelector(".text");
const articles = document.querySelectorAll (".content");

text.addEventListener("click", function(e){
   const id = e.target.dataset.id;
   if (id) {
       btns.forEach(function(button){
           button.classList.remove("active");
           e.target.classList.add("active");
       });
       articles.forEach(function(content){
           content.classList.remove("active");
       })
       const element = document.getElementById(id)
       element.classList.add("active");
   }
})