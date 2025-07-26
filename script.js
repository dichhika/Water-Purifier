// toggle in navbar
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// faq section
// Select all question elements
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling; // the .answer div
    const icon = question.querySelector("i"); // the arrow icon

    // Toggle visibility of the answer
    answer.classList.toggle("hidden");

    // Toggle arrow rotation
    icon.classList.toggle("rotate-180");
  });
});
