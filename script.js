var newItemCounter = 1;
var list = document.getElementById("list");
var btn = document.getElementById("btn");
var headline = document.getElementById("new_item_header");
var listItems = document.getElementById("list").getElementsByTagName("li");

// // loop through the listItems collection and adds an addEventListener for each item
// for (i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener("click", activateItem);
// }

// event delegation = active event handling for elements that might exist in the future 
// add one single event listener to the parent <ul> element
list.addEventListener("click", activateItem);

function activateItem(e) {
    if (e.target.nodeName == "LI") {
        headline.innerHTML = e.target.innerHTML;

        // remove class of active from all sibling elements
        for (i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("active");
        }
        // add class of active to change the css
        e.target.classList.add("active");
    }
}

btn.addEventListener("click", createNewItem);

function createNewItem() {
    list.innerHTML += "<li>new string " + `${newItemCounter}` + "</li>";
    newItemCounter++;
}