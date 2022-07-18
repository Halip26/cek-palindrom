var input = document.getElementById("myInput");
const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");
let filterInput;

checkBtn.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput) {
        return infoTxt.innerHTML = `Bukan, <span>"${txtInput.value}"</span> bukan sebuah palindrom!`;
    }
    infoTxt.innerHTML = `Iya, <span>"${txtInput.value}"</span> adalah sebuah palindrom!`;
});

txtInput.addEventListener("keyup", () => {
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
});

//uppercase input
document.getElementById("myInput").addEventListener("keyup", myFunction);

function myFunction() {
  var x = document.getElementById("myInput");
  x.value = x.value.toUpperCase();
};

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});