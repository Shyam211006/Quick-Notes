

var box = document.querySelector(".pop")
var pop = document.querySelector(".popup-over")
var btn = document.querySelector(".plus")
btn.addEventListener("click",function(){
    box.style.display = "block"
    pop.style.display = "block"

})

var container = document.querySelector(".potter")
var title = document.getElementById("title")
var author = document.getElementById("author")
var count = document.getElementById("description")
var addtive = document.getElementById("addition")

addtive.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","harry")
    div.innerHTML=`<h2>${title.value}</h2> <h4>${author.value}</h4 <p>${count.value}</p> <button onclick="def(event)">delete</button>`
    container.append(div)
    box.style.display = "none"
    pop.style.display = "none"


})
function def(event){
    event.target.parentElement.remove()

}
