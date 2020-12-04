var arr =[];
var passports = [];
const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid"];
const ecl = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
var info = "";
var p1Valid = true;
var valid = true;
var numOfValid = 0;
var numOfP1Valid = 0;
var cursor = 0;
var field = "";
var value;

async function loadArray() {
   const response = await fetch("res/input.txt");
   const text = await response.text();
   arr = text.split(/\r|\n/);
   arr.pop();

   for (i = 0; i < arr.length; i++) {
      if(arr[i] == "") {
         passports.push(info);
         info = "";
      } else {
         info = info + " " + arr[i];
         info = info.trim();
      }
   }
   passports.push(info);
   info = "";

   for (i = 0; i < passports.length; i++) {
      valid = true;
      p1Valid = true;
      console.log(passports[i]);
      for (j = 0; j < fields.length; j++) {
         if (passports[i].includes(fields[j]) && valid == true) {
            cursor = passports[i].indexOf(fields[j]) + 3;
            field = passports[i].slice(cursor, passports[i].length).trim();
            field.split(":");
            cursor = field.indexOf(" ");

            // Handle last entry error
            if (cursor == -1) {
               field = field.slice(1, passports[i].length);
            } else {
               field = field.slice(1, cursor);
            }
            console.log(fields[j] + " - " + field);

            //Validate fields
            switch (fields[j]) {
               case "byr":
                  if (field > 2002 || field < 1920) {
                     valid = false;
                  }
                  break;
               case "iyr":
                  if (field > 2020 || field < 2010) {
                     valid = false;
                  }
                  break;
               case "eyr":
                  if (field > 2030 || field < 2020) {
                     valid = false;
                  }
                  break;
               case "hgt":
                  if (field.indexOf("cm") != -1) {
                     value = field.slice(0, field.indexOf("cm"));
                     if (value > 193 || value < 150) {
                        valid = false;
                     }
                  } else if (field.indexOf("in") != -1) {
                     value = field.slice(0, field.indexOf("in"));
                     if (value > 76 || value < 59) {
                        valid = false;
                     }
                  } else {
                     valid = false;
                  }
                  break;
               case "hcl":
                  if (field.search(/^#[0-9a-f]{6}/i) == -1) {
                     valid = false;
                  }
                  break;
               case "ecl":
                  if (ecl.includes(field)) {
                    // Valid
                  } else {
                     valid = false;
                  }
                  break;
               case  "pid":
                  if (field[0] != 0 && field.length != 9) {
                     valid = false;
                  }
               //case  "cid":
                 // ignored.
            }
         } else {
            if (fields[j] != "cid") {
               valid = false;
            }
         }
      }
      if (valid == true) {
         console.log("Valid --");
         numOfValid++;
      }
      if (p1Valid == true) {
         numOfP1Valid++;
      }
      console.log("");
   }
   console.log("Num of Valid - " + numOfValid);
   console.log("Num of Valid (Part 1) - " + numOfP1Valid);

   var para1 = document.createElement("p");
   var solutionMsg1 = document.createTextNode(numOfP1Valid);
   para1.appendChild(solutionMsg1);
   var element1 = document.getElementById("div1");
   element1.appendChild(para1);

   var para2 = document.createElement("p");
   var solutionMsg2 = document.createTextNode(numOfValid);
   para2.appendChild(solutionMsg2);
   var element2 = document.getElementById("div2");
   element2.appendChild(para2);
}

loadArray();