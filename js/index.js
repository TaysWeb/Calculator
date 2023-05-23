 // All my needed variables 

 let dis1 = 0 ,
     dis2 = 0 ,
     opr = " " ,
     divNumbs = document.querySelectorAll(".container.num-block") ,
     divOps = document.querySelectorAll(".container.op-block"),
     displayBox = document.getElementById(".dis") ,
     clearBox = document.getElementById("cl") ,
     delBox = document.getElementById("delAll"),

     //operations variables 
      opClick = false ;
      equClick = false ;
      click_1 = 0 ; // when the first operator is clicked 
 
      //adding the actions to dives
      //clear displayBox 

      clearBox.onclick = function clearElement() {
        clearBox.innerHTML = clearBox.innerHTML.substring(0,clearBox.innerHTML.length -1);
      }

     clearBox.addEventListener("click", clearElement);

      // del box to clear everything
       delBox.onclick = function deleteAll() {;

       opClick = false;
       equClick = false ;
       click_1 = 0;
       dis1 = 0;
       dis2 = 0;
       opr =  0;
       dis1.innerHTML = " 0" ;

       };

       // My numbers display 

       for (let i = 0; i < divNumbs; i++) {
        divNumbs[1].onclick = function () {
            if (opClick) {
                dis1 = parseFloat("dis.innerHTML");
                dis1.innerHTML = " " ;
            }
        };
         
        
       } // End of For loop
