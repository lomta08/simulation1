let timerInterval;
let timeLeft = 3 * 60 * 60; // 5 minutes


function startQuiz(withTimer) {
  document.getElementById("mode-selection").style.display = "none";
  const quizForm = document.getElementById("quizForm");
  quizForm.style.display = "block";

  if (withTimer) {
    document.getElementById("timer").style.display = "block";
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("დრო ამოიწურა! ქვიზი ავტომატურად დასრულდა.");
        quizForm.requestSubmit(); // safely submits even if clicked from code
      }
    }, 1000);
  }
}

function updateTimerDisplay() {
    const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
}


const quizData = [
    {
      question: "გამოთვალეთ \\( \\int_{\\frac{\\pi}{12}}^{\\frac{\\pi}{4}} \\cos2x \\, dx \\) ინტეგრალი.",
      options: ["$\\pi$", "$-1$", "$0$", "$1$", "$\\frac{1}{4}$", "$\\frac{1}{2}$"],
      correct: 4,
      tags: ["Math"]  
    },
    {
      question: "გამოთვალეთ \\( f'\\left(\\frac{7\\pi}{6}\\right) \\), თუ \\( f(x) = \\sin\\left(\\frac{3\\pi}{7}\\right) + \\cos\\left(\\frac{3x}{7}\\right) \\).",
      options: ["$0$", "$-\\frac{3}{7}$", "$1$", "$\\frac{2}{3}$", "$-\\frac{1}{2}$", "$-1$"],
      correct: 1,
      tags: ["Calculus"]
    },
    {
      question: "ამოხსენით \\( x - \\sqrt{3-2x} < 0\\) უტოლობა.",
      options: ["$(2;5)$", "$(\\frac{3}{2};2)$", "$(-1;4)$", "$(\\frac{3}{2};\\infty)$", "$(-2;3)$" , "$(-\\infty;1)$"],
      correct: 5,
      tags: ["Math"]
    },
    {
      question: "იპოვეთ \\(\\frac{x^2}{48} + \\frac{y^2}{12} = 1 \\) ელიფსის დირექტისებს შორის მანძილი.",
      options: ["$12$", "$24$", "$48$", "$16$","$32$","$36$"],
      correct: 3,
      tags: ["Math"]
    },
    {
      question: "ჩამოთვლილთაგან რომელია იმ პარაბოლის განტოლება, რომლის წვერო კოორდინატთა სათავეშია, ხოლო ფოკუსი მდებარეობს \\(F(3;0)\\) წერტილში.",
      options: ["${y}^{2}=16x+3$", "${y}^{2}=2x$", "${y}^{2}=12x$", "${y}^{2}=6x$","${y}^{2}=x$","${y}^{2}=9x$"],
      correct: 2,
      tags: ["Math"]
    },
    {
      question: "იპოვეთ  \\(x\\cdot {2}^{\\log_x 5}=10 \\) განტოლების ამონახსნთა ჯამი.", 
      options: ["$7$", "$\\frac{7}{2}$", "$\\frac{9}{2}$", "$1$", "$14$", "$11$"],
      correct: 0,
      tags: ["Math"]
    },
    {
      question: "იპოვეთ  \\(\\sqrt{2x+18} = \\sqrt{f'(1)}\\) განტოლების ამონახსნი, თუ \\(f(x)={({x}^{2}-3x)}^{4}\\) .", 
      options: ["$2$", "$7$", "$5$", "$8$","$-4$","$-2$"],
      correct: 1,
      tags: ["Math"]
    },
    {
      question: "გამოთვალეთ  \\(\\lim\\limits_{x \\to \\infty} {(\\frac{x+5}{x-7})}^{x}\\) ზღვარი.", 
      options: ["$1$", "$\\infty$", "${e}^{12}$", "${e}^{6}$","${e}$","$0$"],
      correct: 2,
      tags: ["Math"]
    },
    {
      question: "იპოვეთ \\(11x-8y-7z+5=0 \\) და \\(7x+2y-8z-3=0 \\) სიბრტყეებს შორის კუთხის კოსინუსი.", 
      options: ["$\\frac{1}{2}$", "$\\frac{2}{3}$", "$\\frac{1}{7}$", "$\\frac{1}{\\sqrt2}$","$\\frac{1}{\\sqrt3}$","$\\frac{2}{\\sqrt5}$"],
      correct: 3,
      tags: ["Math"]
    },
    {
      question: "სამკუთხედის გვერდებია \\(3;4 \\) და \\(5\\). იპოვეთ ზედაპირის ფართობის სხეულისა, რომელიც მიღებულია ამ სამკუთხედის ბრუნვით დიდი გვერდის გარშემო.", 
      options: ["$\\frac{73\\pi}{3}$", "$\\frac{84\\pi}{5}$", "$\\frac{68\\pi}{3}$", "$\\frac{55\\pi}{4}$","$\\frac{96\\pi}{7}$","$\\frac{106\\pi}{9}$"],
      correct: 1,
      tags: ["Math"]
    },
    {
      question: "იპოვეთ \\(\\ln(2\\cdot{4}^{x}-8\\cdot{2}^{x}) \\le \\ln({2}^{x}-4) \\).", 
      options: ["$\\emptyset $", "$(2;4)$", "$(1;6)$", "$(-1;2)$","$(1;4]$","$(2;4]$"],
      correct: 0,
      tags: ["Math"]
    },
    {
      question: "ჩამოთვლილთაგან \\(f(x)=\\frac{{x}^{4}-{x}^{2}}{4}-\\frac{{x}^{3}}{3} \\) ფუნქციის გრაფიკზე მდებარე რომელ წერტილში გაივლის მხები, რომელიც \\(y=-\\frac{1}{3}x+8 \\) წრფის მართობულია?", 
      options: ["$(1;\\frac{1}{3})$", "$(2;5)$", "$(2;\\frac{1}{3})$", "$(3;9)$","$(4;0)$","$(5;1)$"],
      correct: 2,
      tags: ["Math"]
    },
    {
      question: "იპოვეთ  \\(y=-2{x}^{2}+10x-4\\) და \\(y={x}^{2}-2x+5 \\) წირებით შემოსაზღვრული ფიგურის ფართობი.", 
      options: ["$4$", "$5$", "$6$", "$8$","$10$","$15$"],
      correct: 0,
      tags: ["Math"]
    },
    {
      question: "ჩამოთვლილთაგან რომელია ჰიპერბოლის განტოლება, რომლის წარმოსახვითი ღერძია 6, ხოლო ფოკუსებს შორის მანძილი 14.", 
      options: ["$\\frac{{x}^{2}}{{8}^{2}}-\\frac{{y}^{2}}{{6}^{2}}=1$", "$\\frac{{x}^{2}}{40}-\\frac{{y}^{2}}{9}=1$", "$\\frac{{x}^{2}}{36}-\\frac{{y}^{2}}{4}=1$", "$\\frac{{x}^{2}}{49}-\\frac{{y}^{2}}{36}=1$","$\\frac{{x}^{2}}{{7}^{2}}-\\frac{{y}^{2}}{{6}^{2}}=1$","$\\frac{{x}^{2}}{{7}^{2}}-\\frac{{y}^{2}}{{3}^{2}}=1$"],
      correct: 1,
      tags: ["Math"]
    },
    {
      question: "\\(XOY \\) საკორდინანტო სიბრტყეზე იპოვეთ იმ ოთხკუთხედის ფართობი, რომლის წვეროები  \\(A(1;3),B(4;7),C(-1;-2),D(2;2)\\) წერტილებია.", 
      options: ["$3$", "$5$", "$6$", "$7$","$9$","$10$"],
      correct: 3,
      tags: ["Math"]
    },
    {
      question: "იპოვეთ  \\(\\sin(x)\\cdot\\sqrt{2+3x-2{x}^{2}}=0 \\) განტოლების ამონახსთა ჯამი.", 
      options: ["$0$", "$\\frac{3}{2}$", "$\\frac{\\pi+5}{3}$", "$\\pi+2$","$\\frac{5\\pi+1}{3}$","$2$"],
      correct: 1,
      tags: ["Math"]
    },
    {
      question: `რამდენი წყვეტის წერტილი აქვს \\( f(x) = 
      \\begin{cases}
        2, & \\text{როცა } x < -1 \\\\
        2 - 2x, & \\text{როცა } -1 \\le x < 1 \\\\
        \\ln x, & \\text{როცა } 1 \\le x
      \\end{cases}
    \\) ფუნქციას?`,
      options: ["არცერთი", "$1$", "$2$", "$3$","$4$","4-ზე $\\,$ მეტი"],
      correct: 1,
      tags: ["Math"]
    },
    {
      question: "გამოთვალეთ  \\(\\int_{1}^{2} \\frac{x dx}{{x}^{2}+2} \\) ინტეგრალი.", 
      options: ["$4$", "$\\frac{3}{2}$", "$\\sin\\frac{1}{3}$", "$\\frac{\\ln 2}{2}$","$9-\\pi$","$\\sqrt{7}$"],
      correct: 3,
      tags: ["Math"]
    },
    {
      question: "\\(Ax+By+Cz+D=0\\) სიბრტყე გადის \\(OX\\) ღერძზე და \\(K(1;2;3)\\) წერტილზე. იპოვეთ \\(\\frac{A+D+B}{C}\\) .", 
      options: ["$-\\frac{3}{2}$", "$-\\frac{3}{2}$", "$\\frac{1}{2}$", "$\\frac{5}{2}$","$\\frac{7}{2}$","$\\frac{5}{3}$"],
      correct: 0,
      tags: ["Math"]
    },
    {
      question: "გამოთვალეთ იმ სხეულის მოცულობა, რომელიც მიიღება \\(xy=4, x=1, x=4, y=0 \\) წირებით შემოსაზღვრული ფიგურის ბრუნვით \\(Ox\\) ღერძის გარშემო.", 
      options: ["$8\\pi$", "$12\\pi$", "$14\\pi$", "$18\\pi$","$24\\pi$","$32\\pi$"],
      correct: 1,
      tags: ["Math"]
    },
    {
      question: "სხეულის გავლილი მანძლის \\((S,მ)\\) დროზე \\((t,წმ)\\) დამოკიდებულება \\(S(t)={t}^{3}-11t \\) ტოლობით განსაზღვრება. იპოვეთ წერტილის აჩქარება დროის იმ მომენტში, როცა მისი სიჩქარე \\(16მ/წმ\\) ის ტოლია.", 
      options: ["$4მ/წმ^2$", "$6მ/წმ^2$", "$8მ/წმ^2$", "$10მ/წმ^2$","$18მ/წმ^2$","$24მ/წმ^2$"],
      correct: 4,
      tags: ["Math"]
    },
    {
      question: "ჩამოთვლილთაგან რომელია \\(f(x) = \\frac{{x}^{3}-1}{4{x}^{2}} \\) ფუნქციის გრაფიკის გადაღუნვის წერტილი?", 
      options: ["$x=-3$", "$x=-1$", "$x=2$", "$x=3$","$x=4$","არცერთი ჩამოთვლილთაგან"],
      correct: 5,
      tags: ["Math"]
    },
    {
      question: "ჩამოთვლილთაგან რომელია  \\(f(x)=\\frac{x}{2}-\\arccos\\frac{2x}{1+{x}^{2} } \\) ფუნქციის გრაფიკის გადაღუნვის წერტილი?", 
      options: ["$y=\\frac{x}{2}+2$", "$y=2x+\\frac{\\pi}{2}$", "$y=x+\\pi$", "$y=\\frac{x-\\pi}{2}$","$y=\\frac{x}{4}+\\pi$","$y=\\frac{x}{2}+2\\pi$"],
      correct: 3,
      tags: ["Math"]
    },
    {
      question: "კონუსის ღერძული კვეთა წესიერი სამკუთხედია, რომლის გვერდია 4. სფერო ეხება კონუსის გვერდით ზედაპირს K წერტილში და ფუძის შემცველ სიბრტყეს ეხება D წერტილში. იპოვეთ სფეროს რადიუსი, თუ მანძილი D წერტილიდან კონუსის ღერძამდე 3-ია.", 
      options: ["$\\sqrt{3}$", "$\\sqrt{5}$", "$2\\sqrt{2}$", "$1$","$2$","$3$"],
      correct: 0,
      tags: ["Math"]
    },
    {
      question: "ცილინდრის ერთ ფუძეზე აღებულია \\(A\\)  და  \\(B\\) წერტილები. მეორე ფუძეზე კი \\(B_1\\) და \\(C_1\\) წერტილები. \\(BB_1\\) ცილინდრის მსახველია, ხოლო \\(AC_1\\) კვეთს ცილინდრის ღერძს. იპოვეთ მანძილი \\(AC_1\\) და \\(BB_1\\) წრფეებს შორის, თუ \\(AB=12\\) და \\(B_1C_1=9\\).", 
      options: ["$4$", "$4,5$", "$7,2$", "$8,4$","$9$","$9,5$"],
      correct: 2,
      tags: ["Math"]
    },
    
  
  
  ];
  
  const form = document.getElementById("quizForm");
  
  quizData.forEach((q, i) => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.innerHTML = `<strong>${i + 1}.</strong><br>${q.question}`;
    fieldset.appendChild(legend);
  
    q.options.forEach((opt, j) => {
      const label = document.createElement("label");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question${i}`;
      radio.value = j;
      label.appendChild(radio);
      label.append(` ${opt}`);
      fieldset.appendChild(label);
    });
  
    form.insertBefore(fieldset, form.querySelector("button"));
  });
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    if (timerInterval) {
      clearInterval(timerInterval);
    }

    let score = 0;
    const result = document.getElementById("result");
    result.innerHTML = "";
  
    const tagStats = {};
  
    quizData.forEach((q, i) => {
      const answer = form.querySelector(`input[name="question${i}"]:checked`);
      const fieldset = form.querySelectorAll("fieldset")[i];
      const explanation = document.createElement("div");
  
      const isCorrect = answer && parseInt(answer.value) === q.correct;
      if (isCorrect) score++;
  
      explanation.innerHTML = isCorrect
        ? `<span style="color: green;">Correct ✔️</span>`
        : `<span style="color: red;">Wrong ❌</span> – Correct answer: <strong>${q.options[q.correct]}</strong>`;
  
      q.tags.forEach(tag => {
        if (!tagStats[tag]) tagStats[tag] = { correct: 0, total: 0 };
        tagStats[tag].total++;
        if (isCorrect) tagStats[tag].correct++;
      });
  
      explanation.style.marginTop = "8px";
      fieldset.appendChild(explanation);
    });
  
    result.innerHTML = `<strong>Total Score: ${score} / ${quizData.length}</strong><br><h3>Score by Topic:</h3>`;
    for (let tag in tagStats) {
      const { correct, total } = tagStats[tag];
      const percentage = ((correct / total) * 100).toFixed(1);
      result.innerHTML += `<p>${tag}: ${correct} / ${total} (${percentage}%)</p>`;
    }
  
    form.querySelector("button").disabled = true;
  
    // Re-render math after result is shown
    if (window.MathJax) MathJax.typeset();
  });
  