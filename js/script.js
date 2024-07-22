const products = [
  {
    img: "../assets/img/product/jahe.png",
    title: "Jahe",
    caption:
      "Where barren and narrow land can be used grow herbal plants which will later",
  },
  {
    img: "../assets/img/product/kunyit.png",
    title: "Kunyit",
    caption:
      "Where barren and narrow land can be used grow herbal plants which will later",
  },
  {
    img: "../assets/img/product/temulawak.png",
    title: "Temulawak",
    caption:
      "Where barren and narrow land can be used grow herbal plants which will later",
  },
  {
    img: "../assets/img/product/kunyit.png",
    title: "Kunyit",
    caption:
      "Where barren and narrow land can be used grow herbal plants which will later",
  },
  {
    img: "../assets/img/product/kunyit.png",
    title: "Kunyit",
    caption:
      "Where barren and narrow land can be used grow herbal plants which will later",
  },
  {
    img: "../assets/img/product/kunyit.png",
    title: "Kunyit",
    caption:
      "Where barren and narrow land can be used grow herbal plants which will later",
  },
  {
    img: "../assets/img/product/kunyit.png",
    title: "Kunyit",
    caption:
      "Where barren and narrow land can be used grow herbal plants which will later",
  },
  // Add more products as needed
];

const productsPerPage = 6; // Number of products to display per page
let currentPage = 1;

function displayProducts(page) {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";

  const start = (page - 1) * productsPerPage;
  const end = start + productsPerPage;
  const paginatedProducts = products.slice(start, end);

  paginatedProducts.forEach((product) => {
    const productCard = `
            <div class="col-md-4 mb-4 px-4">
                <div class="card">
                    <img src="${product.img}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.caption}</p>
                    </div>
                </div>
            </div>
        `;
    productContainer.innerHTML += productCard;
  });
}

function displayPagination() {
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  const totalPages = Math.ceil(products.length / productsPerPage);

  const prevPage = `
        <li class="page-item ${currentPage === 1 ? "disabled" : ""}">
            <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
    `;
  paginationContainer.innerHTML += prevPage;

  for (let i = 1; i <= totalPages; i++) {
    const paginationItem = `
            <li class="page-item ${i === currentPage ? "active" : ""}">
                <a class="page-link" href="#">${i}</a>
            </li>
        `;
    paginationContainer.innerHTML += paginationItem;
  }

  const nextPage = `
        <li class="page-item ${currentPage === totalPages ? "disabled" : ""}">
            <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
    `;
  paginationContainer.innerHTML += nextPage;

  const paginationLinks = document.querySelectorAll(".page-link");
  paginationLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const textContent = this.textContent.trim();
      if (textContent === "«") {
        if (currentPage > 1) currentPage--;
      } else if (textContent === "»") {
        if (currentPage < totalPages) currentPage++;
      } else {
        currentPage = parseInt(textContent);
      }
      displayProducts(currentPage);
      displayPagination();
    });
  });
}

// Initialize pagination
displayProducts(currentPage);
displayPagination();
