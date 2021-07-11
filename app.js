//using selectors inside the element
const question = document.querySelectorAll(".question");
// console.log(question);
question.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    question.classList.toggle("show-text");
  });
});

// question.forEach(function (ques) {
//   ques.classList.toggle("show-text");
// });

// traversing the dom
// const questionBtn = document.querySelectorAll(".question-btn");

// questionBtn.forEach(function (questionBtn) {
//   questionBtn.addEventListener("click", function (e) {
//     let question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
