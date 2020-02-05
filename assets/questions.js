var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "Intervals are set in ____.",
    choices: ["Years", "Seconds", "MilliSeconds", "PikaSeconds"],
    answer: "MilliSeconds"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
 
  {
    title: " Objects in JavaScript begin with ____.",
    choices: ["$", ".", "#", "Uppercase Letters"],
    answer: "Uppercase Letters"
  },
 
  {
    title: "A callback is ____.",
    choices: ["when an actor gets a gig", "when a function takes a function as in input", "when you call a function", "a synchronous programming style"],
    answer: "when a function takes a function as in input"
  },
 
  {
    title: " What is the correct Javascript Syntax to change the text of this HTML element? < p id = 'test'> I'm testing you! </p>",
    choices: ["localStorage.match('test').textcontent('this is how')", "document.getElementByName('Test').innerHTML('No like this')", "document.getElementById('test').innerHTML = 'this chose this'", "$('test').attr('innerHTML', 'this)"],
    answer: "document.getElementById('test').innerHTML = 'this chose this'"
  }
 
];
   
var i = 0;
var totaltime = 15*questions.length;
var elapsedtime = 0;
var score = 0;
var lastquestionindex = questions.length -1;
var currentanswer ='';
var currentquestionindex = 0;
var initials = $('#initials').val();
  
function question(){ 
  if(i <= lastquestionindex){
   var title = questions[i].title;
   currentanswer = questions[i].answer
   currentquestionindex = i;
   $('#q').text(title);
   $('#a').text(questions[i].choices[0]) 
   $('#b').text(questions[i].choices[1]) 
   $('#c').text(questions[i].choices[2]) 
   $('#d').text(questions[i].choices[3])
  //  console.log(i)
}};


function ask(){
  console.log(i)
         $('#start').css('display', 'none');
         $('#input').css('display', 'none');
         $('.time').css('display', 'block');
         $('#time').text(totaltime)
         $('#question').css('display', 'block');
         question()
         timer()
         check()
             };
  
  function timer(){
  var time = setInterval(
    
    function() {
      if(elapsedtime < 15 && totaltime > 0 || i <= lastquestionindex)
      {
        elapsedtime++
        totaltime --
       $('#time').text(totaltime)
       $('#score').text(score)
    //  console.log(elapsedtime)
    } if(elapsedtime === 15){
      i++
      question()
      elapsedtime = 0
    }
    else
    { if(totaltime === 0 || i > lastquestionindex){
      input()
      clearInterval(time)
    }}},1000)};

    function input(){
      score = score + totaltime
      $('#start').css('display', 'none');
      $('#input').css('display', 'block');
      $('.time').css('display', 'none');
      $('#question').css('display', 'none');
      var puntos = $('<h1>')
      puntos.text('Your final score is ' + score)
      $('#score1').append(puntos)
     };
    

function check(){
 
  $('#choices').on('click', function(e){
    var var1 = event.target.id;
    var choice = questions[currentquestionindex].choices[var1];
    // console.log(event);
    // console.log(var1);
    // console.log(choice);
    // console.log(currentanswer);
    if(choice === currentanswer){
      score = score + 10 
      $('#score').text(score)
      // console.log('correct')
      localStorage.setItem('score', score)
     
      elapsedtime = 0
      i++
      question()
    } else if (choice !== currentanswer){
      // console.log('nope')
      totaltime = totaltime - 10;
      elapsedtime = 0
      i++
      question()
    }
  })};


  
  $('#savebtn').on('click', function(event){
    event.preventDefault();
console.log('working')
var thisScore = [ { name: initials, score: score } ]; 
var storedScores = JSON.parse(localStorage.getItem("highScores")); 

if (storedScores !== null) { 
storedScores.push(thisScore[0]); 
} else {
storedScores = thisScore;
};

localStorage.setItem("highScores", JSON.stringify(storedScores));
    });
