/* =====================================================
   SUMAIYA AKTER - NURSE PORTFOLIO JAVASCRIPT
   ===================================================== */


/* ================= LUCIDE ICONS ================= */

lucide.createIcons();



/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});



/* Close menu after clicking link */

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


navigationLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            navLinks.classList.remove(
                "active"
            );

        }
    );

});



/* ================= SCROLL ANIMATION ================= */


const revealElements =
    document.querySelectorAll(
        ".skill-card, .service-card, .project-card, .training-card, .language-card, .education-card, .about-grid"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "active"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    function (element) {

        element.classList.add(
            "reveal"
        );

        observer.observe(
            element
        );

    }
);



/* ================= BACK TO TOP ================= */


const backTop =
    document.getElementById(
        "backTop"
    );


window.addEventListener(
    "scroll",
    function () {

        if (
            window.scrollY > 500
        ) {

            backTop.classList.add(
                "show"
            );

        } else {

            backTop.classList.remove(
                "show"
            );

        }

    }
);


backTop.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* ================= ACTIVE NAVIGATION ================= */


const sections =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener(
    "scroll",
    function () {

        let current = "";

        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 120;

                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navigationLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) === "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);