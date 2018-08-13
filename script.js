var newItemCounter = 1;
var list = document.getElementById("list");
var btn = document.getElementById("btn");
var headline = document.getElementById("new_item_header");
var listItems = document.getElementById("list").getElementsByTagName("li");

for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", activateItem);
}

function activateItem() {
    headline.innerHTML = this.innerHTML;

    // remove class of active from all sibling elements

    for (i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
    }
    // add class of active to change the css
    this.classList.add("active");
}

btn.addEventListener("click", createNewItem);

function createNewItem() {
    list.innerHTML += "<li>new string " + `${newItemCounter}` + "</li>";
    newItemCounter++;
}