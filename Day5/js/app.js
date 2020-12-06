var arr = [];
var seatIDArr = [];
const rowCount = 127; // 0 - 127
const colCount = 7; // 0-7

async function loadArray() {
   const response = await fetch("res/input.txt");
   const text = await response.text();
   arr = text.split(/\r|\n/);
   arr.pop();

   for (i = 0; i < arr.length; i++) {
      var rowStr = arr[i].slice(0, 7);
      var row = await getRowCol(rowStr, rowCount);
      var colStr = arr[i].slice(7);
      var col = await getRowCol(colStr, colCount);
      var seatID = (row * 8) + col;
      seatIDArr.push(seatID);
      console.log("row - " + row + " col - " + col);
      console.log("seatID - " + seatID);
   }
   var highestID = Math.max(...seatIDArr);
   console.log(highestID);

   seatIDArr.sort(function(a, b){return a-b});
   // Adjusted starting pos, my seat is between 2 others
   for (i = 1; i < seatIDArr.length - 1; i++) {
      var currentSeat = seatIDArr[i];
      var nextSeat = seatIDArr[i + 1];
      var mySeat;

      if (currentSeat + 1 != nextSeat) {
         // Add one, my seat is the one after this discrepancy
         mySeat = currentSeat + 1;
      }
   }
   console.log(mySeat);

   var para1 = document.createElement("p");
   var solutionMsg1 = document.createTextNode(highestID);
   para1.appendChild(solutionMsg1);
   var element1 = document.getElementById("div1");
   element1.appendChild(para1);

   var para2 = document.createElement("p");
   var solutionMsg2 = document.createTextNode(mySeat);
   para2.appendChild(solutionMsg2);
   var element2 = document.getElementById("div2");
   element2.appendChild(para2);
}

async function getRowCol(currentStr, valCount) {
   console.log(currentStr);
   var value;
   var valL = 0;
   var valH = valCount;
   // Find midway point & adjust highest / lowest value
   for (j = 0; j < currentStr.length; j++) {
      var cursor = currentStr.slice(j, j + 1);
      //console.log(cursor);
      var diff = valH - valL;
      if (diff != 1) {
         if (cursor == "F" || cursor == "L") {
            valH = valH + valL;
            valH = (valH / 2) - 1;
            valH = Math.ceil(valH);
            //console.log(valH);
         } else {
            valL = valH + valL;
            valL = valL / 2;
            valL = Math.ceil(valL);
         }
         //console.log(valL + " - " + valH);
      } else {
         if (cursor == "F" || cursor == "L") {
            value = valL;
         } else {
            value = valH
         }
      }
   }
   //console.log(value);
   return value;
}

loadArray();