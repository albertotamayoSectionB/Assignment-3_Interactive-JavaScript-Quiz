 function authenticate() {
     let username = document.getElementById("username").value;
     let password = document.getElementById("password").value;

    // Simple authentication
     if (username === "Humber" && password === "Prof") {
       document.getElementById("loginContainer").classList.add("hidden");
       document.getElementById("quizContainer").classList.remove("hidden");
     } else {
       alert("Oops, wrong username or password!");
     }
   }

  function submitQuiz() {
    let correctAnswers = {
      q1: "10",
      q2: "The Upper House, The House of Common, and the Supreme Court of Canada",
      q3: "Mary Simon",
      q4: "Appointed by the Governor General according to the advise of the Prime Minister",
      q5: "Pierre Poilievre",
      q6: "The British prevailed to end French Empire in America",
      q7: "The Canadian Charter of Rights and Freedoms",
      q8: "1867",
      q9: "On the third monday in October every four years from recent election",
      q10: "Beaver",
    };

let userAnswers = {};
  for (let i = 1; i <= 10; i++) {
      userAnswers["q" + i] = document.querySelector('input[name="q' + i + '"]:checked').value;
}

let correctCount = 0;
  for (let key in userAnswers) {
    if (userAnswers.hasOwnProperty(key)) {
      if (userAnswers[key] === correctAnswers[key]) {
          correctCount++;
        }
      }
    }

let feedback = document.getElementById("feedback");
let scoreDisplay = document.getElementById("score");

feedback.style.display = "block";
feedback.innerHTML = "You got " + correctCount + " out of " + Object.keys(correctAnswers).length + " questions correct.";
}