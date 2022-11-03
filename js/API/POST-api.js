/* code for the variables responsible for displaying the error message on screen */
const cautionHeadline = document.querySelector(".caution");
const errorPage = () => {
  let messageAlert = document.getElementById("message-authentication"),
      successHeadline = document.querySelector(".success-heading"),
      cautionHeadline = document.querySelector(".caution"),
      giftContents = document.querySelector(".gift-contents"),
      loadingContent = document.querySelector("#loading-content");

  cautionHeadline.innerHTML = "404 <i class='fa-regular fa-file-excel'></i>"
  successHeadline.innerHTML = "ERROR<br>This e-mail already exists or your credentials are incorrect!"
  loadingContent.innerHTML = "<div id='loading'></div><br><h2>Siden genindlæses</h2>"

  messageAlert.style.display = "flex"
  giftContents.classList.add("hide");
  console.log("error")
  refreshPage()
}

/* code for the variable containing all the information for the success page */
const successPage = (name) => {
  let messageAlert = document.getElementById("message-authentication"),
      successHeadline = document.querySelector(".success-heading")

  successHeadline.textContent = name;
  messageAlert.style.display = "flex"
  console.log("success", name)
  refreshPage()
}

/* code for POSTing information to REST API when clicking on submit button. Either the user will get an error or a success message in the browser */
const onSubmit = (e) => {
    e.preventDefault();
    fetch("https://smuknu.webmcdm.dk/subscribe", {
      method: "POST",
      body: JSON.stringify({
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        message: e.target.elements.message.value,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
      .then((e) => e.json())
      .then((e) => {
        e.result.name ? successPage(e.result.name) : errorPage();
      });
}

/* code for refreshing the webpage after 5 seconds. This is the case whether or not the user had success sending a message */
refreshPage = () => {
  setTimeout(() => {
    if (cautionHeadline.innerHTML == "Tak!") {
      window.location.href="../index.html"
    } else {
      window.location.reload();
    }
  }, 5000);
};

/* code for inserting all data in the form section */
const formElement = document.querySelector(".form__container");
formElement.addEventListener("submit", onSubmit);