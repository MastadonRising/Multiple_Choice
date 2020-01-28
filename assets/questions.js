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

  
function question(){ 
  if(i <= lastquestionindex){
   var title = questions[i].title;
   $('#q').text(title);
   $('#a').text(questions[i].choices[0]) 
   $('#b').text(questions[i].choices[1]) 
   $('#c').text(questions[i].choices[2]) 
   $('#d').text(questions[i].choices[3])
   } else {
 input();}
};

function con(){
  question()
  check()
  i++
   };
function ask(){
  console.log('step1')
         $('#start').css('display', 'none');
         $('#input').css('display', 'none');
         $('.time').css('display', 'block');
         $('#time').text(totaltime)
         $('#question').css('display', 'block');
         question()
         setInterval(con, 15000)
     };
  
    function input(){
    $('#start').css('display', 'none');
    $('#input').css('display', 'block');
    $('.time').css('display', 'none');
    $('#question').css('display', 'none');
   };

function check(){
 var time = setInterval(function() {
   if(elapsedtime < 15){elapsedtime++
    totaltime --
    $('#time').text(totaltime)
  console.log(elapsedtime)}
   else{clearInterval(time)
  elapsedtime = 0}
 
 }, 1000);
}
 








   