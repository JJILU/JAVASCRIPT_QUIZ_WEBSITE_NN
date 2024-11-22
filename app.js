const correctAnwsers = ['B','A','A','A','B','B'];

const form = document.querySelector('.quiz-form');

// console.log(form.q1.value, form.q2.value, form.q3.value,form.q4.value, form.q5.value, form.q6.value);


form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const pointsPerQuestion = 100 / correctAnwsers.length

  let userAnswers = [form.q1.value, form.q2.value, form.q3.value,form.q4.value, form.q5.value, form.q6.value];

  // check answers
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnwsers[index]) {
       score += pointsPerQuestion;
    }
  });

  console.log(Math.round(score));
});