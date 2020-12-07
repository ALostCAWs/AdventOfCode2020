async function loadArray() {
   const response = await fetch("res/input.txt");
   const text = await response.text();
   const groups = text.split('\n\n');
   const members = text.split(/\r|\n/);
   members.pop();
   let groupMembers = [];
   let groupSizes = [];
   let groupAns = [];
   let totalAns = 0;
   let unanimousAns = 0;

   groups.forEach(group => {
         // Part 1
            // Remove duplicates & get sum
      let currentGroup = new Set(group.trim().split(/\s?/));
      totalAns += currentGroup.size;
         // Part 2
            // Compare group population to num of yes answers
      // Isolate each persons answers & get group pop
      groupMembers = group.trim().split('\n');
      console.log(groupMembers);
      groupSizes.push(groupMembers.length);
      let groupedStr = "";
      for (i = 0; i < groupMembers.length; i++) {
         groupedStr += groupMembers[i];
      }
      // Get array of combined answers
      groupAns.push(groupedStr);
   });

   for (i = 0; i < groupAns.length; i++) {
      console.log(groupAns[i]);
      console.log(groupSizes[i]);
      // Remove duplicates
      let answer = new Set(groupAns[i].trim());
      console.log(answer);
      // Find out # of char occurences
      answer.forEach(char => {
         var regex = new RegExp(char, "g");
         var occurences = groupAns[i].match(regex).length;
         console.log(char);
         console.log(occurences);
         // Compare to group size
         if (occurences == groupSizes[i]) {
            unanimousAns++;
         }
      });
      answer.clear();
   }
   console.log(unanimousAns);

   var para1 = document.createElement("p");
   var solutionMsg1 = document.createTextNode(totalAns);
   para1.appendChild(solutionMsg1);
   var element1 = document.getElementById("div1");
   element1.appendChild(para1);
   var para2 = document.createElement("p");
   var solutionMsg2 = document.createTextNode(unanimousAns);
   para2.appendChild(solutionMsg2);
   var element2 = document.getElementById("div2");
   element2.appendChild(para2);
}

loadArray();