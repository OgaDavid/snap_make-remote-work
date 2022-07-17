// mobile navigation 

var mobileNav = document.getElementsByClassName("mobile-navbar");
var menu = document.getElementsByClassName("menu");
var close = document.getElementsByClassName("close");

if (window.matchMedia("(max-width: 378px)").matches) {
    document.querySelector('.main-img').setAttribute("src", "images/image-hero-mobile.png");

}

// menu
menu[0].addEventListener("click", function() {
    setTimeout(() => {
        mobileNav[0].style.right = 0;
    }, 0);
    mobileNav[0].style.display = "block";
})
close[0].addEventListener("click", function() {
    mobileNav[0].style.right = "-500px";
    setTimeout(function() {
        mobileNav[0].style.display = "";
    }, 800)

    mobileArrow[0].setAttribute("src", "images/icon-arrow-down.svg");
    mobileArrow[1].setAttribute("src", "images/icon-arrow-down.svg");
    mobileDropdown[1].style.display = "";
    mobileDropdown[0].style.display = "";
})

// desktop navigation

var dropdownNav = document.getElementsByClassName("dropdown-nav");
var dropdown = document.getElementsByClassName("nav-dropdown");
var arrow = document.getElementsByClassName("arrow");

// first dropdown 

dropdownNav[0].addEventListener("click", () => {

        if (dropdown[0].style.display !== "block") {
            dropdown[0].style.display = "block";
            arrow[0].setAttribute("src", "images/icon-arrow-up.svg");

            arrow[1].setAttribute("src", "images/icon-arrow-down.svg");
            dropdown[1].style.display = "";
        } else {
            arrow[0].setAttribute("src", "images/icon-arrow-down.svg");
            dropdown[0].style.display = "";
        }
    })
    // dropdown[0].addEventListener("mouseout", () => {
    //     dropdown[0].style.display = "";
    //     arrow[0].setAttribute("src", "images/icon-arrow-down.svg");
    // })


// second dropdown 

dropdownNav[1].addEventListener("click", () => {

        if (dropdown[1].style.display !== "block") {
            dropdown[1].style.display = "block";
            arrow[1].setAttribute("src", "images/icon-arrow-up.svg");

            arrow[0].setAttribute("src", "images/icon-arrow-down.svg");
            dropdown[0].style.display = "";
        } else {
            arrow[1].setAttribute("src", "images/icon-arrow-down.svg");
            dropdown[1].style.display = "";
        }
    })
    // dropdown[1].addEventListener("mouseover", () => {
    //     dropdown[1].style.display = "";
    //     arrow[1].setAttribute("src", "images/icon-arrow-down.svg");
    // });


// mobile dropdown

var mobileDropNav = document.getElementsByClassName("mobile-dropdown-nav");
var mobileDropdown = document.getElementsByClassName("mobile-dropdown");
var mobileArrow = document.getElementsByClassName("mobile-arrow");

mobileDropNav[0].addEventListener("click", () => {

    if (mobileDropdown[0].style.display !== "block") {
        mobileDropdown[0].style.display = "block";
        mobileArrow[0].setAttribute("src", "images/icon-arrow-up.svg");
    } else {
        mobileDropdown[0].style.display = "";
        mobileArrow[0].setAttribute("src", "images/icon-arrow-down.svg");
    }

});

mobileDropNav[1].addEventListener("click", () => {

    if (mobileDropdown[1].style.display !== "block") {
        mobileDropdown[1].style.display = "block"
        mobileArrow[1].setAttribute("src", "images/icon-arrow-up.svg");
    } else {
        mobileDropdown[1].style.display = "";
        mobileArrow[1].setAttribute("src", "images/icon-arrow-down.svg");
    }
});