function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

let count1 = 0;

function plus1() {
  count1++;
  document.querySelector('.count-1').innerHTML = count1;
}

function minus1() {
  if (count1 > 0) {
    count1--;
    document.querySelector('.count-1').innerHTML = count1;
  }
}
let count2 = 0;

function plus2() {
  count2++;
  document.querySelector('.count-2').innerHTML = count2;
}

function minus2() {
  if (count2 > 0) {
    count2--;
    document.querySelector('.count-2').innerHTML = count2;
  }
}

