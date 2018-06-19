<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
    var time = new Date().getHours();
    if (time > 15 && time < 17 ) {
        document.getElementById("demo").innerHTML = "Good day";
    }
}

window.onload = myFunction;
</script>
</head>


<body>


<p id="demo"></p>



</body>
</html>




<!DOCTYPE html>
<html>
<head>
<script>
var pin = [
    {"name":"The Crown Pub","lat":"40.586255","lng":"-105.076543","url":"http://www.crownpub.net"}
];  

</script>


<script>
function myFunction() {
    var time = new Date().getHours();
    if (time > 15 && time < 17 ) {
        document.getElementById("demo").innerHTML = "Good day";
    }
}

document.getElementsByTagName('div')[0].innerHTML = ball;

window.onload = myFunction;
</script>
</head>


<body>



<div>
</div>


   <script type="text/javascript"> 
        var ball = pin[0].name;
        document.getElementsByTagName('div')[0].innerHTML = ball;
    </script>
</body>
</html>


var data = {
  1: {
    2: {
      3: 45
    }
  },
  2: {
    2: {
      3: 98
    }
  }
};

console.log(data[1][2][3]); // 45
console.log(data[2][2][3]); // 98

// or
var A = 1, B = 2, C = 3;
console.log(data[A][B][C]); // still 45 