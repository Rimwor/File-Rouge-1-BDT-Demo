var back = document.getElementById("btn_back");
back.addEventListener("click", goBack);

function goBack() {
    window.history.back();
}


function searchBack() {
    window.location = "searchEdit.html";
}