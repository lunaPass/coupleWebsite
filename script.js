/*import Sound from "./JS/sound.js"

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');  
let mountains_behind = document.getElementById('mountains_behind');
let text =document.getElementById('text');
let bnt = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');   

window.addEventListener('scroll', function(){
   let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
  
  })

console.log("oii chegeui")*/
/*animation header*/ 




let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.getElementById('header')

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 1.05 + 'px';
  mountains_behind.style.top = value * 0.05 + 'px';
  mountains_front.style.top = value * 0 + 'px';
  text.style.marginRight = value * 4 + 'px';
  text.style.marginTop = value * 0.5 + 'px';
  btn.style.marginTop = value * 0.9 + 'px';
 /* header.style.Top = value * 1 + 'px';*/
})

const Play = document.querySelector('.play')
 const Pause = document.querySelector('.pause')






  


/*Quiz*/

const quizData = [
  {
    question: "Qual a data da primeira vez que nos vimos?",
    a: "7 Julho",
    b:"9 Julho",
    c: "11 Julho",
    d:"11 Junho",
    correct:"b",
 }
 
 ,{
  question: "Qual o presente que lhe dei no primeiro mês de namoro?",
    a: "QRcolde com Músicas",
    b:"Café da Manhã",
    c: "Camisa Preta",
    d:"Bolo com Vinho",
    correct:"b",
    

  }

  ,{
  question: "Qual o primeiro presente que você me deu?",
    a: "Perfume",
    b:"Mesa Digitalizadora",
    c: "Colar",
    d:"Lhama",
    correct:"a",
    

  }
  ,{
  question: "Qual pra onde foi nossa primeira viajem juntos?",
    a: "Hotel",
    b:"Cada de Praia",
    c: "Praia",
    d:"Jaboatão dos Guararapes",
    correct:"c",
    

  }
];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]
  
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d

}
function deselectAnswers(){
  answerEls.forEach(answerEl => answerEl.Checked = false)
}

function getSelected(){
  let answer
  answerEls.forEach(answerEl => {
    if(answerEl.checked){
      answer =  answerEl.id
    }
  })
  return answer
}

submitBtn.addEventListener('click', () =>{
  const answer = getSelected()
  if(answer) {
    if( answer === quizData[currentQuiz].correct){
      score++
    }
    currentQuiz++

    if(currentQuiz <  quizData.length){
      loadQuiz()
    } else{
      quiz.innerHTML = `
      <h2>Sua resposta ${score}/${quizData.length} questão corretas</h2>

      <submit onclick = "location.reload()">Reload</submit>
      `
    }

  }

})

/*photo*/
var counter = 1;
      setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 4){
          counter = 1;
        }
      }, 5000);
      

      /*spner*/
      let containerSpin = document.querySelector(".containerSpin");
      let spin = document.getElementById("spin");
      let number = Math.ceil(Math.random() * 1000);

spin.onclick = function () {
	containerSpin.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);
} 