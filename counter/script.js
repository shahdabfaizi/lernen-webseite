function plus() {
  count++;

  var element = document.getElementById("count");
  element.innerHTML = count;
}

function minus() {
  count--;
  var element = document.getElementById("count");
  element.innerHTML = count;
}

var count = 0;
