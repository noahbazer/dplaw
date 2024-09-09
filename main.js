window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('header-scroll');
  } else {
    header.classList.remove('header-scroll');
  }
});

document
  .getElementById('dropdownLink')
  .addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation(); // Stop the click event from propagating to the window
    var dropdownMenu = document.getElementById('dropdownMenu');
    var arrowIcon = this.querySelector('.fa-angle-down, .fa-angle-up');
    if (dropdownMenu.classList.contains('show')) {
      dropdownMenu.classList.remove('show');
      arrowIcon.classList.remove('fa-angle-up');
      arrowIcon.classList.add('fa-angle-down');
    } else {
      dropdownMenu.classList.add('show');
      arrowIcon.classList.remove('fa-angle-down');
      arrowIcon.classList.add('fa-angle-up');
    }
  });

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('#dropdownLink')) {
    closeDropdown();
  }
};

// Close the dropdown if the user scrolls
window.onscroll = function () {
  closeDropdown();
};

function closeDropdown() {
  var dropdowns = document.getElementsByClassName('dropdown-content');
  for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
      var arrowIcon = document
        .getElementById('dropdownLink')
        .querySelector('.fa-angle-up');
      if (arrowIcon) {
        arrowIcon.classList.remove('fa-angle-up');
        arrowIcon.classList.add('fa-angle-down');
      }
    }
  }
}
