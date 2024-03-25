window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false
);

const beforeImages = document.querySelectorAll(".beforeImage img");
const afterImages = document.querySelectorAll(".afterImage img");
console.log(window.scrollY);
beforeImages.forEach((beforeImage, index) => {
    const originalSrc = beforeImage.src;

    beforeImage.addEventListener("mouseenter", () => {
        beforeImage.src = originalSrc.replace("-life", "-art");
    });

    beforeImage.addEventListener("mouseleave", () => {
        beforeImage.src = originalSrc.replace("-art", "-life");
    });
});

afterImages.forEach((afterImage, index) => {
    const originalSrc = afterImage.src;

    afterImage.addEventListener("mouseenter", () => {
        afterImage.src = originalSrc.replace("-art", "-life");
    });

    afterImage.addEventListener("mouseleave", () => {
        afterImage.src = originalSrc.replace("-life", "-art");
    });
});
