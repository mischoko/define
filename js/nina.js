    //menu functionality
//changes logo to white under 920
window.addEventListener("load", function(){
    var width = window.innerWidth;
    var logo0 = document.getElementsByClassName('st0')[0];
    var logo1 = document.getElementsByClassName('st0')[1];
    var logo2 = document.getElementsByClassName('st0')[2];
    var logo3 = document.getElementsByClassName('st0')[3];
    var logo4 = document.getElementsByClassName('st0')[4];
    var logo5 = document.getElementsByClassName('st0')[5];
    var logo6 = document.getElementsByClassName('st0')[6];
    if(width < 920){
    logo0.style.fill = "white";
    logo1.style.fill = "white";
    logo2.style.fill = "white";
    logo3.style.fill = "white";
    logo4.style.fill = "white";
    logo5.style.fill = "white";
    logo6.style.fill = "white";
    }else{
    }    
});

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
window.addEventListener("load", function(){
    var width = window.innerWidth;
    var saveMenu = document.getElementById('mobileMenu');
    if(width > 920){
        saveMenu.classList.remove('hidden');
    } else{
        saveMenu.classList.add('hidden');
    }
});
//buttons for next/prev img functionality
var cage = document.getElementById('cage');
            var bg = document.getElementById('bgMagic');

            var arrc = ["linear-gradient(#1b3641,black)",
                        "linear-gradient(#1b3641,black)",
                        "linear-gradient(#3f364b,black)",
                        "linear-gradient(#3f364b,black)",
                        "linear-gradient(#27283a,black)",
                        "linear-gradient(#444e45,black)",
                        "linear-gradient(#3f2f2f,black)",];
                        
            var arr =  ["url('imgs/nina/00.jpg')no-repeat center ",
                        "url('imgs/nina/01.jpg')no-repeat center ",
                        "url('imgs/nina/02.jpg')no-repeat center ",
                        "url('imgs/nina/03.jpg')no-repeat center ",
                        "url('imgs/nina/04.jpg')no-repeat center ",
                        "url('imgs/nina/05.jpg')no-repeat center ",
                        "url('imgs/nina/06.jpg')no-repeat center "];
            var i = -1
            function next(){
                  i = i >= arr.length -1 ? 0 : i + 1;
                  cage.style.background = arr[i];
                  bg.style.background = arrc[i];
                  cage.style.backgroundSize = "cover";
            }
            function prev() {
                  i = i > 0 ? i - 1 : arr.length - 1;
                  cage.style.background = arr[i];
                  bg.style.background = arrc[i];
                  cage.style.backgroundSize = "cover";
            }
//functionality for mobile view of description pannel 
window.onload = function(){
    var wdth = window.innerWidth;
    var descGet = document.getElementById('textualis');
    if(wdth < 550){
        descGet.classList.remove('descAnim');
    } else{
        descGet.classList.add('descAnim');
    }
};
//toggle on pullout menu
document.querySelector('#openIt').addEventListener('click', function(e) {
    [].map.call(document.querySelectorAll('#textualis'), function(el) {
        el.classList.toggle('descAnim');
    });
});