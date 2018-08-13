var headline = document.getElementById("new_item_header");
var listItems = document.getElementById("list").getElementsByTagName("li");

for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", activateItem);
}

function activateItem() {
    // alert("click detected");
    headline.innerHTML = this.innerHTML;
}