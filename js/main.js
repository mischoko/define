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
    var mobileBtn = document.getElementsByClassName('ibtn')[0];
    var mobileBtn1 = document.getElementsByClassName('ibtn')[1];
    var mobileBtn2 = document.getElementsByClassName('ibtn')[2];   
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
            mobileBtn.style.background = "#ffffff";
            mobileBtn1.style.background = "#ffffff";
            mobileBtn2.style.background = "#ffffff";
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
            mobileBtn.style.background = "#393939";
            mobileBtn1.style.background = "#393939";
            mobileBtn2.style.background = "#393939";
    }
}

function fun() {
    var checkbox = document.getElementById('navBtn');
    var ibtn = document.getElementsByClassName('ibtn')[0];
    var ibtn1 = document.getElementsByClassName('ibtn')[1];
    var ibtn2 = document.getElementsByClassName('ibtn')[2];
    var bug = document.getElementById('mobileMenu');
    if (checkbox.checked == true){
      window.scrollTo(top)
      bug.classList.remove("hidden");
      ibtn.style.background = "#393939";
      ibtn1.style.background = "#393939";
      ibtn2.style.background = "#393939";
    } else {
        bug.classList.add("hidden");
    }
}

//scrolling function services
document.querySelector('.menuServBtn').addEventListener("click", function(event) {
    event.preventDefault();
    var offset = 0, y = 0, dy, call = setInterval(function(){
    	if( Math.abs(dy=offset-y)>1 ) y += dy;
      else { clearInterval(call); y = offset; }
      document.documentElement.scrollTop = y - 120;
    },10);
    offset = document.getElementById(event.srcElement.dataset.scroll).offsetTop;
		y = document.documentElement.scrollTop;
});
//scrolling function contacts
document.querySelector('.menuContBtn').addEventListener("click", function(event) {
    event.preventDefault();
    var offset = 0, y = 0, dy, call = setInterval(function(){
    	if( Math.abs(dy=offset-y)>1 ) y += dy;
      else { clearInterval(call); y = offset; }
      document.documentElement.scrollTop = y - 120;
    },10);
    offset = document.getElementById(event.srcElement.dataset.scroll).offsetTop;
		y = document.documentElement.scrollTop;
});

window.onload = function(){
    var width = window.innerWidth;
    var saveMenu = document.getElementById('mobileMenu');
    if(width > 864){
        saveMenu.classList.remove('hidden');
    } else{
        saveMenu.classList.add('hidden');
    }
};