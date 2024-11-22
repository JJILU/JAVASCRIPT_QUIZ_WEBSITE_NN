const correctAnwsers = ['B','A','A','A','B','B'];

const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');

const userScore = document.querySelector('.result span');
console.log(userScore);



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

  
  // show result on page

  // result.classList.remove('d-none');
  // const roundedScore = Math.round(score);
  // userScore.textContent = `${roundedScore}%`;
  // or
  scrollTo(0,0);
  const roundedScore = Math.round(score);
  // result.querySelector('span').textContent = `${roundedScore}%`;
  result.classList.remove('d-none');

  // animating the score
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if(output === roundedScore){
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10)
  
});



