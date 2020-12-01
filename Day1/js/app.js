var arr =[];

async function loadArray() {
   const response = await fetch("res/input.txt");
   const text = await response.text();
   arr = text.split(/\r|\n/);
   arr.pop();

   for (i = 0; i < arr.length; ++i) {
      for (j = 0; j < arr.length; ++j) {
         var sum = +arr[i] + +arr[j];
         if(sum == 2020) {
            var product = arr[i] * arr[j];
            console.log("Part 1");
            console.log(arr[i]);
            console.log(arr[j]);
            console.log(sum);
            console.log(product);

            var msg1 = arr[i] + " + " + arr[j] + " = " + sum;
            var msg2 = arr[i] + " * " + arr[j] + " = " + product;

            var para1 = document.createElement("p");
            var solutionMsg1 = document.createTextNode(msg1);
            para1.appendChild(solutionMsg1);
            var element1 = document.getElementById("div1");
            element1.appendChild(para1);

            var para2 = document.createElement("p");
            var solutionMsg2 = document.createTextNode(msg2);
            para2.appendChild(solutionMsg2);
            var element2 = document.getElementById("div1");
            element2.appendChild(para2);
         }

         if(sum <= 2020) {
            for (k = 0; k < arr.length; ++k) {
               sum = +arr[i] + +arr[j] + +arr[k];
               if(sum == 2020) {
                  var product = arr[i] * arr[j] * arr[k];
                  console.log("Part 2");
                  console.log(arr[i]);
                  console.log(arr[j]);
                  console.log(arr[k]);
                  console.log(sum);
                  console.log(+arr[i] * +arr[j] * +arr[k]);

                  var msg1 = arr[i] + " + " + arr[j] + " + " + arr[k] + " = " + sum;
                  var msg2 = arr[i] + " * " + arr[j] + " * " + arr[k] + " = " + product;

                  var para1 = document.createElement("p");
                  var solutionMsg1 = document.createTextNode(msg1);
                  para1.appendChild(solutionMsg1);
                  var element1 = document.getElementById("div2");
                  element1.appendChild(para1);

                  var para2 = document.createElement("p");
                  var solutionMsg2 = document.createTextNode(msg2);
                  para2.appendChild(solutionMsg2);
                  var element2 = document.getElementById("div2");
                  element2.appendChild(para2);
               }
            }
         }
      }
   }
}

loadArray();