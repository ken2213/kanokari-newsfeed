function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var readMoreBtn = document.getElementById("readMoreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    readMoreBtn.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    readMoreBtn.innerHTML = "Read Less"
    moreText.style.display = "inline";
  }
}