var counterContainer = document.querySelector(".website-counter");
var visitCount = localStorage.getItem("page_view_info5");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view_info5", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view_info5", 1);
}
counterContainer.innerHTML = visitCount + "&nbsp;volte";