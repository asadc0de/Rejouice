function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
init();


let clutter = "";
document.querySelector('#rejouice').textContent.split("").forEach(function (dets) {
    clutter += `<span>${dets}</span>`;
    document.querySelector("#rejouice").innerHTML = clutter;
});


function cursorEffect() {
    var cursor = document.querySelector('#cursor');
    var page1Content = document.querySelector('#page1-content');

    page1Content.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        });
    });
    page1Content.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        });
    });
    page1Content.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 1
        });
    });
}
cursorEffect();


function page2Animation() {
    gsap.from("#page2-bottom h1", {
        y: 120,
        stagger: .2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 67%",
            end: "top 66%",
            scrub: 2,
            // markers:true
        }
    });
}
page2Animation();


function swipperJs() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });
}
swipperJs();

gsap.from("#page1-content h1 span", {
    y: 100,
    stagger: .1,
    duration: .5,
    rotate: "10deg",
    opacity: 0
})



var cursor11 = document.querySelector(".cursor1");

// Add event listener
section4Content.addEventListener("mousemove", function (dets) {
    // console.log(dets.x);
    // cursor.style.left = dets.x+"px";
    // cursor.style.top = dets.y+"px";

    // gsap code 
    gsap.to(cursor11, {
        x: dets.x,
        y: dets.y,
    })
})

section4Content.addEventListener("mouseenter", function () {
    // gsap code 
    gsap.to(cursor11, {
        scale: 1,
        opacity: 1
    })
})

section4Content.addEventListener("mouseleave", function () {
    // gsap code 
    gsap.to(cursor11, {
        scale: 0,
        opacity: 0
    })
})


// cursoreffect call
cursorEffect2();