export default function (array, className) {
    var menu = document.createElement("ul");
    menu.className = className;
    var listItems = '';
    array.forEach(function(item) {
    listItems += '<ul><li>' + item + '</li></ul>';
    });
    menu.innerHTML = listItems;
    return menu;
    }