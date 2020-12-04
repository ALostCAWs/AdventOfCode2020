var arr =[];
const arrSlopes = [
   [1, 1],
   [1, 3],
   [1, 5],
   [1, 7],
   [2, 1]
];
var rise;
var run;
var cursor = 0;
var treeCount = 0;
var product = 0;

async function sendSlope() {
   treeCount = 0;
   for (i = 0; i < arrSlopes.length; i++) {
      rise = arrSlopes[i][0];
      run = arrSlopes[i][1];
      loadArray(rise, run);
   }
}

async function loadArray(rise, run) {
   const response = await fetch("res/input.txt");
   const text = await response.text();
   arr = text.split(/\r|\n/);
   arr.pop();
   console.log("Array length - " + arr.length);
   console.log("String length - " + arr[0].length);

   for (i = 0; i < arr.length; i += rise) {
      cursor = cursor % arr[i].length
      if(arr[i][cursor] == "#") {
         treeCount++;
      }

      var fHalf = arr[i].slice(0, cursor);
      var lfHalf = arr[i].slice(cursor + 1, arr[i].length);
      var tmp = fHalf + "O" + lfHalf;
      //console.log(tmp);

      cursor += run;
   }
   console.log(rise);
   console.log(run);
   console.log("Trees found in path - " + treeCount);
   console.log("");
   if (product == 0) {
      product += treeCount;
   } else {
      product = product * treeCount;
   }
   console.log(product);

   var para1 = document.createElement("p");
   var solutionMsg1 = document.createTextNode("Rise - " + rise + " Run - " + run + " Trees found - " + treeCount);
   para1.appendChild(solutionMsg1);
   var element1 = document.getElementById("div1");
   element1.appendChild(para1);

   var para2 = document.createElement("p");
   var solutionMsg2 = document.createTextNode("Trees found - " + treeCount + " Product - " + product);
   para2.appendChild(solutionMsg2);
   var element2 = document.getElementById("div2");
   element2.appendChild(para2);

   cursor = 0;
   treeCount = 0;
}

sendSlope();
