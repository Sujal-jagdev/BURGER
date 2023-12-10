
let a=gsap.timeline()

a.from("#me2,.con1 li",{
    y:-700,
    duration:1,
    opacity: 0,
    stagger: 0.08
})

gsap.from("#me",{
    y:-700,
    duration:1,
    opacity: 0,
    stagger: 0.02
})

