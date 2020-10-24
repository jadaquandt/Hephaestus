
let timer1;
let str = '';
let counter = 0;

const mainNav = ['Breakfast', 'Lunch', 'Dinner'];

mainNav.forEach((obj) => {
    counter++;
    str+=`
    <div class="item">
    <div class="vcontain">
      <h1 onmouseover="show('m${counter}')" onmouseout="hide('m${counter}')">${obj}</h1>
      <div id="m1" onmouseover="show('m${counter}')" onmouseout="hide('m${counter}')">
      </div>
    </div>
  </div>`
    console.log(obj)
});
document.getElementsByClassName('hcontain')[0].innerHTML = str;

function show(id) {
  hideAll();
  clearTimeout(timer1);
  document.getElementById(id).style.visibility = "visible";
}

function hide(id) {
  timer1 = setTimeout(() => {
    document.getElementById(id).style.visibility = "hidden";
  }, 1500);
}

function hideAll() {
  document.getElementById("m1").style.visibility = "hidden";
  document.getElementById("m2").style.visibility = "hidden";
  document.getElementById("m3").style.visibility = "hidden";
}


