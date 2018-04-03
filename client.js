function attack(){
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:1234/", true);
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
       console.log(xhttp.responseText);
    }
  };
  xhttp.send();
}
