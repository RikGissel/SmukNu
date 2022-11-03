Promise.all([
    fetch("https://smuknu.webmcdm.dk/products", {
      headers: {
        Accept: "application/json",
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (products) {
        let productInformation = "";
        for (let i = 0; i < products.length; i++) {
          if (products[i].recommended == true) {
            productInformation += `<div class='product__holder'>
            <div class='price-tag'>
            ${products[i].discountInPercent == '' ? '' : `<div class='special-discount'>Spar<br> ${products[i].discountInPercent}%</div>`}
            <img src='${products[i].image}' >
            </div>
            <div class="heading-wrapper">
            <h3>${products[i].title}</h3>
            <h3 class='product-price'>${products[i].price},00 kr.</h3>
            </div>
            </div>`;
          }
      }
  
        document.querySelector(".products-pictures__container").innerHTML =
          productInformation;
      }),
  ]);
  