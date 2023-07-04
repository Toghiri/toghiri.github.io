var counterContainer = document.querySelector(".website-counter");
var visitCount = localStorage.getItem("page_view_home");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view_home", visitCount);
} 
else {
  visitCount = 1;
  localStorage.setItem("page_view_home", 1);
}

if(visitCount == 1){
  counterContainer.innerHTML = visitCount + "&nbsp;volta";
}
else{
  counterContainer.innerHTML = visitCount + "&nbsp;volte";
}