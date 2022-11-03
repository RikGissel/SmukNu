// code for activating accordions on click
const addEvents = () => {
  let items = document.querySelectorAll(".accordion .accordion__item");
items.forEach(function (q) {
	q.addEventListener("click", (a) => {
			items.forEach(function (a) {
				a !== q || a.classList.contains("open")
					? a.classList.remove("open")
					: a.classList.add("open");
			});
		});
});
}

/* code for fetching questions to accordion via REST API */
const fetchQuestions = () => {
  Promise.all([
      fetch("https://smuknu.webmcdm.dk/questions", {
        headers: {
          Accept: "application/json",
        },
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (questions) {
          let questionsData = "";
          for (let i = 0; i < questions.length; i++) {
              questionsData += 
              `<article class="accordion__item">
              <h3><i class="fa-solid fa-question fa-2x" style="padding-right: 15px;"></i>${questions[i].question}</h3>
              <p>${questions[i].answer}</p>
              </article>`;
        }
    
          document.querySelector(".accordion").innerHTML =
            questionsData;
            // call script for accordions
            addEvents();
        }),
    ]);
}
fetchQuestions();