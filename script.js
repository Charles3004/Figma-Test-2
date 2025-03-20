document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel-items");
    const prevBtn = document.querySelector(".carousel-btn.left");
    const nextBtn = document.querySelector(".carousel-btn.right");

    let scrollAmount = 0;
    const step = 270; // Adjust based on card width

    nextBtn.addEventListener("click", () => {
        if (scrollAmount < carousel.scrollWidth - carousel.clientWidth) {
            scrollAmount += step;
            carousel.scrollTo({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    });

    prevBtn.addEventListener("click", () => {
        if (scrollAmount > 0) {
            scrollAmount -= step;
            carousel.scrollTo({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    });
});
