/* MENU-ICON */
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

/* END MENU-ICON */

/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
/* DARK/LIGHT MODE */
/* const icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("DARK-THEME");
  if (document.body.classList.contains("DARK-THEME")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
};
 */
/* <<<<<<<<<<<<<>>>>>>>>>>>>>><<<<<<<<<<<<<>>>>>>>>>>> */

/* <<<<<<<<<<<<<>>>>>>>>>>>>>><<<<<<<<<<<<<>>>>>>>>>>> */
/* 
const icon = document.getElementById("icon");
const body = document.body;
const phoneNumber = document.getElementById("phone-color");

// Retrieve the selected theme from local storage
const selectedTheme = localStorage.getItem("selectedTheme");
if (selectedTheme) {
  body.classList.add(selectedTheme);
  phoneNumber.classList.add(selectedTheme);
  if (selectedTheme === "DARK-THEME") {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
}

icon.onclick = function () {
  const isDarkTheme = body.classList.contains("DARK-THEME");
  body.classList.toggle("DARK-THEME");
  phoneNumber.classList.toggle("PHONE-NUMBER");

  if (isDarkTheme) {
    icon.src = "images/moon.png";
    localStorage.removeItem("selectedTheme"); // Clear the selected theme from local storage
  } else {
    icon.src = "images/sun.png";
    localStorage.setItem("selectedTheme", "DARK-THEME");
  }
};
 */
/* <<<<<<<<<<<<<>>>>>>>>>>>>>><<<<<<<<<<<<<>>>>>>>>>>> */
const icon = document.getElementById("icon");
const body = document.body;

// Retrieve the selected theme from local storage
const selectedTheme = localStorage.getItem("selectedTheme");
if (selectedTheme) {
  body.classList.add(selectedTheme);
  if (selectedTheme === "DARK-THEME") {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
}

icon.onclick = function () {
  body.classList.toggle("DARK-THEME");
  if (body.classList.contains("DARK-THEME")) {
    icon.src = "images/sun.png";
    localStorage.setItem("selectedTheme", "DARK-THEME");
  } else {
    icon.src = "images/moon.png";
    localStorage.setItem("selectedTheme", ""); // Clear the selected theme from local storage
  }
};

/* END DARK/LIGHT MODE */

/* VISITED ADDRESS */
document
  .getElementsByClassName("visited-summary")
  .addEventListener("click", function () {
    this.classList.add("visited");
  });
/* END ADDRESS */
