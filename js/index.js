(() => {
  const generateProducts = async (url) => {
    let productContainer = document.querySelector("#men-wear");

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        productContainer.innerHTML = "";
        for (let product = 0; product < data.length; product++) {
          const { image, price, productCaption } = data[product];

          productContainer.innerHTML += `
            <div class="product-card">
              <div class="product-image">
                <img src="./images/men/${image}" alt="" />
              </div>
              <div class="product-card-body">
                <h3 class="text-xl font-bold text-gray-500 card-title">${productCaption}</h3>
                <p class="text-sm text-gray-600 card-text">
                  <span> Price : ${price}</span>
                </p>
                <button type="button" class="cart-btn">
                  <span class="fa fa-cart-plus text-xl text-white mr-3"></span>
                  <span class="text-white text-lg font-semibold">
                    Add to cart
                  </span>
                </button>
              </div>
            </div>
          `;
        }
      });
  };
  setTimeout(() => generateProducts("json/product.json"), 5000);
})();

(() => {
  function addActive(linkId, ele) {
    const activePage = window.location.pathname;
    const links = document.querySelectorAll(`.nav-item ${ele}`);

    links.forEach((link) => {
      if (link.href.includes(`${activePage}`)) {
        link.classList.add(`${linkId}`);
      }
    });
  }

  const links = document.querySelectorAll(".nav-item a");
  links.forEach((link) => {
    link.addEventListener("click", (evt) => {
      evt.preventDefault();

      const href = link.getAttribute("href");
      document.querySelector(`${href}`).scrollIntoView({ behavior: "smooth" });
    });
  });

  function showMenu() {
    const menuIcon = document.querySelector(".btn-toggle .fa-bars");
    const menu = document.querySelector(".nav-list");
    const closeIcon = document.querySelector(".fa-close");

    if (menuIcon && menu) {
      menuIcon.addEventListener("click", () => {
        menu.classList.add("open");
      });

      closeIcon.addEventListener("click", function () {
        this.parentElement.parentElement.classList.remove("open");
      });
    }
  }
  showMenu();
})();

(() => {
  const swiper = new Swiper(".slider-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})();
