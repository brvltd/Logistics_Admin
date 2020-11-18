function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("open_btn").style.display="none";
  document.getElementById("open_btn").style.transition="all 0.3s ease";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("open_btn").style.display="block";
  document.getElementById("open_btn").style.transition="all 0.3s ease";
}