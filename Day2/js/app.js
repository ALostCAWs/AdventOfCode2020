var arr =[];
var char1 = "-";
var char2 = " ";
var char3 = ":";
var validPass1 = 0;
var validPass2 = 0;

async function loadArray() {
   const response = await fetch("res/input.txt");
   const text = await response.text();
   arr = text.split(/\r|\n/);
   arr.pop();

   for (i = 0; i < arr.length; ++i) {
      console.log(arr[i]);
      var str = arr[i];
      var search1 = str.search(char1);
      var num1 = str.slice(0, search1);
      console.log(num1);

      var search2 = str.search(char2);
      var num2 = str.slice(search1 + 1, search2);
      console.log(num2);
      var requiredChar = str.slice(search2 + 1, search2 + 2);
      console.log(requiredChar);

      var search4 = str.search(char3);
      var password = str.slice(search4 + 2, arr[i].length);
      console.log(password);

      var counter = (password.split(requiredChar)).length - 1;
      console.log(counter);

      if(counter >= num1 && counter <= num2) {
         validPass1++;
      }

      var pos1 = password.slice(num1 - 1, num1);
      console.log("char in pos " + num1);
      console.log(pos1);
      var pos2 = password.slice(num2 - 1, num2);
      console.log("char in pos " + num2);
      console.log(pos2);

      if(pos1 == requiredChar && pos2 != requiredChar || pos1 != requiredChar && pos2 == requiredChar) {
         validPass2++;
         console.log("valid");
      } else {
         console.log("invalid");
      }
   }
   console.log(validPass1);
   console.log(validPass2);

   var para1 = document.createElement("p");
   var solutionMsg1 = document.createTextNode(validPass1);
   para1.appendChild(solutionMsg1);
   var element1 = document.getElementById("div1");
   element1.appendChild(para1);

   var para2 = document.createElement("p");
   var solutionMsg2 = document.createTextNode(validPass2);
   para2.appendChild(solutionMsg2);
   var element2 = document.getElementById("div2");
   element2.appendChild(para2);
}

loadArray();