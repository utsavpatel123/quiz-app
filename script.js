let button1 = document.getElementById("nextButton1");
let button2 = document.getElementById("nextButton2");
let button3 = document.getElementById("nextButton3");
let button4 = document.getElementById("nextButton4");
let submit = document.getElementById("nextButton5");
let playAgain = document.getElementById("nextButton6");

let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");
let container4 = document.getElementById("container4");
let container5 = document.getElementById("container5");
let container6 = document.getElementById("container6");
var rightAnswer = document.querySelectorAll(".rightAnswer");

let right1 = document.getElementById("right1")
let right2 = document.getElementById("right2")
let right3 = document.getElementById("right3")
let right4 = document.getElementById("right4")
let right5 = document.getElementById("right5")
let scored = document.getElementById("scored");

var flag = true;

button1.addEventListener("click", function () {
  flag = true;
  container1.style.display = "none";
  container1.style.transform = "translateX(-400px)";
  container2.style.transform = "translateX(20px)";
  container2.style.display = "block";
});

button2.addEventListener("click", function () {
  flag = true;
  container2.style.display = "none";
  container2.style.transform = "translateX(-400px)";
  container3.style.transform = "translateX(20px)";
  container3.style.display = "block";
});

button3.addEventListener("click", function () {
  flag = true;
  container3.style.display = "none";
  container3.style.transform = "translateX(-400px)";
  container4.style.transform = "translateX(20px)";
  container4.style.display = "block";
});

button4.addEventListener("click", function () {
  flag = true;
  container4.style.display = "none";
  container4.style.transform = "translateX(-400px)";
  container5.style.transform = "translateX(20px)";
  container5.style.display = "block";
});

submit.addEventListener("click", function () {
  flag = true;
  container5.style.display = "none";
  container5.style.transform = "translateX(-400px)";
  container6.style.transform = "translateX(20px)";
  container6.style.display = "block";
});

playAgain.addEventListener("click", function (e) {
  container6.style.display = "none";
  container6.style.transform = "translateX(-400px)";
  container1.style.display = "block";
  container1.style.transform = "translateX(20px)";

});


var count = 0;

rightAnswer.forEach((element) => {

    
    element.classList.remove("greencolor")
    element.addEventListener("click", function () {
        


      if (flag === true) {
        if (
          element.innerHTML === "c++" ||
          element.innerHTML === "java script" ||
          element.innerHTML === "c++" ||
          element.innerHTML === "Hypertext Markup Language" ||
          element.innerHTML === "Cascading Style Sheets"
        ) {
          element.classList.add("active");
          count = count + 1
        
          scored.innerHTML = count 

        }
        else {

            if (element.innerHTML === "html" || element.innerHTML === "Java script" || element.innerHTML === "css" ) { 
                 element.classList.add("passive");
                 right1.style.backgroundColor = "rgb(130, 206, 130)"
                 right1.style.color = "green"   
            }
            else if(element.innerHTML === "node js" || element.innerHTML === "cobol" || element.innerHTML === "java"){
                element.classList.add("passive");
                right2.style.backgroundColor = "rgb(130, 206, 130)"
                right2.style.color = "green"
            }
            else if(element.innerHTML === "python" || element.innerHTML === ".net" || element.innerHTML === "php"){
                element.classList.add("passive");
                right3.style.backgroundColor = "rgb(130, 206, 130)"
                right3.style.color = "green"
            }
            else if(element.innerHTML === "Hypertex Markup Language" || element.innerHTML === "Hypertext Markap Language" || element.innerHTML === "Hypartext Markup Language"){
                element.classList.add("passive");
                right4.style.backgroundColor = "rgb(130, 206, 130)"
                right4.style.color = "green"
            }
            else if(element.innerHTML === "Casceding Style Sheets" || element.innerHTML === "Cascading Styles Sheet" || element.innerHTML === "Cascading Style Sheet"){
                element.classList.add("passive");
                right5.style.backgroundColor = "rgb(130, 206, 130)"
                right5.style.color = "green"
            }
          
        }

        flag = false;
      } 
    },
    { once: true }
  );
});



