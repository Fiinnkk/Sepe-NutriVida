const configBase = {
    duration: 550,
    easing: "ease-in-out",
    distance: "50px",
    opacity: 0
}

ScrollReveal().reveal('.home .revelarBaixo', {
    ...configBase,
    origin: "bottom",
    scale: 0.95,
    interval: 200,
    delay: 200
});


ScrollReveal().reveal('.home2 h2, .home2 p', {
    ...configBase,
    origin: "bottom",
    scale: 0.95,
    interval: 200,
    delay: 200
});


ScrollReveal().reveal('.home3 h2, .home3 p, .home3 ul li', {
    ...configBase,
    origin: "bottom",
    scale: 0.95,
    interval: 200,
    delay: 200
});


ScrollReveal().reveal('.Alice, .Felipe, .Luciana, .Maria, .Matheus, .Pedro', {
    ...configBase,
    origin: "bottom",
    scale: 0.95,
    interval: 200,
    delay: 200
});


ScrollReveal().reveal('.acoes h2, .acoes p, .acoes ul li, .acoes ul li p ', {
    ...configBase,
    origin: "bottom",
    scale: 0.95,
    interval: 200,
    delay: 200
});