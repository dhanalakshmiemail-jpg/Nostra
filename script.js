/* =========================
   NOSTRA - PRODUCT DATA
========================= */

const products = [
    {
        id: 1,
        name: "Classic White Shirt",
        category: "Clothing",
        price: 899,
        description: "A timeless essential for every wardrobe.",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80",
        badge: "BESTSELLER"
    },
    {
        id: 2,
        name: "Everyday Denim",
        category: "Clothing",
        price: 1499,
        description: "Comfortable denim for everyday adventures.",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80",
        badge: "POPULAR"
    },
    {
        id: 3,
        name: "Minimal Beige Bag",
        category: "Accessories",
        price: 1199,
        description: "Carry your essentials with effortless style.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
        badge: "NEW"
    },
    {
        id: 4,
        name: "Classic Sneakers",
        category: "Footwear",
        price: 1799,
        description: "Everyday comfort with a clean silhouette.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
        badge: "TRENDING"
    },
    {
        id: 5,
        name: "Soft Cotton Tee",
        category: "Clothing",
        price: 599,
        description: "A relaxed fit for easy everyday styling.",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
        badge: "ESSENTIAL"
    },
    {
        id: 6,
        name: "Elegant Sunglasses",
        category: "Accessories",
        price: 799,
        description: "A statement accessory for sunny days.",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
        badge: "NEW"
    },
    {
        id: 7,
        name: "Everyday Backpack",
        category: "Accessories",
        price: 1399,
        description: "Practical design with a modern finish.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
        badge: "POPULAR"
    },
    {
        id: 8,
        name: "Urban Running Shoes",
        category: "Footwear",
        price: 2199,
        description: "Lightweight comfort for busy days.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
        badge: "TRENDING"
    },
    {
        id: 9,
        name: "Relaxed Linen Shirt",
        category: "Clothing",
        price: 1299,
        description: "Breezy fabric with a relaxed silhouette.",
        image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=80",
        badge: "NEW"
    },
    {
        id: 10,
        name: "Minimal Wrist Watch",
        category: "Accessories",
        price: 1599,
        description: "Understated elegance for every occasion.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
        badge: "CLASSIC"
    },
    {
        id: 11,
        name: "Casual Slip-ons",
        category: "Footwear",
        price: 999,
        description: "Easy-to-wear footwear for everyday use.",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
        badge: "ESSENTIAL"
    },
    {
        id: 12,
        name: "Everyday Shoulder Bag",
        category: "Accessories",
        price: 1099,
        description: "A versatile companion for your daily plans.",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
        badge: "POPULAR"
    }
];


/* =========================
   COLLECTION PAGE
========================= */

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const productCount = document.getElementById("productCount");
const resultMessage = document.getElementById("resultMessage");
const noProducts = document.getElementById("noProducts");
const clearFilters = document.getElementById("clearFilters");
const resetSearch = document.getElementById("resetSearch");


/* Format product prices in Indian Rupees */

function formatPrice(price) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(price);
}


/* Create and display product cards */

function renderProducts(items) {

    if (!productGrid) {
        return;
    }

    productGrid.innerHTML = "";

    items.forEach(function (product) {

        const card = document.createElement("article");
        card.className = "product-card";

        const imageWrapper = document.createElement("div");
        imageWrapper.className = "product-image";

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;
        image.loading = "lazy";

        image.onerror = function () {
            image.onerror = null;
            image.src =
                "https://placehold.co/600x700/e8eddf/234d3c?text=Nostra";
        };

        const badge = document.createElement("span");
        badge.className = "product-badge";
        badge.textContent = product.badge;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(badge);

        const details = document.createElement("div");
        details.className = "product-details";

        const category = document.createElement("p");
        category.className = "product-category";
        category.textContent = product.category;

        const title = document.createElement("h3");
        title.textContent = product.name;

        const description = document.createElement("p");
        description.className = "product-description";
        description.textContent = product.description;

        const bottom = document.createElement("div");
        bottom.className = "product-bottom";

        const price = document.createElement("span");
        price.className = "product-price";
        price.textContent = formatPrice(product.price);

        const button = document.createElement("button");
        button.type = "button";
        button.textContent = "Add to Bag +";

        button.addEventListener("click", function () {
            alert(
                product.name +
                " has been added to your demo shopping bag!"
            );
        });

        bottom.appendChild(price);
        bottom.appendChild(button);

        details.appendChild(category);
        details.appendChild(title);
        details.appendChild(description);
        details.appendChild(bottom);

        card.appendChild(imageWrapper);
        card.appendChild(details);

        productGrid.appendChild(card);

    });

    productCount.textContent =
        items.length + (items.length === 1 ? " product" : " products");

    noProducts.hidden = items.length !== 0;
    productGrid.hidden = items.length === 0;

    if (resultMessage) {
        resultMessage.textContent =
            items.length === products.length
                ? "Showing all products"
                : "Showing " + items.length + " matching products";
    }

}


/* Search, category filter and sorting */

function filterProducts() {

    if (!productGrid) {
        return;
    }

    const searchTerm = searchInput.value
        .trim()
        .toLowerCase();

    const selectedCategory = categoryFilter.value;
    const selectedSort = sortFilter.value;

    let filteredProducts = products.filter(function (product) {

        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm);

        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;

    });

    if (selectedSort === "low") {

        filteredProducts.sort(function (a, b) {
            return a.price - b.price;
        });

    } else if (selectedSort === "high") {

        filteredProducts.sort(function (a, b) {
            return b.price - a.price;
        });

    } else if (selectedSort === "name") {

        filteredProducts.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });

    }

    renderProducts(filteredProducts);

}


/* Set up collection controls */

if (productGrid) {

    searchInput.addEventListener("input", filterProducts);

    categoryFilter.addEventListener("change", filterProducts);

    sortFilter.addEventListener("change", filterProducts);

    clearFilters.addEventListener("click", function () {

        searchInput.value = "";
        categoryFilter.value = "All";
        sortFilter.value = "default";

        filterProducts();

    });

    resetSearch.addEventListener("click", function () {

        searchInput.value = "";
        categoryFilter.value = "All";
        sortFilter.value = "default";

        filterProducts();

    });

    /*
       Read the category from the home page URL.
       Example: collections.html?category=Clothing
    */

    const params = new URLSearchParams(window.location.search);
    const requestedCategory = params.get("category");

    const validCategories = [
        "Clothing",
        "Accessories",
        "Footwear"
    ];

    if (validCategories.includes(requestedCategory)) {
        categoryFilter.value = requestedCategory;
    }

    filterProducts();

}


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");
const contactStatus = document.getElementById("contactStatus");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const name = document
            .getElementById("contactName")
            .value
            .trim();

        const email = document
            .getElementById("contactEmail")
            .value
            .trim();

        const subject = document
            .getElementById("contactSubject")
            .value;

        const message = document
            .getElementById("contactMessage")
            .value
            .trim();

        if (name.length < 2 || message.length < 10) {

            contactStatus.textContent =
                "Please enter a valid name and a message of at least 10 characters.";

            contactStatus.className = "form-status error";

            return;
        }

        /*
           Demo only:
           This does not send an actual email.
        */

        console.log("Demo contact form submission:", {
            name: name,
            email: email,
            subject: subject,
            message: message
        });

        contactStatus.textContent =
            "Thank you, " + name +
            "! Your form was validated successfully. " +
            "This demo does not send emails yet.";

        contactStatus.className = "form-status success";

        contactForm.reset();

    });

}