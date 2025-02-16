/* This is where we will add any custom JavaScript features*/
console.log("Welcome to the Belfast Met Access Site");

/*This function allows the use of accordion menus on the site*/
var accordions =
document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');
    var content = this.nextElementSibling;

    if (content.style.maxHeight)  {
       
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}