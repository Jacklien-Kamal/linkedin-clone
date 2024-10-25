/* When the user clicks on the button,
/*toggle between hiding and showing the dropdown content */
function Show() {
  document.getElementById("myDropdown").classList.toggle("show");

}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function seeMore() {
  document.getElementById("dots").style.display = "none";
  document.getElementById("more").style.display = "inline";
  document.getElementById("myBtn").style.display = "none";
}
function like(_this) {
  if (_this.style.color == "blue") {
    _this.style.color = "gray";
  }
  else {
    _this.style.color = "blue";
  }
}

function hidNotBdg() {
  document.getElementById("bdg").style.display = "none";
}

function follow(_this) {
  if (_this.innerHTML == " +Follow") {
    _this.innerHTML = " Following";
    _this.style.backgroundColor = "rgba(190, 188, 188,.3)";
    _this.style.border = "1px solid black";

    _this.style.color = "black";

  }
  else {
    _this.innerHTML = " +Follow";

    _this.style.backgroundColor = "white";

  }
}

function changePro(event){
  const fileInput = event.target;
  const profileImage = document.getElementById('profile-image');
  const profileImage2 = document.getElementById("me-prof");


  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      profileImage.src = e.target.result;
      profileImage2.src=e.target.result;
    };

    reader.readAsDataURL(file);
  }
  document.getElementById("change-img").style.display = "none"
}
function addConnector(_this){
  var c= document.getElementById("connector")
  var cOld=c.textContent;
var newC=parseInt(cOld)
var connec=(newC+1)
console.log(connec)
 c.innerHTML=connec
 _this.innerHTML="Connected"
}
// document.getElementById('image-input').addEventListener('change', function (event) {
//   const fileInput = event.target;
//   const profileImage = document.getElementById('profile-image');
//   const profileImage2 = document.getElementById("me-prof");


//   const file = fileInput.files[0];

//   if (file) {
//     const reader = new FileReader();

//     reader.onload = function (e) {
//       profileImage.src = e.target.result;
//       profileImage2.src=e.target.result;
//     };

//     reader.readAsDataURL(file);
//   }
//   document.getElementById("change-img").style.display = "none"
// });






 function changeCover() {
  const fileInput = event.target;
  const profileImage = document.getElementById('cover');
 


  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      profileImage.src = e.target.result;
   
    };

    reader.readAsDataURL(file);
  }
  document.getElementById("change-img2").style.display = "none"

}





function changeBG(_this) {
  _this.style.backgroundColor = "white"
  location.href = "./index.html"
}



function check(event) {
  event.preventDefault(); // Prevent default form submission behavior

  var storedName = localStorage.getItem('name');
  var storedPw = localStorage.getItem('pw');

  var userName = document.getElementById('userName');
  var userPw = document.getElementById('userPw');
  var userRemember = document.getElementById('rememberMe');

  if (userName.value === storedName && userPw.value === storedPw) {
    window.location.href = "C:/Users/Al lewaa Company/Desktop/LinkedIn Clone/index.html";
  } else {
    alert('Error on login');
  }
}

var timer
var i = 0;

function slider() {
    //console.log(document.images);
    var imgs = ["./css/images/2.jpg", "./css/images/2.jpg", "./css/images/3.jpg", "./css/images/4.jpg", "./css/images/5.jpg", "./css/images/6.jpg"];

  
        if (i > 5) {
            i = 0;
            
        }
        document.getElementById("post-slider").src=imgs[i]
        i++;

    
}
function startSlide() {
  //console.log(document.images);
  var imgs = ["https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png","./css/images/f1.jpg", "./css/images/f2.jpg", "./css/images/f3.jpg"];

  setInterval(function () {

      if (i > 3) {
        i=0
      }
      document.getElementById("fade").src = imgs[i]
      i++;

  }, 1500)
}