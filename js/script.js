/* ================================
   FOOTER YEAR
================================ */
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

/* ================================
   HIGH CONTRAST ACCESSIBILITY MODE
================================ */
const contrastToggle = document.getElementById("contrastToggle");
if (contrastToggle) {
    contrastToggle.addEventListener("click", () => {
        document.body.classList.toggle("high-contrast");
    });
}

/* ================================
   NEWSLETTER FORM (HOMEPAGE)
================================ */
const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const emailInput = document.getElementById("newsletterEmail");
        const message = document.getElementById("newsletterMessage");

        if (!emailInput.value.includes("@")) {
            message.textContent = "Please enter a valid email address.";
            message.style.color = "red";
        } else {
            message.textContent = "Thanks for subscribing to GreenTech Insights!";
            message.style.color = "green";
            emailInput.value = "";
        }
    });
}

/* ================================
   CONTACT FORM VALIDATION
================================ */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const messageText = document.getElementById("message").value.trim();
        const message = document.getElementById("contactMessage");

        if (!name || !email || !messageText) {
            message.textContent = "Please fill out all fields before submitting.";
            message.style.color = "red";
            return;
        }

        message.textContent = `Thanks, ${name}! We’ll get back to you soon.`;
        message.style.color = "green";
        contactForm.reset();
    });
}

/* ================================
   PRODUCT FILTER (PRODUCTS PAGE)
================================ */
const productFilter = document.getElementById("productFilter");
if (productFilter) {
    const productCards = document.querySelectorAll(".product-card");

    productFilter.addEventListener("change", () => {
        const value = productFilter.value;

        productCards.forEach(card => {
            const category = card.getAttribute("data-category");

            if (value === "all" || value === category) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}
