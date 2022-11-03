/* code for header / navbar component */
const header = document.querySelector("#header");
header.innerHTML += 
`<div class='header-container'>
<header>
  <div class='header__img'>
  <a href="../index.html"><img src='../assets/logo/smuknu_logo.png' alt='official logo' /></a>
  </div>
  <div class='nav-cart-wrapper'>
  <i class="fa-solid fa-bag-shopping fa-2x"></i>
  <a href="javascript:void(0);" class="icon" onclick="showNav()">
  <i class="fa fa-bars fa-2x"></i>
  </a>
  </div>
  </header>
  <ul id="list-items-wrapper">
    <a href="../index.html">Forsiden</a>
    <a href="../html/products.html" style='padding: 27px 0;'>Vores produkter</a>
    <a href="../html/health.html" style='padding-bottom: 27px;'>Spørg om sundhed</a>
    <a href="../html/member.html">Bliv medlem</a>
  </ul>
  </div>`;