    //menu functionality
window.onscroll = function() {
    var nav = document.getElementById('nav');
    var color0 = document.getElementsByClassName('menuItem')[0];
    var color1 = document.getElementsByClassName('menuItem')[1];
    var color2 = document.getElementsByClassName('menuItem')[2];
    var color3 = document.getElementsByClassName('menuItem')[3];
    var fix = document.getElementById('menu');
    var navBtnfix = document.getElementsByClassName('nav-btn')[0];
    var logoMargin = document.getElementsByClassName('logo')[0];
    var mobileBtn = document.getElementsByClassName('ibtn')[0];
    var mobileBtn1 = document.getElementsByClassName('ibtn')[1];
    var mobileBtn2 = document.getElementsByClassName('ibtn')[2];   
    if ( window.pageYOffset > 400 ) {
            nav.classList.add("blackNav");
            color0.classList.add("whiteOut");
            color1.classList.add("whiteOut");
            color2.classList.add("whiteOut");
            color3.classList.add("whiteOut");
            fix.classList.add("menuFix");
            logoMargin.classList.add("marginLogoFix");
            mobileBtn.style.background = "#ffffff";
            mobileBtn1.style.background = "#ffffff";
            mobileBtn2.style.background = "#ffffff";
            navBtnfix.style.top = "10px";
    }
    else {
            nav.classList.remove("blackNav");
            color0.classList.remove("whiteOut");
            color1.classList.remove("whiteOut");
            color2.classList.remove("whiteOut");
            color3.classList.remove("whiteOut");
            fix.classList.remove("menuFix");
            logoMargin.classList.remove("marginLogoFix");
            mobileBtn.style.background = "white";
            mobileBtn1.style.background = "white";
            mobileBtn2.style.background = "white";
            navBtnfix.style.top = "20px";
    }
}

function fun() {
    var checkbox = document.getElementById('navBtn');
    var ibtn = document.getElementsByClassName('ibtn')[0];
    var ibtn1 = document.getElementsByClassName('ibtn')[1];
    var ibtn2 = document.getElementsByClassName('ibtn')[2];
    var bug = document.getElementById('mobileMenu');
    var color0 = document.getElementsByClassName('menuItem')[0];
    var color3 = document.getElementsByClassName('menuItem')[3];
    if (checkbox.checked == true){
      window.scrollTo(top)
      color0.addEventListener("click", function(){
          checkbox.checked = false;
      })
      color3.addEventListener("click", function(){
          checkbox.checked = false;
      })
      bug.classList.remove("hidden");
      ibtn.style.background = "#393939";
      ibtn1.style.background = "#393939";
      ibtn2.style.background = "#393939";
    } else {
        bug.classList.add("hidden");
        ibtn.style.background = "white";
        ibtn1.style.background = "white";
        ibtn2.style.background = "white";
    }
}

//fixes the mobile menu overlay bug
window.onload = function(){
    var width = window.innerWidth;
    var saveMenu = document.getElementById('mobileMenu');
    if(width > 864){
        saveMenu.classList.remove('hidden');
    } else{
        saveMenu.classList.add('hidden');
    }
};

//scroll to services div based on hash upon return from subpage
var gethash = window.location.hash.substr(1);
if (gethash === "servScroll"){
    document.querySelector('.menuServBtn').click();
    setTimeout(function(){
        //removes the #servScroll
    history.pushState("", document.title, window.location.pathname);
    }), 500;
}
//scroll to contact div based on hash upon return from subpage
else if (gethash === "contScroll"){
        document.querySelector('.menuContBtn').click();
        setTimeout(function(){
            //removes the #contScroll
        history.pushState("", document.title, window.location.pathname);
        }), 500;
};
//text revelation function after scrolling
window.onscroll = function() {
var first = document.getElementsByClassName('fade')[0];
var second = document.getElementsByClassName('fade')[1];
if(first.classList.contains('intro') && second.classList.contains('intro')){
    return;
}
if(pageYOffset > 100){
    first.classList.add('intro');
    }
    if (pageYOffset > 450){
        second.classList.add('intro');
    }
};

var um = document.querySelectorAll('pop')
    um.addEventListener("click", function(){
var bla = um.dataset.name;
console.log(bla);
});
