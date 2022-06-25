
let navbar = document.getElementById("show");
let ham_menu = document.getElementById("ham-menu");
let ham_close = document.getElementById("ham-close");
let ham = document.getElementById("ham");
ham_close.style.display = "none";

function menushow() {
  ham_close.style.display = "block";
  ham_menu.style.display = "none";
  navbar.style.display = "block";
  ham.style.backgroundColor = "#f42ba5"
  ham_close.style.color = "white";
}

function menuhide() {
  ham_close.style.display = "none";
  ham_menu.style.display = "block";
  navbar.style.display = "none";
  ham.style.backgroundColor = "white"
}

let more = document.getElementById("more");
let hide = document.getElementById("more-close");
let sub = document.getElementById("sub");
let a = document.getElementById("a");

hide.style.display = "none";

function showmore() {
  more.style.display = "none";
  hide.style.display = "block";
  sub.style.display = "block";
  a.style.paddingBottom = "3rem";
}

function hidemore() {
  more.style.display = "block";
  hide.style.display = "none";
  sub.style.display = "none";
  a.style.paddingBottom = "0rem";

}

let inc_1 = document.getElementById("inc-1");
let dic_1 = document.getElementById("dic-1");
let num_1 = document.getElementById("num-1");

let inc_2 = document.getElementById("inc-2");
let dic_2 = document.getElementById("dic-2");
let num_2 = document.getElementById("num-2");

let last = document.getElementById("last");
let btn = document.getElementById("btn");

inc_1.addEventListener("click", add_1);
dic_1.addEventListener("click", rem_1);

let num = 0;
num_1.textContent = num;

function add_1() {
  num++;
  num_1.textContent = num;
  dic_1.style.opacity = "1";
  last.style.display = "flex";
  btn.style.backgroundColor = "#f42ba5"
}

function rem_1() {
  if (num > 0) {
    num--;
    num_1.textContent = num;
  }
  if (num == 0) {

    dic_1.style.opacity = "0.2";
    last.style.display = "none";
    btn.style.backgroundColor = "#f42ba497"

  }
}

inc_2.addEventListener("click", add_2);
dic_2.addEventListener("click", rem_2);

num_2.textContent = num;

function add_2() {
  num++;
  num_2.textContent = num;
  dic_2.style.opacity = "1";
  last.style.display = "flex";
  btn.style.backgroundColor = "#f42ba5"
}

function rem_2() {
  if (num > 0) {
    num--;
    num_2.textContent = num;
  }
  if (num == 0) {
    dic_2.style.opacity = "0.2";
    last.style.display = "none";
    btn.style.backgroundColor = "#f42ba497";
  }
}

let hide_1 = document.getElementById("hide-1");
let hide_2 = document.getElementById("hide-2");

hide_1.addEventListener("click", hide_info_1)
hide_2.addEventListener("click", hide_info_2)

function hide_info_1() {
  if (hide_1.textContent.includes("hide info")) {

    hide_1.previousElementSibling.style.display = "none";
    hide_1.textContent = "see more"
  }
  else {
    hide_1.previousElementSibling.style.display = "block";
    hide_1.textContent = "hide info"
  }

}

function hide_info_2() {
  if (hide_2.textContent.includes("hide info")) {

    hide_2.previousElementSibling.style.display = "none";
    hide_2.textContent = "see more"
  }
  else {
    hide_2.previousElementSibling.style.display = "block";
    hide_2.textContent = "hide info"
  }

}

let Lbtn_1 = document.getElementById("Lbtn-1");
let Lbtn_2 = document.getElementById("Lbtn-2");
let Rbtn_1 = document.getElementById("Rbtn-1");
let Rbtn_2 = document.getElementById("Rbtn-2");

let Litem_1 = document.getElementById("Litem-1")
let Litem_2 = document.getElementById("Litem-2")
let Ritem_1 = document.getElementById("Ritem-1")
let Ritem_2 = document.getElementById("Ritem-2")

Lbtn_2.addEventListener('click', LshowScoll);

function LshowScoll() {
  Litem_1.style.display = "none";
  Litem_2.style.display = "block";
  Lbtn_1.style.opacity = "1";
}

Lbtn_1.addEventListener('click', LhideScoll);

function LhideScoll() {
  Litem_1.style.display = "block";
  Litem_2.style.display = "none";
  Lbtn_1.style.opacity = "0.2";
}

Rbtn_2.addEventListener('click', RshowScoll);

function RshowScoll() {
  Ritem_1.style.display = "none";
  Ritem_2.style.display = "block";
  Rbtn_1.style.opacity = "1";
}

Rbtn_1.addEventListener('click', RhideScoll);

function RhideScoll() {
  Ritem_1.style.display = "block";
  Ritem_2.style.display = "none";
  Rbtn_1.style.opacity = "0.2";

}