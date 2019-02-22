    //menu functionality
window.onscroll = function() {
    var nav = document.getElementById('nav');
    var color0 = document.getElementsByClassName('menuItem')[0];
    var color1 = document.getElementsByClassName('menuItem')[1];
    var color2 = document.getElementsByClassName('menuItem')[2];
    var color3 = document.getElementsByClassName('menuItem')[3];
    var fix = document.getElementById('menu');
    var navBtnfix = document.getElementsByClassName('nav-btn')[0];
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
    if ( window.pageYOffset > 50 ) {
            nav.classList.add("blackNav");
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
            navBtnfix.style.top = "10px";
    }
    else {
            nav.classList.remove("blackNav");
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
    }
}

//scrolling function services
document.querySelector('.menuServBtn').addEventListener("click", function(event) {
    event.preventDefault();
    var offset = 0, y = 0, dy, call = setInterval(function(){
    	if( Math.abs(dy=offset-y)>1 ) y += dy;
      else { clearInterval(call); y = offset; }
      document.documentElement.scrollTop = y - 90;
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
      document.documentElement.scrollTop = y - 90;
    },10);
    offset = document.getElementById(event.srcElement.dataset.scroll).offsetTop;
		y = document.documentElement.scrollTop;
});
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
//mailer script
!function(){
    var contactForm = document.querySelector('.contact_form');
    var subjectElement = document.querySelector('.input-subject');
    var emailElement = document.querySelector('.input-email');
    var messageElement = document.querySelector('.input-message');
    var calendarElement = document.querySelector('.calendar');
    var successAlertElement = document.querySelector('.successAlert');
    var contactFormElement = document.querySelector('.contact_form');

    function onComplete () {
        calendarElement.style.display = 'none';
        successAlertElement.style.display = 'block';
        contactFormElement.reset();
    }
  
  	function onSubmit(event) {
        event.preventDefault();
        var email = messageElement.value;
        var message = emailElement.value;

        if (email && message) {

            var request = new XMLHttpRequest();
            var url = "https://www.define.sk/new/php.php"

            request.open('POST', url);

            var subject = subjectElement.value;
            var data = new FormData();
            data.append("subj", subject);
            data.append("message", message); 
            data.append("email", email);
            request.send(data);

            request.onreadystatechange = function () {
                if(request.readyState === 4) {
                    onComplete();
                }
            };
        }
        return false;
    };
    contactForm.onsubmit = onSubmit;
}();

document.getElementById('okBtn').addEventListener("click", function(){
    var calendar = document.getElementsByClassName('calendar')[0];
    var success = document.getElementsByClassName('successAlert')[0];
        calendar.style.display = "flex";
        success.style.display = "none";
});

var cage = document.getElementById('cage');
            var bg = document.getElementById('bgMagic');

            var arrc = ["linear-gradient(#1b3641,black)",
                        "linear-gradient(#1b3641,black)",
                        "linear-gradient(#3f364b,black)",
                        "linear-gradient(#3f364b,black)",
                        "linear-gradient(#27283a,black)",
                        "linear-gradient(#444e45,black)",
                        "linear-gradient(#3f2f2f,black)",];

            var arr =  ["url('imgs/nina/00.jpg')no-repeat",
                        "url('imgs/nina/01.jpg')no-repeat",
                        "url('imgs/nina/02.jpg')no-repeat",
                        "url('imgs/nina/03.jpg')no-repeat",
                        "url('imgs/nina/04.jpg')no-repeat",
                        "url('imgs/nina/05.jpg')no-repeat",
                        "url('imgs/nina/06.jpg')no-repeat"];
            var i = -1
            function next(){
                  i = i >= arr.length -1 ? 0 : i + 1;
                  cage.style.background = arr[i];
                  bg.style.background = arrc[i];
            }
            function prev() {
                  i = i > 0 ? i - 1 : arr.length - 1;
                  cage.style.background = arr[i];
                  bg.style.background = arrc[i];
            }