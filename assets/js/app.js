function togglemenu() {
  const threedots = document.getElementById("more");
  const morecont = document.getElementById("more-content");

  if (morecont.classList.contains("opened")) {
    morecont.classList.remove("opened");
    morecont.style.height = "0";
  } else {
    morecont.classList.add("opened");
    morecont.style.height = "180px";
  }
}

function togglecontent() {
  const droparrow = document.getElementById("droparrow");
  const moreimgcont = document.getElementById("more-img-container");

  if (moreimgcont.classList.contains("opened")) {
    moreimgcont.classList.remove("opened");
    moreimgcont.style.height = "0";
  } else {
    moreimgcont.classList.add("opened");
    moreimgcont.style.height = "1500px";
  }
}

// const togglemenu = () => { }
