var correctAns = 0;
var incorrectAns = 0;
var unanswered = 0;

var questions = [
  {
    question: "1st question",
    answers: [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    question: "2nd question",
    answers: [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    question: "3rd question",
    answers: [
      "A",
      "B",
      "C",
      "D"
    ]
  },
];

var correctAnsArr = [
  "A",
  "B",
  "D"
];

// Display question and answers
for (var i = 0; i < questions.length; i++) {
  var question = questions[i];

  var sec = document.createElement("section");
  sec.className = "question test" + i;
  sec.innerHTML = question.question;
  document.getElementById("form").appendChild(sec);

  for (var j = 0; j < question.answers.length; j++) {
    // console.log(question.answers[j]);
    var answer = question.answers[j];

    var div = document.createElement("div");
    var radioBtn = `<input type="radio" class="answer" id="group${i}" name="test${i}" value="${answer}">`
    div.innerHTML = radioBtn + " " + answer;
    // div.setAttribute("id", "answer");
    document.querySelector(".test" + i).appendChild(div);
  }
}


var form = document.forms["form"];
form.addEventListener("submit", function(event) {
  event.preventDefault();

  for (var i = 0; i < form.children.length; i++) {
    var found = "";

    for (var j = 0; j < form["group" + i].length; j++) {
      if (form["group" + i][j].checked) {
        found = form["group" + i][j].value;
      }
    }

    if (found === correctAnsArr[i]) {
      correctAns += 1;
      found = "";
    } else if (found === "") {
      unanswered += 1;
    } else {
      incorrectAns += 1;      
    }
  }
  console.log({
    correctAns,
    incorrectAns,
    unanswered,
  })
});
