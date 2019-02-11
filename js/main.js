    //menu functionality
window.onscroll = function() {
    var nav = document.getElementById('nav');
    var color0 = document.getElementsByClassName('menuItem')[0];
    var color1 = document.getElementsByClassName('menuItem')[1];
    var color2 = document.getElementsByClassName('menuItem')[2];
    var color3 = document.getElementsByClassName('menuItem')[3];
    var fix = document.getElementById('menu');
    var logo = document.getElementsByClassName('st0')[0];
    var logo1 = document.getElementsByClassName('st0')[1];
    var logo2 = document.getElementsByClassName('st0')[2];
    var logo3 = document.getElementsByClassName('st0')[3];
    var logo4 = document.getElementsByClassName('st0')[4];
    var logo5 = document.getElementsByClassName('st0')[5];
    var logo6 = document.getElementsByClassName('st0')[6];
    var logoMargin = document.getElementsByClassName('logo')[0];
    if ( window.pageYOffset > 100 ) {
            nav.classList.add("blackNav");
            color0.classList.add("whiteOut");
            color1.classList.add("whiteOut");
            color2.classList.add("whiteOut");
            color3.classList.add("whiteOut");
            fix.classList.add("menuFix");
            logo.style.fill = "white";
            logo1.style.fill = "white";
            logo2.style.fill = "white";
            logo3.style.fill = "white";
            logo4.style.fill = "white";
            logo5.style.fill = "white";
            logo6.style.fill = "white";
            logoMargin.classList.add("marginLogoFix");
    }
    else {
            nav.classList.remove("blackNav");
            color0.classList.remove("whiteOut");
            color1.classList.remove("whiteOut");
            color2.classList.remove("whiteOut");
            color3.classList.remove("whiteOut");
            fix.classList.remove("menuFix");
            logo.style.fill = "#393939";
            logo1.style.fill = "#393939";
            logo2.style.fill = "#393939";
            logo3.style.fill = "#393939";
            logo4.style.fill = "#393939";
            logo5.style.fill = "#393939";
            logo6.style.fill = "#393939";
            logoMargin.classList.remove("marginLogoFix");
    }
}