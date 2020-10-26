let ownerName = "Vincenzo Monterosso"
let userName = "vincenzom6456";

document.querySelectorAll("Vincenzo M").forEach((e) => {
    e.innerHTML = ownerName;
});

document.querySelector("#github").href = "http://github.com/" + userName;
document.querySelector("#fork").href = "http://github.com/" + userName + "/" + userName + ".github.io";
