// Resume functionality
document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scrolling for back to top link if needed
  const scrollToTop = document.querySelector(".scroll-to-top");
  if (scrollToTop) {
    scrollToTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Add print functionality if needed
  const printButton = document.querySelector(".print-resume");
  if (printButton) {
    printButton.addEventListener("click", function () {
      window.print();
    });
  }
});
