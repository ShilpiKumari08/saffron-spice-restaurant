// ============================================================
// MOBILE NAVIGATION


const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {

    // Open / close mobile navigation
    toggle.addEventListener("click", () => {

        const open = nav.classList.toggle("open");

        toggle.setAttribute(
            "aria-expanded",
            open
        );

    });


    // Close navigation after clicking a link
    nav.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            toggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


// ============================================================
// MENU FILTER
// ============================================================

const filters = document.querySelectorAll(".filter");

filters.forEach((button) => {

    button.addEventListener("click", () => {

        // Remove active class from all filter buttons
        filters.forEach((filterButton) => {

            filterButton.classList.remove("active");

        });


        // Add active class to selected button
        button.classList.add("active");


        // Get selected category
        const selectedFilter = button.dataset.filter;


        // Get all menu items
        const menuItems = document.querySelectorAll(".menu-item");


        // Show / hide menu items
        menuItems.forEach((item) => {

            if (
                selectedFilter === "all" ||
                item.dataset.category === selectedFilter
            ) {

                item.style.display = "grid";

            } else {

                item.style.display = "none";

            }

        });

    });

});


// ============================================================
// RESERVATION FORM
// ============================================================

const reservationForm = document.querySelector("#reservationForm");

if (reservationForm) {

    reservationForm.addEventListener("submit", (event) => {

        // Prevent page refresh
        event.preventDefault();


        // Show success message
        document.querySelector("#formMessage").textContent =
            "Thank you! Your reservation request has been received. We will contact you shortly.";


        // Clear form fields
        reservationForm.reset();

    });

}

// ============================================================
// CONTACT FORM
// ============================================================

const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        // Prevent page refresh
        event.preventDefault();

        // Show success message
        document.querySelector("#contactMessage").textContent =
            "Thanks for reaching out. We will get back to you soon.";

        // Clear form fields
        contactForm.reset();

    });

}
