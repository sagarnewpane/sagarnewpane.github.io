let readMoreBtn = document.querySelectorAll(".name-desc span");
let moreText = document.querySelectorAll(".more");
for(i = 0;i<readMoreBtn.length;i++){
    readMoreBtn[i].addEventListener("click", function() {
        if (moreText[i].style.display === "none") {
          moreText[i].style.display = "block";
          // readMoreBtn.innerHTML = "Read Less";
        } else {
          moreText[i].style.display = "none";
          readMoreBtn[i].innerHTML = "Read More";
        }
      });
}

// readMoreBtn.addEventListener("click", function() {
//   if (moreText.style.display === "none") {
//     moreText.style.display = "block";
//     // readMoreBtn.innerHTML = "Read Less";
//   } else {
//     moreText.style.display = "none";
//     readMoreBtn.innerHTML = "Read More";
//   }
// });

console.log(moreText[0])