/* ============================================================
   CAMINHOS DE TIRADENTES
   JAVASCRIPT DA HOME
============================================================ */


/* ============================================================
   HEADER — EFEITO AO ROLAR
============================================================ */

const header = document.getElementById("site-header");

function updateHeader() {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();



/* ============================================================
   MENU MOBILE
============================================================ */

const menuToggle =
    document.getElementById("menu-toggle");

const mobileMenu =
    document.getElementById("mobile-menu");


menuToggle.addEventListener("click", () => {

    const isOpen =
        mobileMenu.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/*
    Fecha o menu quando o usuário
    clica em algum link.
*/

const mobileLinks =
    mobileMenu.querySelectorAll("a");

mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});



/* ============================================================
   NEWSLETTER
============================================================ */

const newsletterForm =
    document.getElementById("newsletter-form");

const newsletterFeedback =
    document.getElementById("newsletter-feedback");


if (newsletterForm) {

    newsletterForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const input =
            newsletterForm.querySelector("input[type='email']");

        if (input && input.value) {

            newsletterFeedback.textContent =
                "Obrigado por se inscrever!";

            newsletterForm.reset();

        }

    });

}



/* ============================================================
   ANO DO RODAPÉ
============================================================ */

const footerYear =
    document.getElementById("footer-year");

if (footerYear) {

    footerYear.textContent =
        new Date().getFullYear();

}



/* ============================================================
   ANIMAÇÃO DE ENTRADA
============================================================ */

const animatedElements =
    document.querySelectorAll(
        ".tour-card, .pick-card, .benefit, .gallery-item"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "is-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


animatedElements.forEach((element) => {

    observer.observe(element);

});



/* ============================================================
   FALLBACK DE IMAGENS
============================================================ */

/*
    Enquanto você ainda não possui
    as fotos reais do cliente, esta
    função evita que uma imagem quebrada
    apareça de forma estranha.

    Depois, basta substituir os arquivos
    da pasta /images.
*/

const images =
    document.querySelectorAll("img");


images.forEach((image) => {

    image.addEventListener("error", () => {

        /*
            Não substituímos a logo por uma
            imagem externa.

            Para imagens de conteúdo,
            usamos um fundo neutro.
        */

        if (
            image.classList.contains("hero-image") ||
            image.closest(".tour-image") ||
            image.closest(".why-image") ||
            image.closest(".gallery-item")
        ) {

            image.style.display = "none";

            const parent =
                image.parentElement;

            parent.classList.add(
                "image-placeholder"
            );

        }

    });

});