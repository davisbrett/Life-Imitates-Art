if (window.innerWidth > 600) {
    gsap.utils.toArray(".comparisonSection").forEach(section => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "center center",
                end: () => "+=" + (window.innerWidth < 600 ? section.offsetHeight : section.offsetWidth),
                scrub: true,
                pin: true,
                anticipatePin: 1,
                horizontal: window.innerWidth >= 600 // Set horizontal scrolling based on viewport width
            },
            defaults: { ease: "none" }
        });
        tl.fromTo(section.querySelector(".afterImage"),
            { xPercent: 50, x: 0 },
            { xPercent: 0 })
            .fromTo(section.querySelector(".afterImage img"),
                { xPercent: -100, x: 0 },
                { xPercent: 0 }, 0);
    });
}
