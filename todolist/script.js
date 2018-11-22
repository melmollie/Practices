let editToggleButton = document.getElementById("editToggleButton");
let resetButton = document.getElementById("resetButton");

editToggleButton.addEventListener('click', toggleEditingContent, false);
resetButton.addEventListener('click', resetContent, false);

document.addEventListener("DOMContentLoaded", restoreContents, false);

function saveContents() {
    let listOfThingsToDo = document.getElementById("myList").innerHTML;
    localStorage["myToDoList"] = listOfThingsToDo;
}

function restoreContents() {
    let mySavedList = localStorage["myToDoList"];

    if (mySavedList != undefined) {
        document.getElementById("myList").innerHTML = mySavedList;
    }
}

function toggleEditingContent(e) {
    let myList = document.getElementById("myList");

    if (myList.contentEditable == "false") {
        myList.setAttribute("contentEditable", true);

        editToggleButton.value = "Save";

        myList.focus();
    } else {
        myList.setAttribute("contentEditable", false);

        editToggleButton.value = "Edit";
        saveContents();
    }
}

function resetContent(e) {
    localStorage.clear();

    window.location.reload();
}