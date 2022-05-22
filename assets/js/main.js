// Begin: Hiện - Ẩn Modal

const buyBtns = document.querySelectorAll(".js-buy-tickets");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");

for (var i = 0; i < buyBtns.length; i++) {
  const buyBtn = buyBtns[i];
  buyBtn.addEventListener("click", showModalTickets);
}

// Hiển thị giao diện modal khi click btn buy
function showModalTickets() {
  modal.classList.add("open");
}
// Ẩn giao diện modal khi click Close
function hideModalTickets() {
  modal.classList.remove("open");
}
modalClose.addEventListener("click", hideModalTickets);

// Không ẩn modal khi click trên layout chính
function hideModal(event) {
  event.stopPropagation();
}
modalContainer.addEventListener("click", hideModal);

// Ẩn modal khi Click vị trí bất kì ngoài layout chính
modal.addEventListener("click", hideModalTickets);

// End: Hiện - Ẩn Modal

// Begin: Ẩn - hiện mobile menu

var header = document.getElementById("header");
var heightHeader = header.clientHeight;
var menuMobile = document.getElementById("mobile-menu");

var hideMenuMobile = document.getElementById("content");

// Hiện - Ẩn menu khi Click icon menu mobile
menuMobile.onclick = function () {
  var isClosed = header.clientHeight;

  if (isClosed === heightHeader) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};
hideMenuMobile.onclick = function () {
  header.style.height = null;
};

// Ẩn menu khi click menu items
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];

  menuItem.onclick = function (event) {
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("sub-nav");

    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}

// End: Ẩn - Hiện mobile menu

// Slider

var slideIndex;

function showSlider() {
  var sliders = document.getElementsByClassName("slider");

  for (var i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }

  sliders[slideIndex].style.display = "block";

  //chuyển đến slide tiếp theo
  slideIndex++;

  //nếu đang ở slide cuối cùng thì chuyển về slide đầu
  if (slideIndex > sliders.length - 1) {
    slideIndex = 0;
  }

  //tự động chuyển đổi slide sau 5s
  setTimeout(showSlider, 5000);
}
//mặc định hiển thị slide đầu tiên
showSlider((slideIndex = 0));
