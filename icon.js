/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
/* Toggle between adding and removing the "responsive" class to navbar when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("mynavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
  