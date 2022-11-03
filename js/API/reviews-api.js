/* code for fetching the reviews from REST API */
fetch("https://smuknu.webmcdm.dk/reviews", {
  headers: {
    Accept: "application/json",
  },
})
  .then(function (res) {
    return res.json();
  })
  .then(function (customerReviews) {
    let customerReviewData = "";
    let reviewCounter = 0;
    let displayGrid;

    for (let i = 0; i < customerReviews.length; i++) {
      0 == reviewCounter
        ? ((displayGrid = ""), reviewCounter++)
        : ((displayGrid = "reviewGrid"), reviewCounter--);

      customerReviewData += `
            <section class="customer-reviews">
        <img class="client-review ${displayGrid}" src="${customerReviews[i].image}" alt="customer portrait">
        <p class="testimonial">${customerReviews[i].description}</p>
        <p class="byline ${displayGrid}"><span>${customerReviews[i].name}</span><br>${customerReviews[i].byline}</p>
        <hr>
    </section>`;
    }

    document.querySelector(".reviews-section-container").innerHTML =
      customerReviewData;
  });
