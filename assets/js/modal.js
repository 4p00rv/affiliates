// test popup
var body = document.body;
window.onload = function() {
   modal.style.display = "block";
   body.classList.add("lock");
};
var modal = document.getElementById('jpModal');
var acc = document.getElementById("confirm");
acc.onclick = function() {
    modal.style.display = "none";
    body.classList.remove("lock");
}